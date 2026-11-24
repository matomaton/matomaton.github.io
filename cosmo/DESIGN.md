---
name: Cosmo at the Window
description: A storybook mini-site where every photo of a visiting cat is a pane in a puffy clay window, set into saturated clay walls.
colors:
  sky: "#6CC2FF"
  sky-deep: "#1F78C4"
  sky2: "#4FAEF2"
  sky2-deep: "#135FA6"
  slate: "#8DA6CC"
  slate-deep: "#41608F"
  lawn: "#72D35F"
  lawn-deep: "#2D8C36"
  lawn2: "#4FC27A"
  lawn2-deep: "#1B7A42"
  amber: "#FFB341"
  amber-deep: "#C26F06"
  amber2: "#FF9940"
  amber2-deep: "#B85A0A"
  night: "#262E63"
  night-deep: "#0B0F30"
  shutter-slate: "#6F8CBB"
  shutter-slate-deep: "#4A6694"
  dusk-indigo: "#2A2F6B"
  honey: "#FFD08A"
  ink: "#1C2046"
  ink-soft: "#383D6C"
  cream: "#FFF4E6"
  mullion: "#E6E9F4"
  mullion-hi: "#FFFFFF"
  moonlight: "#FFE7B8"
typography:
  display:
    fontFamily: "Gluten, M PLUS Rounded 1c, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 13vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Gluten, M PLUS Rounded 1c, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.5rem + 2.6vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title:
    fontFamily: "M PLUS Rounded 1c, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1rem + 0.6vw, 1.35rem)"
    fontWeight: 700
    lineHeight: 1.65
  body:
    fontFamily: "M PLUS Rounded 1c, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "M PLUS Rounded 1c, ui-rounded, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    letterSpacing: "0.01em"
  tag:
    fontFamily: "Gluten, M PLUS Rounded 1c, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(0.95rem, 0.8rem + 0.6vw, 1.25rem)"
    fontWeight: 800
rounded:
  slab: "clamp(36px, 6vw, 64px)"
  frame: "clamp(30px, 4.5vw, 52px)"
  sill: "clamp(28px, 3.6vw, 44px)"
  pane-corner: "18px"
  shutter: "18px"
  ledge: "16px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  wall-block: "clamp(5.5rem, 12vw, 9.5rem)"
  frame-pad: "clamp(12px, 2.2vw, 26px)"
  sill-pad: "clamp(1.5rem, 3vw, 2.5rem)"
  chapter-max: "1180px"
components:
  window-frame:
    backgroundColor: "{colors.mullion}"
    rounded: "{rounded.frame}"
    padding: "{spacing.frame-pad}"
  sill-card:
    textColor: "{colors.ink}"
    rounded: "{rounded.sill}"
    padding: "{spacing.sill-pad}"
  cue-button:
    backgroundColor: "{colors.dusk-indigo}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: ".75rem 1.35rem .75rem 1.1rem"
  cue-button-dark:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.ink}"
  location-pin:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: ".35rem .85rem .4rem"
  chapter-rail:
    backgroundColor: "{colors.mullion}"
    rounded: "{rounded.pill}"
    padding: "12px 9px"
  rail-dot-active:
    backgroundColor: "{colors.dusk-indigo}"
    size: "14px"
---

# Design System: Cosmo at the Window

## Overview

**Creative North Star: "The House Looks Out"**

Every image is a pane in a puffy clay window, and the whole page is a house built from saturated clay slabs. The reader never browses a gallery; they move from wall to wall of a house whose windows all happen to frame the same visiting cat. The system is claymorphism done in full, saturated colour: inflated frames with an inner highlight, an inner shade and a soft cast shadow, stacked slabs with rounded top lips, and chunky rounded type that reads as if pressed from the same material.

