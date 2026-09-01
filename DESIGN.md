---
name: seanmarchetti.com
description: An engineering leader's record set like a Vercel product page — the resume as clean data.
colors:
  ink-ground: "#0a0a0a"
  ink-foreground: "#ededed"
  muted-text: "#a1a1a1"
  hover-fill: "#1a1a1a"
  muted-fill: "#161616"
  hairline: "#262626"
  vercel-blue: "#0070f3"
  signal-red: "#ff6166"
  paper-ground: "#ffffff"
  paper-foreground: "#171717"
  paper-muted-text: "#666666"
  paper-hairline: "#eaeaea"
typography:
  display:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem (sm: 3rem, lg: 3.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.75
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.6
  body:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist Mono, Geist Mono Fallback, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 2
rounded:
  md: "0.3rem"
  lg: "0.375rem"
spacing:
  gutter: "1.5rem"
  gutter-wide: "2.5rem"
  section-y: "4rem"
  stack: "2rem"
  header-h: "3.5rem"
  meta-col: "10rem"
components:
  button-primary:
    backgroundColor: "{colors.ink-foreground}"
    textColor: "{colors.ink-ground}"
    rounded: "{rounded.lg}"
    height: "2rem"
    padding: "0 0.625rem"
  button-primary-hover:
    backgroundColor: "#edededcc"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-foreground}"
    rounded: "{rounded.lg}"
    height: "2rem"
    padding: "0 0.625rem"
  button-ghost-hover:
    backgroundColor: "{colors.muted-fill}"
  button-outline:
    backgroundColor: "{colors.ink-ground}"
    textColor: "{colors.ink-foreground}"
    rounded: "{rounded.lg}"
    height: "2rem"
    padding: "0 0.625rem"
  button-outline-hover:
    backgroundColor: "{colors.muted-fill}"
  work-row:
    backgroundColor: "transparent"
    rounded: "{rounded.md}"
    padding: "1rem 0.75rem"
  work-row-hover:
    backgroundColor: "{colors.hover-fill}"
---

# Design System: seanmarchetti.com

## Overview

**Creative North Star: "The Resume as Clean Data"**

This is an engineering leader's record set like a Vercel product page. The world is a
near-black canvas (`#0a0a0a`) carrying a single bordered center column; every structural
line on the page is a 1px hairline, and plus-mark crosses sit at the intersections where
section rules meet the column borders — the canvas reads as ruled paper for data, not as a
decorated personal brand. Dark is the design's home (`color-scheme: dark` on `:root`); the
light palette is the same hairline system re-inked on white and arrives only via
`prefers-color-scheme: light` — there is no theme toggle.

The voice is lowercase and quiet: the headline, section headings, nav, and footer are all
lowercase; dates, locations, and skill-group names sit in Geist Mono in a fixed metadata
column. Color is almost entirely grayscale; one blue (`#0070f3`) exists and it is spent
only on focus rings and text selection. Motion is a single orchestrated load-in — an
expo-out rise with an 80ms stagger — and after that the page moves only in color.

**Key Characteristics:**
- Bordered 48rem center column with hairline rules and plus-mark crosses at intersections
- Grayscale ladder on near-black; one blue reserved for focus and selection
- Geist Sans for prose and headings, Geist Mono for metadata; lowercase display voice
- Flat depth: no shadows anywhere; structure is drawn, not lifted
- One motion event (staggered load-in); hover states change color only

## Colors

A grayscale ladder on a near-black ground, with one utility blue and one reserve red; the light scheme is the same ladder inverted onto white.

### Primary
- **Ink Foreground** (`#ededed`): the working "accent" — headline text, the primary
  button's fill, and the destination of every hover illumination. In this world the
  brightest gray is the primary color.

### Neutral (dark scheme — the default)
- **Ink Ground** (`#0a0a0a`): page, card, and header ground. The near-black canvas.
- **Muted Text** (`#a1a1a1`): intro copy, body prose, dates, nav at rest, footer — most
  text on the page rests here and brightens to Ink Foreground on interaction.
- **Hover Fill** (`#1a1a1a`): the `secondary` fill; work rows illuminate to this on hover.
- **Muted Fill** (`#161616`): the `muted` fill; ghost/outline button hover background.
- **Hairline** (`#262626`): every border on the page — column edges, section rules, the
  sticky header's bottom rule, input/outline borders, and the thin scrollbar.

