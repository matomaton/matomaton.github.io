# Audit Report — `index.html` + `BeyondClicks.html`

**Date:** 2026-09-06
**Tool:** Impeccable `/impeccable audit`
**Targets:** `index.html` (homepage), `BeyondClicks.html` (case-study page, spot-check)

## Audit Health Score

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 2 | Hero tagline unreadable in dark mode (1.7:1 contrast) + 7 skill tags below the 11px legibility floor |
| 2 | Performance | 3 | No red flags on read-through (appropriate `loading="eager"/"lazy"`); not measured live — see note below |
| 3 | Theming | 3 | One hardcoded hex color breaks an otherwise fully-tokenized, thoughtfully-tuned dark mode |
| 4 | Responsive Design | 3 | Fluid `clamp()` type/spacing throughout, clean 768px collapse; not visually verified in a live browser this session |
| 5 | Implementation Integrity | 4 | Coherent, product-specific system matching DESIGN.md — no generic/template feel |
| **Total** | | **15/20** | **Good — address weak dimensions** |

*Performance and Responsive Design were assessed by reading the CSS/HTML, not by rendering the page in a browser or running Lighthouse — that tooling wasn't available in this session. Treat those two scores as code-review confidence, not a measured budget.*

## Implementation Integrity Verdict

**Pass.** Both pages genuinely express the "Editorial Studio" system documented in `DESIGN.md` — the arrow-CTA pattern, hairline borders, two-weight typography, and rationed accent color all show up exactly where the system says they should. This isn't a template a recruiter has seen from ten other candidates.

## Detailed Findings

