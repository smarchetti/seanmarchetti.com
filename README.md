# seanmarchetti.com

Personal resume and portfolio site. Next.js (App Router) + Tailwind + shadcn/ui, deployed on Vercel.

## Editing content

All page content lives in one file: [`src/data/resume.ts`](src/data/resume.ts) — intro, roles, projects, skills, and links. Entries marked `PLACEHOLDER` need real content. The page (`src/app/page.tsx`) renders whatever that file contains.

## Development

```bash
npm run dev     # local dev server
npm run build   # production build
```

## Design

Light, editorial, single centered column. Newsreader (display serif) + Geist (body) + Geist Mono (dates/labels). Theme tokens are in `src/app/globals.css`; the accent is a deep pine green (`--primary`).