Density is low and rhythmic: one window and one sill card per wall, with tall wall padding between them. Each wall carries its own clay colour through a single `data-wall` swap, so hue changes chapter by chapter while the grammar (frame, pane, ledge, sill) never changes. Motion is a single squash-and-stretch rhythm with residual bounce: the frame lands, the photo rises into the glass, small tags drop in late.

This world is a deliberate departure from the owner's portfolio. It does not borrow, and must not merge with, the repo-root design system.

**Key Characteristics:**
- Saturated clay walls, one hue per chapter, with a deep partner tone that colours every shadow on that wall.
- The window (frame, recessed pane, ledge) is the only image container.
- Sill cards overlap their window, so text always sits on a ledge of the house.
- Chunky rounded display (Gluten) over a round humanist body (M PLUS Rounded 1c).
- One motion grammar: squash, rise, settle; disabled entirely under reduced motion.

## Colors

Fully saturated clay: each wall is a bright mid-tone paired with a deep tone of the same hue, and the neutrals are mullion whites and indigo inks rather than greys.

### Primary
- **Sky Clay** (sky / sky-deep): the opening wall and the default voice of the house. Sky2 is its deeper tonal step for a later chapter.
- **Lawn Clay** (lawn / lawn-deep, lawn2 / lawn2-deep): the outdoor chapters; lawn2 is a bluer, deeper green step.
- **Tabby Amber** (amber / amber-deep, amber2 / amber2-deep): warm chapters; amber2 is the redder, deeper step.
- **Shutter Slate** (slate / slate-deep): a cool, quiet wall, and the family the clay shutters (shutter-slate / shutter-slate-deep) are cut from.

### Secondary
- **Dusk Indigo** (dusk-indigo): the one solid ink-coloured clay object colour: the "Follow him" cue, the active rail dot, the hero title body and the favicon paw.
- **Honey** (honey): Dusk Indigo's dark-mode counterpart in the same three roles; also the dark-mode hero title.

### Tertiary
- **Night Clay** (night / night-deep): the closing wall only. It flips ink to cream locally and sits behind a painted night pane with Moonlight (moonlight) as its moon.

### Neutral
- **Indigo Ink** (ink): all text on light walls and sill cards; also the focus outline.
- **Soft Ink** (ink-soft): ledes, slot hints, signoff and paw trail.
- **Cream** (cream): text on Dusk Indigo, the pin tag, stars, and the ink colour on Night Clay and in dark mode.
- **Mullion White** (mullion / mullion-hi): window frames, ledges, sash bars and the rail. Always a 145deg gradient from mullion-hi to mullion, never flat.

### Named Rules
**The Paired Deep Rule.** Every wall colour ships with its deep partner, and every shadow on that wall is mixed from the deep tone (`color-mix(in oklab, var(--wall-deep) N%, transparent)`), never from black. Dark mode is the one exception and switches to black-alpha shadows.

**The One Wall, One Hue Rule.** A wall changes colour only through its `data-wall` value. Components never hard-code a wall hue; sill cards derive theirs (`color-mix(in oklab, var(--wall) 34%, white)` light, 88% in dark, 84% on Night Clay).

