---
name: Matthew Martin — Product Designer Portfolio
description: An editorial, restrained portfolio system built on light-weight display type, black-weight uppercase micro-labels, thin borders instead of shadows, and arrow-cued text links in place of buttons.
colors:
  bg: "#FCFCF9"
  nav-bg: "rgba(242, 242, 239, 0.6)"
  charcoal: "#4A4A4A"
  gray: "#595959"
  gray-light: "#737373"
  border: "rgba(45, 45, 45, 0.15)"
  oxblood: "#B03030"
typography:
  display:
    fontFamily: "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 300
    lineHeight: 1.2
  body:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1rem, 1.2vw, 1.1rem)"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)"
    fontWeight: 900
    lineHeight: 1.4
    letterSpacing: "0.15em"
  mono:
    fontFamily: "'Courier New', Courier, monospace"
    fontSize: "0.875em"
rounded:
  sm: "3px"
  md: "4px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "2rem"
  lg: "4rem"
  xl: "6rem"
  xxl: "10rem"
components:
  cta-link:
    textColor: "{colors.gray}"
    typography: "{typography.label}"
  cta-link-hover:
    textColor: "{colors.charcoal}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.oxblood}"
    typography: "{typography.label}"
  tag:
    textColor: "{colors.gray}"
    typography: "{typography.label}"
    padding: "0.25em 0.6em"
    rounded: "0"
---

# Design System: Matthew Martin — Product Designer Portfolio

## Overview

**Creative North Star: "The Editorial Studio"**

The system reads as a design director's own portfolio typeset like a well-edited magazine, not assembled from a UI kit: light-weight display type carries the ideas, black-weight uppercase micro-labels carry structure and metadata, and everything else — borders, spacing, hover states — stays quiet enough to let the work and the writing lead. There are no filled buttons anywhere on the site; every call to action is a plain text link with a small arrow glyph that slides on hover. Cards and list items are defined by a single 1px border, never a shadow. The one saturated color (oxblood red) is reserved for exactly one job: marking the current/active nav state, nowhere else.

Automatic (OS-driven) light/dark mode is already implemented via `prefers-color-scheme`, with colors independently contrast-tuned per mode rather than a naive invert — this is a deliberate accessibility investment already present in the codebase and should be preserved and extended, not redone.

**Key Characteristics:**
- Light-weight (300) display type at a wide, confident scale (48–96px H1) against black-weight (900) uppercase micro-labels — the two ends of the weight range do all the hierarchy work.
- Thin 1px borders (`rgba(45,45,45,0.15)`) instead of shadows for nearly everything; shadow is reserved for the sticky nav and article imagery only.
- No filled buttons. Every action is a `cta-link`: uppercase label type + arrow glyph that translates 4–5px on hover.
- Opacity-based hover feedback on cards and list rows (fade to ~0.6–0.7) rather than color or elevation changes.
- Contrast-tuned automatic dark mode, already implemented per-token rather than a blanket invert.

## Colors

A warm off-white/near-black neutral pair does almost all the work; the one accent color is deliberately rationed.

### Primary
- **Oxblood** (`#B03030` light / `#E08080` dark): reserved for exactly one job — the active state of the current nav-drawer link. Never used for CTAs, links, or decoration.

### Neutral
- **Warm Paper** (`#FCFCF9` / dark: `#181818`): page background.
- **Charcoal** (`#4A4A4A` / dark: `#B0B0B0`, inverted): primary text and interactive elements. Deliberately softened from an earlier, harsher `#2D2D2D` (13.4:1) to `4A4A4A` (8.6:1) — still well clear of AA, less severe against the warm paper background.
- **Gray** (`#595959` / dark: `#A3A3A3`): secondary text — captions, meta rows, descriptions.
- **Gray Light** (`#737373` / dark: `#8A8A8A`): tertiary text — timestamps, dividers, placeholder-weight metadata. Tuned up from `#767676` specifically to clear WCAG AA (4.61:1).
- **Hairline Border** (`rgba(45,45,45,0.15)` / dark: `rgba(252,252,249,0.15)`): the system's only structural device for separating cards, list rows, and sections — no shadows used here.

### Named Rules
**The One Voice Rule.** Oxblood exists to answer one question — "where am I right now in the nav" — and nothing else. It never appears on a CTA, a heading, a card, or a hover state. If a designer reaches for it anywhere else, that's a system violation, not a style choice.

**The No-Shadow Rule.** Structure is drawn with 1px hairline borders, not elevation. The only two shadows in the system (`shadow-nav`, `shadow-image`) are named exceptions, not a general permission to add more.

## Typography

**Display/Body Font:** Lato (with `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` fallback)
**Mono Font:** Courier New (inline code and code blocks only)

**Character:** A single humanist sans carries the entire system at two extremes of weight — light (300) for anything meant to be read as prose or a headline, black (900) uppercase for anything meant to be scanned as structure (labels, nav, metadata, tags).

### Hierarchy
- **Display / H1** (300, `clamp(3rem, 8vw, 6rem)`, 1.2 line-height, -0.02em tracking): page-level titles; colored as secondary gray, not full-contrast charcoal — a deliberately soft first impression.
- **Headline / H2** (300, `clamp(1.75rem, 4vw, 2.75rem)`, 1.2 line-height): section headings, full charcoal.
- **Label** (900, `clamp(0.65rem, 1.5vw, 0.75rem)`, 1.4 line-height, 0.15em tracking, uppercase): H3/H4, nav links, metadata, tags, footer text — the system's structural voice. Shares one scale step across every one of these uses; do not introduce a second uppercase-label size.
- **Body** (400, `clamp(1rem, 1.2vw, 1.1rem)`, 1.7 line-height): paragraph text, capped at a 65ch measure.

