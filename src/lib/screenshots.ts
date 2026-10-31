// src/lib/screenshots.ts
//
// Screenshots are auto-discovered from src/assets/screenshots/<slug>/.
// `cover.*` is the card image; every other image is a gallery item, ordered by
// filename (prefix them 01-, 02-, ...). See each folder's README.md.

import sizes from "virtual:screenshot-sizes";

export interface Screenshot {
  src: string;
  /** Readable name derived from the filename, e.g. "01-transfer-request" -> "transfer request". */
  name: string;
  /** Pixel size read at build time, so the browser can reserve space. */
  width?: number;
  height?: number;
}

export interface ProjectScreenshots {
  cover?: Screenshot;
  gallery: Screenshot[];
}

const files = import.meta.glob<string>(
  "/src/assets/screenshots/*/*.{png,jpg,jpeg,webp}",
  { eager: true, query: "?url", import: "default" }
);

const toName = (base: string) =>
  base
    .replace(/^\d+[-_ ]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();

const bySlug = new Map<string, { cover?: Screenshot; files: [string, Screenshot][] }>();

for (const [path, src] of Object.entries(files)) {
  // "/src/assets/screenshots/<slug>/<file>.<ext>"
  const [slug, file] = path.split("/").slice(-2);
  const base = file.replace(/\.[^.]+$/, "");
  const [width, height] = sizes[path] ?? [];
  const shot: Screenshot = { src, name: toName(base), width, height };
  const entry = bySlug.get(slug) ?? { files: [] };

  if (base.toLowerCase() === "cover") entry.cover = shot;
  else entry.files.push([file, shot]);

  bySlug.set(slug, entry);
}

const galleries = new Map(
  [...bySlug].map(([slug, entry]) => [
    slug,
    entry.files
      .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
      .map(([, shot]) => shot),
  ])
);

export function getScreenshots(slug: string): ProjectScreenshots {
  return { cover: bySlug.get(slug)?.cover, gallery: galleries.get(slug) ?? [] };
}
