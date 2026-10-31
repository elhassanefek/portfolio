# Fekairi Elhassane — portfolio

Personal site of Fekairi Elhassane, software engineer: Go and PostgreSQL services that stay
correct under concurrency and failure, plus React and React Native clients.

Live: https://elhassanefek-portfolio.vercel.app

- **Home**: hero, about, experience, four featured projects, an archive of earlier work,
  grouped skills and a contact form.
- **Project pages** at `/projects/<slug>`: full case studies for the featured projects
  (problem, architecture diagram, key decisions with trade-offs, testing, results, next steps)
  and lighter pages for the archive.

## Stack

- React 19, TypeScript, Vite
- styled-components (all design tokens in `src/styles/theme.ts`)
- Framer Motion (scroll reveals; disabled when the OS asks for reduced motion)
- React Router
- EmailJS for the contact form
- Deployed on Vercel (`vercel.json` rewrites every path to `index.html` so deep links work)

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run lint
npm run preview  # serve the production build
```

## Where things live

| What | Where |
|---|---|
| Design tokens (colors, fonts, borders, shadows) | `src/styles/theme.ts` |
| Name, links, education, experience | `src/data/profile.ts` |
| Projects (text, links, decisions, results…) | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Architecture diagrams | `src/components/diagrams/` |
| Shared UI (Button, Card, Tag, SectionLabel, WindowFrame…) | `src/components/common/` |

Components use theme tokens only; there are no hex colors outside `theme.ts`.

## Adding screenshots

Each project has a folder named after its slug in `src/assets/screenshots/`:

```
src/assets/screenshots/
  transacta/  nounoudz/  camembert-feedback/  gdg-events/
  project-management-api/  sentiment-analysis/  ecommerce/
  calm-15/  green-spaces/  fast-pizza/
```

Drop images in; no code changes are needed.

- `cover.webp` (or `.png` / `.jpg`) is the card image on the home page. Without one, a
  typographic cover in the project's accent color is drawn instead.
- Every other image is a gallery item, shown in **filename order**: prefix them `01-…`,
  `02-…`. Without any, the gallery section is hidden.
- Prefer WebP. Minimum sizes and the list of shots to take are in each folder's `README.md`.
- Image sizes are read at build time (`plugins/screenshotSizes.ts`) so pages don't jump
  while images load.

## Resume

Put the PDF at `public/resume/Fekairi_Elhassane_Resume.pdf`. The hero's "Download resume"
button links to it. Add it before deploying: if it's missing, Vercel's SPA rewrite serves
`index.html` at that URL instead of a 404.

## Social preview image

`public/og-image.svg` is the source of the 1200×630 link preview. Export it to
`public/og-image.png` (the file `index.html` points to), e.g. open the SVG in Chrome, or
in Figma/Inkscape, and export at 1200×630.
