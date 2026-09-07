# Impeccable Session Changelog — 2026-09-06

Full record of everything the Impeccable skill (and the changes it drove) touched on `matomaton.github.io` in this session: context setup, audit, critique, and the resulting fixes.

## New files created

| File | Purpose |
|---|---|
| `PRODUCT.md` | Durable product context (audience, positioning: 20 years, principal-level roles) — written via `/impeccable init` |
| `DESIGN.md` | Documented design system extracted from the live CSS (colors, type, spacing, named rules) — via `/impeccable document` |
| `.impeccable/design.json` | Machine-readable sidecar to DESIGN.md (tonal ramps, component HTML/CSS snippets) |
| `.impeccable/audit/2026-09-06-index-BeyondClicks.md` | Saved audit report (index.html + BeyondClicks.html) |
| `.impeccable/critique/2026-09-06T21-44-18Z__index-html.md` | Saved critique snapshot for index.html |
| `.impeccable/critique/2026-09-06T21-44-20Z__resume-html.md` | Saved critique snapshot for resume.html |
| `.impeccable/config.json` | Detector config — one suppression recorded (below) |
| `.claude/` | Local project skill/hook wiring installed by `npx impeccable install` |

## Code changes

### `index.html`
1. `.hp-hero__tagline` color: `#404040` (hardcoded) → `var(--color-gray)` — fixed a dark-mode contrast bug (was ~1.7:1, unreadable)
2. `about-heading` class: `visually-hidden` (didn't exist in the CSS) → `sr-only` (the real hiding class) — the About heading was rendering visibly by mistake
3. Meta description rewritten to lead with the 20-year/AI-tooling/design-systems positioning instead of "cultural institutions" first
4. Nav logo SVG `fill`: `darkred` → `var(--color-accent)` (part of the sitewide sweep below)

### `resume.html`
5. Meta description: "Senior Experience Designer. 15+ years..." → "Principal Product Designer. 20 years..."
6. `.article-subtitle` text: "Senior Experience Designer" → "Principal Product Designer"
7. Summary paragraph: "15+ years of experience" → "20 years of experience"
8. Nav logo `aria-label`: "ION Home" → "Home"
9. Desktop + mobile nav: removed the dead "Process" link (`process.html` doesn't exist) and fixed "Projects" — it was pointing to `index.html` instead of `projects.html`
10. Footer: "© 2025 ION Portfolio" / `hello@ion.design` / dead `href="#"` LinkedIn+Dribbble → "© 2026 Matthew Martin" / real `atomaton@gmail.com` / real LinkedIn+GitHub+Substack links
11. Nav logo `fill`: `darkred` → `var(--color-accent)` (sitewide sweep)

### `stylesgem.css`
12. Added the missing `.article-subtitle` rule (bold, `clamp(1.25rem, 2.5vw, 1.75rem)`, charcoal) — the job title had zero CSS before this and rendered as plain body text
13. `.nav-link::after` (the hover/active underline): converted from animating `width` (layout thrash) to `transform: scaleX()` with `transform-origin: left` — same visual result, GPU-composited instead

### Sitewide (19 files: `index.html`, `resume.html`, `BeyondClicks.html`, `ThreeLevelsofAIOutput.html`, `appMerg.html`, `articles.html`, `artifactSelection.html`, `backstory.html`, `backstory2-column.html`, `designGovernance.html`, `frictionGap.html`, `metadataDiagnosis.html`, `project-contentLoader.html`, `projects.html`, `projectsBK.html`, `recommendationAlignment.html`, `schedulingConflicts.html`, `testingMethodology.html`, `tripPlaner.html`)
14. Nav logo SVG `fill="darkred"` → `fill="var(--color-accent)"` — the hardcoded color DESIGN.md's "One Voice Rule" flagged; every page now uses the token (and gets the dark-mode-tuned accent for free)

## Detector suppression recorded

One ignore-value entry in `.impeccable/config.json`:
- `cramped-padding` / `*` scoped to `index.html`, reason: `.hp-hero` already has adequate padding + flex-centering — confirmed false positive from the detector's shorthand-padding parsing, evidenced in the persisted audit report.

## Left standing (documented, not fixed — pending a decision)

- `.hp-skill` tags on index.html: 9.92px (below 11px floor), ungrouped list of 8
- `resume.html` contact line: uppercase over a long passage (`all-caps-body`)
- Shared `.nav-toggle__bar` radius: 2px, outside the documented 3px/4px scale (both files)
- Lato flagged as an "overused font" (intentional, documented sitewide choice — not a defect)
- `--nav-border: rgba(0,0,0,0.08)` — legitimate token, just never added to DESIGN.md's color list (documentation gap, not code)
- `index.html`'s own footer email `matthew.martin.atomaton@gmail.com` — looks like a typo against the real `atomaton@gmail.com`; awaiting go-ahead
