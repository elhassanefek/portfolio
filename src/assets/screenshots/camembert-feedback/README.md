# Screenshots: CamemBERT — Student Feedback Classification

Folder name = project slug (`camembert-feedback`). Images here are found automatically.

## Screenshots to take

- `cover` — results chart: motivation Macro-F1 before/after (0.620 → 0.764) vs the TF-IDF + SVC baseline.
- `01` — per-label F1 for motivation (highlight accomplishment 0.154 → 0.786).
- `02` — opinion confusion matrix (3 classes).
- `03` — validation threshold grid (17 values, 0.65 picked).
- `04` — dataset stats / class distribution (accomplishment 2.8%, neutral 2.4%).
- `05` — a logged run folder (config, history, metrics, predictions, environment).
- `06` — `pytest` output (110 tests).
- Only use anonymised comments; no real student text unless cleared with the lab.

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
