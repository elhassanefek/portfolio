# Screenshots: GDG Events Platform — Admin & Organizer Dashboards

Folder name = project slug (`gdg-events`). Images here are found automatically.

## Screenshots to take

- This page is screenshot-led, so these matter most.
- `cover` — admin dashboard overview.
- `01` — admin: event oversight.
- `02` — admin: logistics.
- `03` — organizer dashboard: assigned tasks.
- `04` — organizer: sessions.
- `05` — organizer: announcements.
- `06` — meal management: configuring meals for an event.
- `07` — meal management: live participant check-ins / attendance.
- Use demo data; blur any real participant names or emails.

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