### Named Rules
**The Two-Weight Rule.** Only 300 (light, for reading/headlines) and 900 (black, for labels/structure) appear in normal use; 400 (regular) and 700 (bold) exist in the token scale but are used sparingly (body copy, resume item titles) rather than as a third visual register.

## Layout

A single centered container (`max-width: 1200px`) with a narrower 65ch reading column (`--content-width`) nested inside it for prose. Article pages use a named CSS grid (`full` / `breakout` / `content` tracks) so images and embeds can break out to ~900px or full-bleed width while paragraphs stay pinned to the 65ch column — this is the system's one structural sophistication and should be reused for any new long-form page rather than re-implemented ad hoc.

Spacing runs on a six-step scale (`8 / 16 / 32 / 64 / 96 / 160px`) used consistently for both padding and vertical rhythm between sections; there is no intermediate/odd spacing value anywhere in the stylesheet.

Responsive behavior collapses at 768px: the desktop nav-link row becomes a hamburger-triggered drawer, multi-column grids (project grid, process steps) stack to one column, and the nav height shrinks slightly (80px → 70px).

## Elevation & Depth

Flat by default. The system draws separation with 1px hairline borders (`rgba(45,45,45,0.15)`), not shadows. The only two shadow tokens that exist are narrow, named exceptions:

### Shadow Vocabulary
- **`shadow-nav`** (`0 2px 12px rgba(0,0,0,0.06)`): a very soft ambient lift under the sticky, frosted nav bar — reinforces that it floats above scrolling content.
- **`shadow-image`** (`0 2px 16px rgba(45,45,45,0.08)`): a soft ambient shadow under article figures only, to lift photography/screenshots off the page.

### Named Rules
**The No-Shadow Rule.** (see Colors) — shadow is reserved for the nav and article imagery; every other surface (cards, tags, list items) uses a border instead.

## Shapes

Corners are nearly square everywhere — the system is built on hairlines and hard edges, not rounding. The two exceptions are small, functional radii: `3px` on article images and inline elements (`radius-image`/`radius-small`), and `4px` on embed wrappers and code blocks. Nothing in the system uses a large/pill radius; buttons don't exist to round in the first place.

## Components

### Navigation
Sticky, frosted (`backdrop-filter: blur(12px)`) nav bar at 80px height (70px on mobile), translucent warm-paper background. Links are uppercase label-style text with an animated underline that grows from 0 to full width on hover — no background pill, no color fill. Below 768px, links collapse into a hamburger that morphs into an × and reveals a slide-down drawer; the drawer's active link is the one and only place Oxblood appears.

### CTA Links (the system's "button")
There is no filled-button component. Every call to action — hero CTAs, "view project," "read backstory," section "view all" links — is a `cta-link`: uppercase label-weight text, gray by default, charcoal on the primary variant, paired with a small arrow (`→`) that translates 4–5px on hover while the whole link's opacity dips to ~0.6. New actionable elements should extend this pattern rather than introducing a filled button.

### Project / Article Cards
`hp-card` and `hp-article-row`: bordered rectangles (1px hairline), no shadow, no radius. Hover state is a subtly darkened border plus a slight (1.03×) image zoom and a translating arrow — never a shadow lift or scale on the whole card. Body copy uses the same gray/charcoal pairing as everywhere else (meta in gray-light/gray, title in charcoal at light weight).

### Tags / Chips
Uppercase label-weight text in a 1px bordered box, no fill, no radius. Hover (where present, e.g. article tags) darkens text and border to full charcoal — the same "opacity/border darkens on hover" language as cards and CTAs, kept consistent rather than inventing a new hover treatment per component.

### List Items (Projects / Articles index, Resume entries)
Full-width rows separated by 1px top borders, generous vertical padding from the spacing scale, opacity fade (~0.7) on hover. Resume entries reuse the same label/gray/charcoal roles for date, company, and description that everything else in the system uses — nothing resume-specific was invented.

## Do's and Don'ts

### Do:
- **Do** build every new interactive element as a text link + arrow (`cta-link` pattern), not a filled or outlined button.
- **Do** use a 1px hairline border (`rgba(45,45,45,0.15)` light / `rgba(252,252,249,0.15)` dark) for structure; reserve shadow strictly for nav and article imagery.
- **Do** keep new headings/labels on the existing two-weight system (300 light for reading, 900 black uppercase for structure).
- **Do** preserve and extend the existing per-token contrast-tuned dark mode rather than replacing it with a blanket color invert.

### Don't:
- **Don't** introduce Oxblood anywhere except the active nav-drawer state — not on CTAs, headings, hover states, or decoration.
- **Don't** add a filled button, badge, or pill-shaped element; nothing in the system uses a large radius or a solid fill for interactive elements.
- **Don't** add a third font-weight register for everyday use; body/label pairing is enough hierarchy on its own.
- **Don't** carry forward `styles.css` / `colors_and_type.css` or their token files (`tokens-colors-and-type.json`, `tokenstyles.json`) as sources of truth — they're superseded by `stylesgem.css` / `tokens-stylesgem.json` and already drift from it (e.g. an older, harsher charcoal value). Treat them as legacy until removed.
