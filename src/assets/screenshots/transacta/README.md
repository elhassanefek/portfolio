# Screenshots: Transacta — Multi-Tenant Double-Entry Ledger API

Folder name = project slug (`transacta`). Images here are found automatically.

## Screenshots to take

- `cover` — terminal (or split terminal) showing `docker compose up` and a `POST /v1/transfers` request with its JSON response.
- `01` — the same transfer replayed with the same `Idempotency-Key`, returning the byte-identical stored response.
- `02` — a rejected transfer (insufficient projected balance) and its error body.
- `03` — `go test -race ./...` output, including the Testcontainers integration tests passing.
- `04` — webhook worker logs: delivery, retry with backoff, dead-letter after 5 attempts.
- `05` — Prometheus `/metrics` output (or a Prometheus graph) for the API.
- `06` — a green GitHub Actions run (lint, race tests, Docker build).

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