### [P1] Hero tagline invisible in dark mode
- **Location:** `index.html:95`, `.hp-hero__tagline { color: #404040; }`
- **Category:** Accessibility / Theming
- **Impact:** This is the first sentence of body copy a visitor reads, in the hero, on the homepage. It's hardcoded instead of using `var(--color-gray)`/`var(--color-charcoal)`, so it never participates in the `prefers-color-scheme: dark` swap. Against the dark-mode background (`#181818`) it renders at **1.7:1 contrast** — a recruiter with system dark mode on (extremely common) gets a near-blank hero.
- **WCAG:** Fails 1.4.3 (needs 4.5:1)
- **Recommendation:** Swap to `var(--color-gray)` (matches the rest of the hero's secondary-text role and is already dark-mode-tuned).
- **Suggested command:** `/impeccable polish`

### [P2] Undersized "Expertise" skill tags
- **Location:** `index.html:357`, `.hp-skill { font-size: 0.62rem; ... }` (7 instances: UX Research, Interaction Design, AI Systems, Design Strategy, Information Architecture, Figma, Usability Testing, +1 more)
- **Category:** Accessibility
- **Impact:** Renders at 9.92px — below the 11px legibility floor, and smaller than the system's own `--size-label` token (10.4–12px) that every other label/tag/nav element uses. A one-off value that also happens to be the smallest text on the page.
- **Recommendation:** Switch to `var(--size-label)` to match every other tag/label in the system, rather than a bespoke smaller value.
- **Suggested command:** `/impeccable typeset` or fold into `/impeccable polish`

### [P3] Hamburger bar radius off the documented scale
- **Location:** `stylesgem.css:376`, `.nav-toggle__bar { border-radius: 2px; }`
- **Category:** Implementation Integrity (minor)
- **Impact:** Cosmetic only — a rounded line-cap on a 1.5px bar. Just outside the documented 3px/4px rounded scale.
- **Recommendation:** Either add a `hairline: 2px` step to `DESIGN.md`'s rounded scale, or note it as a deliberate micro-exception. Not worth blocking on.
- **Suggested command:** `/impeccable polish` (bundle with the above)

## False Positives (verified, not acted on)

- **"Broken image" in `BeyondClicks.html`**: the flagged `<img src="">` is the lightbox's template image — deliberately empty until JS populates it on open. Not a defect.
- **"Broken image" candidates `your-image-1.png` / `your-image-2.png` / `your-image.png`**: all live inside HTML comments (unused template scaffolding from the article boilerplate), never rendered. Harmless, though worth trimming as source hygiene next time this file is touched.
- **"Cramped padding"** on `.hp-hero` (index.html) and `.related-articles` (BeyondClicks.html): both already carry generous padding (`clamp(3rem, 8vh, 5rem)` and `var(--space-xl)` respectively) before their border. Reads as a detector limitation, not a real issue — worth a quick visual glance in a browser, but not believed to be real based on the CSS.
- **"Overused font: Lato"**: the detector's own stated denylist (Inter, Roboto, Fraunces, Geist, Plus Jakarta Sans, Space Grotesk) doesn't include Lato — looks like a rule that fires on any single detected primary font rather than matching its own list. Safe to ignore.

## Positive Findings

- Deliberate, already-documented WCAG-AA contrast tuning baked into the core tokens (the CSS comments literally record the before/after ratios) — genuine accessibility craft, unusual to see on a personal site.
- Fully automatic dark mode with independently-tuned (not naive-inverted) colors per token.
- `prefers-reduced-motion` handled globally, not per-component.
- Semantic heading hierarchy, `aria-labelledby`/`aria-label`, and real (non-filler) alt text throughout both pages.

## Recommended Actions

1. **[P1] `/impeccable polish`**: fix the hero tagline dark-mode contrast bug — the single highest-impact fix given it's the hero.
2. **[P2] `/impeccable typeset`** (or bundle into the same polish pass): bring the `.hp-skill` tags up to the documented label size.
3. **[P3, optional]** fold the hamburger-bar radius decision into the same pass.

Re-run `/impeccable audit` after fixes to see the score improve.

## Raw Detector Output

<details>
<summary>Full JSON from <code>impeccable detect --json index.html BeyondClicks.html</code></summary>

```json
[
  {
    "antipattern": "low-contrast",
    "name": "Low contrast text",
    "severity": "warning",
    "category": "quality",
    "file": "index.html",
    "snippet": "1.7:1 (need 4.5:1) — text #404040 on #181818"
  },
  {
    "antipattern": "cramped-padding",
    "name": "Cramped padding",
    "severity": "warning",
    "category": "quality",
    "file": "index.html",
    "snippet": "<section> \"hp-hero\": children flush against border-bottom on bottom (no inset)"
  },
  {
    "antipattern": "undersized-ui-text",
    "name": "Undersized functional text",
    "severity": "warning",
    "category": "quality",
    "file": "index.html",
    "snippet": "9.92px functional text \"UX Research\" (below 11px floor)"
  },
  {
    "antipattern": "undersized-ui-text",
    "name": "Undersized functional text",
    "severity": "warning",
    "category": "quality",
    "file": "index.html",
    "snippet": "9.92px functional text \"Interaction Design\" (below 11px floor)"
  },
  {
    "antipattern": "undersized-ui-text",
    "name": "Undersized functional text",
    "severity": "warning",
    "category": "quality",
    "file": "index.html",
    "snippet": "9.92px functional text \"AI Systems\" (below 11px floor)"
  },
  {
    "antipattern": "undersized-ui-text",
    "name": "Undersized functional text",
    "severity": "warning",
    "category": "quality",
    "file": "index.html",
    "snippet": "9.92px functional text \"Design Strategy\" (below 11px floor)"
  },
  {
    "antipattern": "undersized-ui-text",
    "name": "Undersized functional text",
    "severity": "warning",
    "category": "quality",
    "file": "index.html",
    "snippet": "9.92px functional text \"Figma\" (below 11px floor)"
  },
  {
    "antipattern": "undersized-ui-text",
    "name": "Undersized functional text",
    "severity": "warning",
    "category": "quality",
    "file": "index.html",
    "snippet": "9.92px functional text \"Usability Testing\" (below 11px floor)"
  },
  {
    "antipattern": "undersized-ui-text",
    "name": "Undersized functional text",
    "severity": "warning",
    "category": "quality",
    "file": "index.html",
    "snippet": "9.92px functional text \"Enterprise SaaS\" (below 11px floor)"
  },
  {
    "antipattern": "design-system-radius",
    "name": "Radius outside DESIGN.md",
    "severity": "advisory",
    "category": "quality",
    "file": "index.html",
    "snippet": "border-radius 2px on span is outside the DESIGN.md rounded scale"
  },
  {
    "antipattern": "overused-font",
    "name": "Overused font",
    "severity": "warning",
    "category": "slop",
    "file": "index.html",
    "snippet": "Primary font: lato"
  },
  {
    "antipattern": "broken-image",
    "name": "Broken or placeholder image",
    "severity": "warning",
    "category": "quality",
    "file": "BeyondClicks.html",
    "snippet": "<img src=\"\">"
  },
  {
    "antipattern": "cramped-padding",
    "name": "Cramped padding",
    "severity": "warning",
    "category": "quality",
    "file": "BeyondClicks.html",
    "snippet": "<section> \"related-articles\": children flush against border-top on top (no inset)"
  },
  {
    "antipattern": "design-system-radius",
    "name": "Radius outside DESIGN.md",
    "severity": "advisory",
    "category": "quality",
    "file": "BeyondClicks.html",
    "snippet": "border-radius 2px on span is outside the DESIGN.md rounded scale"
  },
  {
    "antipattern": "overused-font",
    "name": "Overused font",
    "severity": "warning",
    "category": "slop",
    "file": "BeyondClicks.html",
    "snippet": "Primary font: lato"
  }
]
```

</details>