**The Dark Walls Rule.** In dark mode every wall keeps its hue but drops to a deep, low-light value of it (sky becomes #123E66, lawn #1D4D28, amber #5C3A0A), and ink becomes cream. Add a dark value for any new wall.

## Typography

**Display Font:** Gluten (self-hosted variable 500-900, falling back to M PLUS Rounded 1c, ui-rounded)
**Body Font:** M PLUS Rounded 1c (self-hosted 400 / 700 / 800, falling back to ui-rounded, system-ui)

**Character:** Gluten is soft, chunky and slightly bouncy, the type equivalent of a clay letter; M PLUS Rounded keeps the body calm, round and legible so the display face can carry the play.

### Hierarchy
- **Display** (Gluten 900, clamp(3.75rem, 13vw, 6rem), 0.95): the hero title only, one per page.
- **Headline** (Gluten 800, clamp(2.1rem, 1.5rem + 2.6vw, 3.4rem), 1.02): chapter titles on sill cards, balanced wrapping.
- **Title** (M PLUS Rounded 700, clamp(1.1rem, 1rem + 0.6vw, 1.35rem)): the hero lede in Soft Ink.
- **Body** (M PLUS Rounded 400, clamp(1rem, 0.96rem + 0.25vw, 1.125rem), 1.65): story text on sills, pretty wrapping.
- **Label** (M PLUS Rounded 800, 0.01em): pill buttons and the bold first line of a story slot.
- **Tag** (Gluten 800, clamp(0.95rem, 0.8rem + 0.6vw, 1.25rem)): the location pin inside a photo.

### Named Rules
**The Two Faces Rule.** Gluten for headings and in-photo tags, M PLUS Rounded for everything read as prose or UI. No third face, and never a system display face standing in for Gluten.

**The Weight Is Volume Rule.** Hierarchy comes from heavy weights (700-900) and size, not from case or tracking. No uppercase labels, no letterspaced small caps.

## Layout

Each section is a full-bleed wall with tall block padding (wall-block). Content sits in a 12-column grid capped at 1180px with a fluid gutter. Each chapter places one window and one sill card, and the sill always overlaps the window so it reads as resting on its ledge. Four chapter arrangements rotate:

- **Default:** window spans columns 1-8, sill spans 8-12 and drops below the window's centre.
- **Flip:** window spans 5-12, sill spans 1-5 and rises above centre.
- **Wide:** window spans all 12; the sill (columns 3-10) sits on a second row, pulled up into the photo.
- **Stack:** window spans 3-10; the sill (4-9) sits directly beneath, on the ledge.

Windows carry a small per-chapter tilt (between -1.5deg and 1.4deg) so the house feels hand-built. The hero is a single centred stack: a square window (min(86vw, 54svh, 500px)) with its sill overlapping the bottom edge, filling 100svh.

Below 860px every chapter collapses to one column: the window narrows to 84% and centres, and the sill sits directly under it with a 3% side inset so it stays attached to the ledge. Shutters slim to 7% width so they stay inside the viewport. The chapter rail is hidden below 900px.

## Elevation & Depth

Depth is entirely clay: every raised object carries the same three-layer recipe of a top-left inner highlight, a bottom-right inner shade, and a long soft cast shadow down and to the right. Recesses (the glass pane) invert it, with an inner shadow from the top and a thin bright lip at the bottom. Walls stack on one another as slabs: each wall after the first overlaps the previous by one slab radius and casts a soft shadow upward onto it.

### Shadow Vocabulary
- **Clay raise** (`inset 6px 8px 12px rgba(255,255,255,.72), inset -8px -12px 22px <wall-deep 34%>, 16px 26px 46px -12px <wall-deep 72%>`): frames, sill cards and clouds.
- **Slab lip** (`inset 0 10px 16px -6px rgba(255,255,255,.4), 0 -22px 44px -18px <wall-deep 80%>`): the top edge of every wall after the first.
- **Pane recess** (`inset 0 10px 18px rgba(10,14,50,.38), inset 0 -3px 0 rgba(255,255,255,.35), inset 6px 0 12px rgba(10,14,50,.18)`): the glass, plus a faint diagonal glare gradient.
- **Small clay** (`inset 3px 4px 6px rgba(255,255,255,.28), inset -4px -6px 10px rgba(0,0,0,.35), 8px 14px 24px -8px rgba(20,24,80,.6)`): pill buttons and the pin, scaled to their size.

### Named Rules
**The Three-Layer Clay Rule.** A raised object needs all three layers: highlight, inner shade, and soft cast shadow. One layer alone reads as a flat card with a drop shadow, which this world refuses.

**The Light From Top-Left Rule.** Highlights always sit top-left and cast shadows always fall down and to the right. Don't reverse the light on any object.

## Shapes

Everything is inflated and rounded; there are no sharp corners anywhere in the world. Radii are fluid: slabs (36-64px), frames (30-52px), sills (28-44px), with 16-20px for small parts (ledges, shutters, slots, the corners of shaped panes) and full pills for buttons, rail, sash bars and tags. The pane radius is always derived from the frame (`frame radius - frame pad x 0.6`) so the mullion looks equally thick all round.

Window frames come in a small family of house shapes that share one grammar: the standard rounded rectangle, an **arch** (elliptical top), a **car windshield** (one large swept top-right corner), and a **sash** (a horizontal clay bar across the pane). Chapter windows rest on a mullion **ledge** wider than the frame (about 6% each side), and some carry a pair of slatted Shutter Slate **shutters** tucked behind the frame.

## Components

### Window (signature)
The page's only image container: a mullion-gradient clay frame around a recessed glass pane holding a cover-fit photo.
- **Shape:** frame radius (frame), pane 4:3 (square in the hero).
- **Variants:** arch, car, sash, shutters; any variant can rest on a ledge.
- **Pane fill:** the wall-deep tone mixed toward #0b1030, visible before the image loads.
- **Press:** on `:active` the frame squashes to scale(.975, .95) in 0.12s and springs back.
- **Arrival:** when scrolled into view the frame squashes in (1.05s), and the photo rises from 30% below with blur and desaturation (1.25s, out-expo).

### Sill Card
The text surface, a clay slab tinted from its wall that overlaps its window.
- **Corner Style:** sill radius.
- **Background:** wall mixed with white (34% light, 88% dark, 84% on Night Clay).
- **Shadow Strategy:** clay raise.
- **Internal Padding:** sill-pad.
- **Contents:** headline, body paragraphs spaced 1em apart.

### Buttons
- **Shape:** full pill (999px).
- **Primary (cue):** Dusk Indigo clay with cream label, leading paw icon that nudges down on a 1.8s loop; Honey with ink in dark mode.
- **Hover / Focus:** lift 2px and grow to 1.04 on the spring curve; press squashes to scale(.94, .9). Focus is a 4px ink outline at 4px offset, pill-rounded.

### Navigation (chapter rail)
- **Style:** a fixed vertical mullion-clay pill at the right edge, holding 14px clay dots, one per wall.
- **States:** hover grows a dot to 1.25; the current chapter's dot fills Dusk Indigo (Honey in dark) at 1.3. Hidden below 900px, where scrolling is the navigation.

### Location Pin
A cream clay speech tag in Gluten with a rotated tail, placed inside a photo to point at a small Cosmo. It drops in 0.85s after its window lands.

### Clay Clouds and Night Pane
Puffy white clay clouds (pill plus two circles) drift slowly behind the hero window. The closing window is painted: a radial indigo night with a Moonlight clay moon and soft cream stars.

## Do's and Don'ts

### Do:
- **Do** put every photo in a Window and every block of text on a Sill Card that overlaps it.
- **Do** give every new wall a `data-wall` pair (wall + wall-deep) and a dark-mode pair, and mix shadows from the deep tone.
- **Do** use the full three-layer clay recipe on any raised object, lit from top-left.
- **Do** use the spring curve (`cubic-bezier(.34, 1.7, .5, 1)`) for interactive feedback and out-expo (`cubic-bezier(.16, 1, .3, 1)`) for arrivals, and drop all of it under `prefers-reduced-motion`.
- **Do** draw icons as inline SVG in currentColor (paw, pencil).

### Don't:
- **Don't** lay photos out as a grid of pastel cards; one window per wall is the composition.
- **Don't** use black or grey shadows on light walls; use the wall's deep tone.
- **Don't** introduce sharp corners, hairline borders or flat untextured surfaces.
- **Don't** add uppercase eyebrows, kickers or letterspaced labels above headings.
- **Don't** import the portfolio's tokens, fonts or layout into this world.
