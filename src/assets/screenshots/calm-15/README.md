# Screenshots: Calm 15 — CPU Architecture Visualization

Folder name = project slug (`calm-15`). Images here are found automatically.

## Screenshots to take

- Already here: `cover.png` (was `calm.png`), `01-calm1.png`, `02-calm2.png`, `03-calm3.png`.
- Optional additions: a quiz screen, a documentation page.

## Naming rule

- `cover.webp` (or `.png` / `.jpg`) is the card image on the home page.
- Every other image goes in the gallery, shown in **filename order**, so prefix
  them: `01-…`, `02-…`, `03-…` (e.g. `01-transfer-request.webp`).
- No code change needed: drop files here and they are picked up on the next build.
- No cover → a typographic cover is drawn instead. No gallery images → the
  gallery section is hidden.

## Size and format

- Prefer **WebP** (quality ~80). PNG/JPG also work.
- Minimum size: cover 1600×1000 (16:10); gallery images at least 1280 px wide.
- Crop out browser chrome, bookmarks and personal tabs; the site adds its own window frame.
- Never include real personal data, tokens or secrets.
