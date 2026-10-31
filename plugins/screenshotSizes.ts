// Vite plugin: exposes the pixel size of every screenshot as
// `virtual:screenshot-sizes`, so <img> tags get width/height and the browser
// can reserve space before the image loads (no layout shift).
// Reads PNG, JPEG and WebP headers directly; no image library needed.

import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

const VIRTUAL_ID = "virtual:screenshot-sizes";
const RESOLVED_ID = "\0" + VIRTUAL_ID;
const IMAGE_RE = /\.(png|jpe?g|webp)$/i;

type Size = [number, number];

function readSize(buf: Buffer): Size | null {
  // PNG: IHDR width/height at bytes 16–23
  if (buf.length > 24 && buf.toString("ascii", 1, 4) === "PNG") {
    return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
  }

  // JPEG: walk the segments until a start-of-frame marker
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i + 9 < buf.length) {
      if (buf[i] !== 0xff) return null;
      const marker = buf[i + 1];
      const isSOF = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
      if (isSOF) return [buf.readUInt16BE(i + 7), buf.readUInt16BE(i + 5)];
      i += 2 + buf.readUInt16BE(i + 2);
    }
    return null;
  }

  // WebP: RIFF container with a VP8 / VP8L / VP8X chunk
  if (buf.length > 30 && buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const chunk = buf.toString("ascii", 12, 16);
    if (chunk === "VP8 ") return [buf.readUInt16LE(26) & 0x3fff, buf.readUInt16LE(28) & 0x3fff];
    if (chunk === "VP8L") {
      const bits = buf.readUInt32LE(21);
      return [(bits & 0x3fff) + 1, ((bits >> 14) & 0x3fff) + 1];
    }
    if (chunk === "VP8X") return [buf.readUIntLE(24, 3) + 1, buf.readUIntLE(27, 3) + 1];
  }

  return null;
}

/** @param dir screenshots folder, relative to the project root (e.g. "src/assets/screenshots"). */
export function screenshotSizes(dir: string): Plugin {
  let root = process.cwd();

  const collect = () => {
    const base = path.join(root, dir);
    const sizes: Record<string, Size> = {};
    if (!fs.existsSync(base)) return sizes;

    for (const slug of fs.readdirSync(base)) {
      const folder = path.join(base, slug);
      if (!fs.statSync(folder).isDirectory()) continue;
      for (const file of fs.readdirSync(folder)) {
        if (!IMAGE_RE.test(file)) continue;
        const size = readSize(fs.readFileSync(path.join(folder, file)));
        // Keys match import.meta.glob keys: "/src/assets/screenshots/<slug>/<file>"
        if (size) sizes[`/${dir}/${slug}/${file}`.replace(/\\/g, "/")] = size;
      }
    }
    return sizes;
  };

  return {
    name: "screenshot-sizes",
    configResolved(config) {
      root = config.root;
    },
    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_ID : undefined;
    },
    load(id) {
      return id === RESOLVED_ID ? `export default ${JSON.stringify(collect())};` : undefined;
    },
    configureServer(server) {
      // Re-read sizes when screenshots are added, replaced or removed during `npm run dev`.
      const base = path.normalize(path.join(root, dir));
      server.watcher.add(base);
      const refresh = (file: string) => {
        if (!path.normalize(file).startsWith(base) || !IMAGE_RE.test(file)) return;
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: "full-reload" });
      };
      server.watcher.on("add", refresh);
      server.watcher.on("change", refresh);
      server.watcher.on("unlink", refresh);
    },
  };
}