### Neutral (light scheme — `prefers-color-scheme: light` only)
- **Paper Ground** (`#ffffff`), **Paper Foreground** (`#171717`), **Paper Muted Text**
  (`#666666`), **Paper Hairline** (`#eaeaea`): the same roles re-inked. Secondary/muted
  fills become `#f5f5f5` / `#fafafa`.

### Utility
- **Vercel Blue** (`#0070f3`): focus-visible outlines/rings and `::selection` background,
  in both schemes. It never appears at rest.
- **Signal Red** (`#ff6166` dark / `#e5484d` light): the destructive token, wired into the
  button system but unused on the current page. Reserved for destructive states only.

### Named Rules
**The One Blue Rule.** `#0070f3` appears only as a response to the visitor — focus rings
and text selection. It is never decorative, never a link color, never a fill at rest.

**The Illumination Rule.** Hover means brightening, not moving: rows fill with Hover Fill,
muted text rises to Ink Foreground. Nothing translates, scales, or casts a shadow on hover.

## Typography

**Display/Body Font:** Geist (with Geist Fallback, ui-sans-serif, system-ui)
**Label/Mono Font:** Geist Mono (with Geist Mono Fallback, ui-monospace)

**Character:** One sans, one mono, nothing else. Geist carries all prose in a lowercase,
tracking-tight voice; Geist Mono is the data register — dates, locations, skill groups,
the email address, the footer colophon.

### Hierarchy
- **Display** (600, 2.25rem → 3rem @sm → 3.75rem @lg, 1.1): the hero headline only.
  Lowercase, tracking-tight (−0.025em), max-width 22ch.
- **Headline** (600, 1.25rem, tracking-tight): lowercase section headings (`work`,
  `skills`, `contact`). No kickers or eyebrows above them; the heading stands alone.
- **Title** (500, 0.9375rem, leading-6): role titles in work rows. Company name follows in
  Muted Text after a `·` and illuminates on row hover.
- **Body** (400, 0.875rem, leading-relaxed): summaries, highlights, contact prose, in
  Muted Text. The hero intro is the one larger body moment (1rem, max-width 60ch).
- **Label** (400, 0.75rem, Geist Mono, leading-6): dates, locations, skill-group names,
  footer. Always Muted Text; lowercase where it is prose (skill groups, footer).

### Named Rules
**The Lowercase Rule.** Display, headings, nav, and footer are lowercase. Buttons and
content prose keep sentence case. No uppercase, no letterspaced small caps anywhere.

**The Mono Margin Rule.** Metadata lives in a fixed 10rem left column (`sm:` and up) set
in Geist Mono xs Muted Text — the same grid in the work rows and the skills list. Dates
use en dashes ("Sep 2025 – present"); prose uses Sean's lowercase em-dash voice.

## Layout

A single bordered center column: `max-w-3xl` (48rem) with 1px hairline left/right borders
running the full page height, including through the sticky header's inner container and
the footer. Horizontal padding is 1.5rem (2.5rem at `sm:`). Sections stack with a hairline
top rule and 4rem vertical padding; the hero runs deeper (6rem top, 8rem at `sm:`, 5rem
bottom). Headings sit 2rem above their content (`mt-8`).

The sticky header is 3.5rem tall with a bottom hairline and a translucent blurred ground
(`bg-background/80` + `backdrop-blur-sm`), z-10. Nav links are 13px Muted Text that
brighten to foreground. Anchor targets carry `scroll-mt-24` under smooth scrolling
(disabled under `prefers-reduced-motion`).

Inside sections, the recurring grid is `sm:grid-cols-[10rem_1fr]` with a 1.5rem gap:
metadata column left, content right; below `sm:` it collapses to a single column and the
location line hides. Work rows bleed 0.75rem past the text column (`-mx-3` wrapper,
`px-3` rows) so the hover fill overhangs the content edge.

**The Cross Rule.** Every hairline intersection where a section's top rule meets the
column borders carries a plus-mark cross: 9px square, 1px strokes, Muted Text color,
positioned −5px into the corner, `aria-hidden` and pointer-transparent. Crosses mark
structure; they never appear detached from a hairline intersection.

**Motion.** One load-in animation: `enter` rises 8px with fade over 0.7s on
`cubic-bezier(0.16, 1, 0.3, 1)` (expo-out), staggered 80ms per element via
`--enter-index` (hero uses indexes 0–2). Fully disabled under `prefers-reduced-motion`.
All other motion is `transition-colors` (or the button's `transition-all` for its 1px
active press). Nothing animates on scroll.

