# Screenshots: Project Management API

Folder name = project slug (`project-management-api`). Images here are found automatically.

## Screenshots to take

- Already here: `cover.png` (was `projectify.png`), `01-projectify2.png`.
- Optional additions: a request/response in Postman or curl, two clients receiving the same Socket.IO update, Jest test output.

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
