# Screenshots: NounouDZ — Childcare Marketplace for Algeria

Folder name = project slug (`nounoudz`). Images here are found automatically.

## Screenshots to take

- `cover` — 2–3 key phone screens side by side.
- `01` — phone number / OTP sign-in.
- `02` — parent posting a request.
- `03` — babysitter applications on a request, parent selecting one.
- `04` — a direct proposition.
- `05` — agreement proposal versions (v1 → v2) in an engagement.
- `06` — both parties confirming the same version.
- `07` — the overlap error when a conflicting confirmation is rejected.
- `08` — session list with lifecycle states (scheduled / in progress / completed).
- `09` — the same screen in French, English and Arabic (RTL).
- `10` — child medical info: aggregate view during negotiation vs full detail after confirmation (use fake data).

## Naming rule

- `cover.webp` (or `.png` / `.jpg`) is the card image on the home page.
- Every other image goes in the gallery, shown in **filename order**, so prefix
  them: `01-…`, `02-…`, `03-…` (e.g. `01-transfer-request.webp`).
- No code change needed: drop files here and they are picked up on the next build.
- No cover → a typographic cover is drawn instead. No gallery images → the
  gallery section is hidden.

## Size and format

- Prefer **WebP** (quality ~80). PNG/JPG also work.
- Minimum size: cover 1600×1000 (16:10, e.g. 2–3 phone screens side by side on a plain background); phone screenshots at least 1080 px wide, portrait.
- Crop out browser chrome, bookmarks and personal tabs; the site adds its own window frame.
- Never include real personal data, tokens or secrets.