## Elevation & Depth

Flat, explicitly. There are no box-shadows anywhere in the build. Depth is conveyed by
hairlines (structure), tonal fills (Hover Fill / Muted Fill rising from the ground), and
one translucency: the sticky header's blurred 80% ground. Even the browser chrome
participates — thin scrollbar inked in Hairline.

**The Drawn-Not-Lifted Rule.** If a surface needs separation, draw a 1px Hairline border
or shift its fill one step up the gray ladder. Never add a shadow.

## Shapes

Rectilinear world, softly-cornered interactive elements. The canvas, columns, and sections
are square-cornered and hairline-ruled; only interactive elements round: buttons at
0.375rem (`--radius`), hoverable work rows at 0.3rem. Nothing rounds further — no pills,
no circles, no clipped imagery (no rasters ship at all). The signature geometric motif is
the 9px plus-mark cross at hairline intersections.

## Components

### Buttons
shadcn/ui Base UI variant; `<Button>` renders anchors via the Base UI `render` prop
(e.g. `render={<a href="mailto:..." />}`) — mail and external links look like buttons.
- **Shape:** softly rounded (0.375rem), 2rem tall, 0.875rem/500 text, 0 × 0.625rem padding.
- **Primary:** Ink Foreground fill with Ink Ground text — the white button on black is the
  page's strongest element and appears once, as "Get in touch". Hover drops fill to 80%
  opacity.
- **Ghost:** transparent at rest; hover fills Muted Fill and text rises to foreground.
  Used for GitHub/LinkedIn, each trailing a 16px `ArrowUpRight` SVG in Muted Text.
- **Outline:** 1px Hairline border on the ground; hover fills Muted Fill. Used for the
  contact email, whose label is Geist Mono 13px.
- **Focus:** Vercel Blue border plus a 3px ring at 50% opacity. **Active:** 1px downward
  translate — the only positional motion outside the load-in.

### Work Row (signature component)
The record row: `sm:grid-cols-[10rem_1fr]`, mono date range and location left, role title
right (company in Muted Text after `·`), optional summary and em-dash-bulleted highlights
below. Rounded 0.3rem, 1rem × 0.75rem padding. On hover the row fills with Hover Fill and
the company name illuminates to foreground — the "rows illuminate" signature. Highlight
bullets are literal `—` glyphs in Muted Text at 50% opacity, `aria-hidden`, non-selectable.

### Navigation
Sticky hairline header: wordmark ("sean marchetti", 0.875rem/500, tracking-tight,
foreground) left; three lowercase anchor links (13px, Muted Text → foreground on hover,
1.5rem gap) right. No active-state indicator, no mobile menu — the three links fit.

### Cross Mark
`.cross` (globals.css): 9px absolute-positioned plus built from two 1px pseudo-element
strokes in `currentColor` (Muted Text), placed at `-5px` corners of bordered sections.
Always `aria-hidden`, always paired with a real hairline intersection.

### Definition List (skills)
Same 10rem/1fr grid: lowercase mono group name left, items joined by `·` in foreground
0.875rem right.

## Do's and Don'ts

### Do:
- **Do** draw all structure with 1px Hairline borders and keep new sections inside the
  bordered 48rem column, opening with a hairline top rule and a `<Crosses />` pair.
- **Do** put every piece of metadata (dates, locations, categories) in Geist Mono 0.75rem
  Muted Text in the 10rem left column; use en dashes for ranges.
- **Do** keep hover as illumination: fill one gray step up, brighten text to foreground.
- **Do** reuse `.animate-enter` with `--enter-index` (80ms steps) for any new load-in
  content, and honor `prefers-reduced-motion`.
- **Do** keep headings and nav lowercase, tracking-tight, standing alone.

### Don't:
- **Don't** use box-shadows anywhere; separation is hairlines and tonal fills.
- **Don't** spend Vercel Blue on anything but focus rings and selection — no blue links,
  fills, or accents at rest.
- **Don't** introduce new hues, gradients, raster images, or icon sets beyond the inline
  arrow SVG; the world is the gray ladder plus its two utility colors.
- **Don't** add kickers or eyebrow labels above headings, or uppercase letterspaced
  labels; this build's headings stand alone and its labels are lowercase mono.
- **Don't** animate on scroll or move elements on hover; the motion budget is the single
  load-in plus color transitions (and the button's 1px press).
- **Don't** round anything past 0.375rem or round non-interactive surfaces; the canvas
  stays square-cornered.
