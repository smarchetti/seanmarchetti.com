# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People who look Sean up — industry peers, colleagues past and present, conference contacts, and anyone who Googles him. They want a fast, credible read on who he is and a way to reach him. Recruiters are a secondary audience; the site is a professional presence, not an active job-search artifact.

## Product Purpose

Personal site at seanmarchetti.com: a professional presence and resume for Sean Marchetti, engineering leader in New York (currently SVP of Engineering & Head of Tech at The Points Guy, Red Ventures). Success: a visitor understands his trajectory in under a minute and can contact him in one click.

## Operating Context

Static Next.js App Router site; content lives in a single typed file `src/data/resume.ts` that Sean edits directly. Deployed to Vercel (m81labs team) via GitHub push to `main`. Custom domain seanmarchetti.com attached, DNS pending.

## Capabilities and Constraints

- Single page: hero/intro, work history (8 roles, 2003–present, real data), contact. No CMS, no backend.
- Projects section is deliberately omitted until Sean supplies real projects — never ship placeholder content to production.
- Skills section content is unconfirmed; treat current entries as provisional.
- Fully static output; keep it that way for speed.

## Brand Commitments

- Voice: Sean's own lowercase, terse, em-dash register in display copy ("i build software — and the teams that ship it."). Body copy is plain and specific, sentence case.
- Visual direction (user-pinned 2026-09-01): minimal, Vercel-inspired, clean lines, dark-mode-first.
- Contact email: sean.marchetti@gmail.com. Links: GitHub (smarchetti), LinkedIn (/in/seanmarchetti).

## Evidence on Hand

- Real work history in `src/data/resume.ts` (from Sean's LinkedIn, pasted 2026-09-01): Red Ventures/TPG, Duolingo, Meta, Grubhub, Walmart Labs, Embark, Fino, Hess.
- No testimonials, no case studies, no project write-ups yet — do not fabricate any.

## Product Principles

- Credibility through restraint: the record speaks; no selling, no adjectives the resume can't back.
- One page, one job: understand Sean, then reach him.
- Content is data: everything a visitor reads comes from resume.ts, so Sean can edit without touching components.
- Fast and boring infrastructure: static output, zero client state.
