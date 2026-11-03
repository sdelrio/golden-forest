---
name: The Golden Forest
description: A golden-hour digital garden, printed on warm paper and bound like a field manual.
colors:
  amber: "#e99700"
  amber-dark: "#d28800"
  amber-darker: "#c68000"
  amber-darkest: "#a36a00"
  amber-light: "#ffa601"
  amber-lighter: "#ffaa0d"
  amber-lightest: "#ffb630"
  amber-link: "#8f5d00"
  amber-link-hover: "#7a4f00"
  amber-link-dark: "#ffb630"
  amber-link-hover-dark: "#ffc45c"
  oxblood: "#58180d"
  oxblood-rule: "#9c2b1b"
  gold-rule: "#c9ad6a"
  parchment-page: "#fffaeb"
  parchment-shade: "#f8e9c8"
  parchment-edge: "#fae5b6"
  ink: "#2a2010"
  dusk-page: "#170f00"
  parchment-text: "#d4c4a8"
  forest-floor: "#2b2b2b"
  table-odd: "#f8f9fa"
  table-even: "#e9ecef"
  dnd-parchment: "#fcf5e5"
  dnd-input: "#fdf1dc"
  dnd-gold: "#c9a84c"
  dnd-brown: "#8b6f47"
  leaf-red: "#d32f2f"
  leaf-green: "#388e3c"
  error-red: "#b43c28"
  error-ink: "#8b2520"
  heading-dark: "#c68000"
  footer-dark: "#1b2127"
  navbar-edge-light: "#fcefd4"
  navbar-edge-dark: "#533800"
  dnd-accent: "#e69a28"
  dnd-text-primary: "#3a2a1a"
  dnd-text-secondary: "#5a4a2a"
  dnd-text-muted: "#8b6d52"
  hb-parchment: "#eee5ce"
  hb-accent: "#e0e5c1"
  hb-header-underline: "#c0ad6a"
  hb-caption: "#766649"
  status-fresh: "#22c55e"
  status-fresh-ink: "#15803d"
  status-stale: "#f59e0b"
  status-stale-ink: "#b45309"
  status-outdated: "#ef4444"
  status-outdated-ink: "#dc2626"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: "40px"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "32px"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "26px"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.625"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: "1.3"
  mono:
    fontFamily: "Source Code Pro, Consolas, Ubuntu Mono, Menlo, DejaVu Sans Mono, monospace"
    fontSize: "16px"
    fontWeight: 350
    lineHeight: "1.5"
  handbook-body:
    fontFamily: "BookInstanity, Georgia, serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.25"
  handbook-heading:
    fontFamily: "MrEavesRemake, Georgia, serif"
    fontSize: "42px"
    fontWeight: 700
    lineHeight: "1"
  handbook-quote:
    fontFamily: "ScalySans, BookInstanity, Georgia, serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.25"
  handbook-small-caps:
    fontFamily: "ScalySansSmallCaps, ScalySans, Georgia, serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.25"
  handbook-drop-cap:
    fontFamily: "SolberaImitationRemake, Georgia, serif"
    fontSize: "calc(2 * var(--ifm-h1-font-size))"
    fontWeight: 400
    lineHeight: "1"
  table:
    fontFamily: "Roboto, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: "1.625"
  toc:
    fontFamily: "Roboto, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 325
    lineHeight: "1.625"
rounded:
  hairline: "3px"
  code: "4px"
  control: "6px"
  card: "0.4rem"
  input: "8px"
  pill: "9999px"
  organic: "28px 12px 35px 15px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  2xl: "2rem"
  section: "4rem"
components:
  link:
    textColor: "{colors.amber-link}"
  link-hover:
    textColor: "{colors.amber-link-hover}"
  pill-filter:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.375rem 0.75rem"
  pill-filter-active:
    backgroundColor: "{colors.amber}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.375rem 0.75rem"
  card-surface:
    backgroundColor: "{colors.parchment-page}"
    rounded: "{rounded.card}"
    padding: "2rem 1.5rem"
  input-search:
    backgroundColor: "{colors.parchment-page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.input}"
    padding: "0.625rem 1rem"
  code-block:
    backgroundColor: "{colors.forest-floor}"
    rounded: "{rounded.organic}"
    padding: "2rem 0.5rem 0.5rem 0.5rem"
  tag:
    backgroundColor: "{colors.parchment-shade}"
    textColor: "{colors.ink}"
    rounded: "{rounded.code}"
    padding: "0.0625rem 0.375rem"
  dnd-input:
    backgroundColor: "{colors.dnd-input}"
    textColor: "{colors.oxblood}"
    rounded: "{rounded.hairline}"
    padding: "0.5rem 0.75rem"
  badge-fresh:
    backgroundColor: "rgba(34, 197, 94, 0.12)"
    textColor: "{colors.status-fresh-ink}"
    rounded: "{rounded.pill}"
    padding: "2px 10px 2px 8px"
  badge-stale:
    backgroundColor: "rgba(245, 158, 11, 0.12)"
    textColor: "{colors.status-stale-ink}"
    rounded: "{rounded.pill}"
    padding: "2px 10px 2px 8px"
  badge-outdated:
    backgroundColor: "rgba(239, 68, 68, 0.12)"
    textColor: "{colors.status-outdated-ink}"
    rounded: "{rounded.pill}"
    padding: "2px 10px 2px 8px"
  bookmark-pill:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
---

# Design System: The Golden Forest

## Overview

**Creative North Star: "The Gilded Grove"**

The site reads as a clearing at golden hour. Amber is the light that falls through the canopy; cream parchment is the page it lands on; oxblood is the ink. Everything else is paper, bark, and leaf. The system is warm before it is modern, and hand-bound before it is systematic: a reader should feel that a person cut the page edges, ruled the headings, and drew the dividers, not that a framework defaulted them.

There is one page material and two inks. Light mode is a single sheet of pale cream paper, subtly warmed at the left and right edges so the sheet reads as curved rather than flat. Dark mode is the same room after sunset: near-black sepia with the same amber edge glow. Body copy is ink on paper in both modes; amber never becomes text colour, because amber here is light, and light does not carry meaning.

The system runs two registers. The default register is the garden: calm, reading-first, one column, with craft concentrated in three recurring artifacts (the ruled h2, the SVG page divider, and the bark-plaque code block). The second register is the tabletop handbook, activated only under the D&D route classes: parchment texture, drop caps, small-caps first lines, and the ScalySans/MrEavesRemake faces. These two registers share the same amber and the same paper instinct, which is why the site feels coherent rather than assembled.

**Key Characteristics:**

- Amber primary with a seven-step ramp; oxblood heading ink in light mode, amber heading ink in dark mode.
- Warm, low-opacity shadows tinted amber (never neutral grey) on paper surfaces.
- Irregular compound corner radii for anything that reads as a cut sheet or a plaque.
- Reading-first density: 16px body at 1.625 line height, 280px sidebar, one content column.
- Craft artifacts over ornament: SVG divider, ruled h2, leaf-lit code plaque.
- Motion is a sheet being handled, never a flourish: 0.15s state shifts, 0.2s lifts, and one 1s circular clip-path reveal when the room goes dark.
- Handbook sub-theme that is explicitly scoped to a route and never leaks.

## Colors

A two-hue system, amber light and oxblood ink, resting on warm paper and a sepia dusk.

### Primary

- **Autumn Amber** (#e99700): the site's `--ifm-color-primary`. It is the light of the place: active states, focus borders, the lid of the code plaque, and the accent on hover. It is the only hue allowed to mean "interactive", and it is never a heading or body colour.
- **Lit Amber** (#ffa601, #ffaa0d, #ffb630): the light steps. Inline code in dark mode (#ffa601) and dark-mode links, focus rings and hover states (#ffb630). It is the light that lands on a dark surface, so it is never a fill carrying text.
- **Heading Amber** (#c68000): `--ifm-heading-color-dark`, the only heading colour in dark mode. It is a Bark Amber step rather than a Lit Amber one: at h2 size 5.87:1 is comfortably enough, and the quieter step keeps headings from out-shouting the links beneath them.
- **Bark Amber** (#d28800, #c68000, #a36a00): the dark steps. Link colour, plaque gradient, borders, hero glow, text-shadow beds. #c68000 does double duty as Heading Amber.

### Secondary

- **Oxblood Ink** (#58180d): the light-mode heading colour and the handbook's header text. It is the system's second voice: authoritative, printed, never used for interaction.
- **Oxblood Rule** (#9c2b1b): the handbook's horizontal-rule accent. Decorative only, and scoped to the handbook register.

### Tertiary

- **Leaf Trio** (#d32f2f, #e99700, #388e3c): red, amber and green leaves standing in for window controls on the code plaque. These three appear nowhere else as a triad. The red and green are not semantic.

### Neutral

- **Parchment Page** (#fffaeb): the light-mode page field.
- **Parchment Shade** (#f8e9c8): tags, recessed surfaces, the warm plane behind the page.
- **Parchment Edge** (#fae5b6): the outermost 1% stop of the body gradient. It only ever appears at the edges of the viewport.
- **Reading Ink** (#2a2010): light-mode body copy. Near-black with a brown bias so it sits in the paper rather than on top of it.
- **Gold Rule** (#c9ad6a): the h2 underline, the handbook's footnote and TOC rules. Structural, 2px, full width.
- **Sepia Dusk** (#170f00) and **Night Parchment** (#d4c4a8): the dark-mode page field and body copy.
- **Forest Floor** (#2b2b2b): the code plaque body, the one place the system goes genuinely dark on purpose.
- **Ledger Stripes** (#f8f9fa / #e9ecef, dark #242526 / #2c2e30): alternating table rows.
- **Tambour Edge** (#fcefd4 in light, #533800 in dark): the navbar's own 1% edge stop. Same rule as the page edge, different value, because the navbar sits one plane above the sheet.
- **Footer Slate** (#1b2127): the footer. The one genuinely cool, non-amber surface in the system, deliberately outside the paper metaphor.
- **D&D Parchment** (#fcf5e5), **D&D Input** (#fdf1dc), **D&D Gold** (#c9a84c), **D&D Brown** (#8b6f47), **D&D Accent** (#e69a28): the handbook register's paper, field, border and accent colours. Its ink is not invented either: **Oxblood Ink** is the heading colour, and the trio #3a2a1a / #5a4a2a / #8b6d52 carries body, secondary and muted text.
- **Handbook Vellum** (#eee5ce), **Handbook Wash** (#e0e5c1), **Handbook Rule** (#c0ad6a), **Handbook Caption** (#766649): the print-source colours the handbook register inherits. Handbook Rule is a separate, slightly greener gold than Gold Rule (#c9ad6a): it edges inline code and holds handbook header underlines, while the h2 rule and the footnote rule stay on Gold Rule.

### Status Hues

A closed, separate family. These exist only to encode freshness, never to decorate:

- **Fresh Green** (#22c55e at a 12% tint, label #15803d): used by the freshness badge, the stale-content dashboard and the copy-success state.
- **Stale Amber** (#f59e0b, label #b45309) and **Outdated Red** (#ef4444, label #dc2626): the same treatment in the other two statuses.
- Dark mode lightens every one of them (#4ade80 / #fbbf24 / #f87171 at a 15% tint over the sepia field, labels #86efac / #fcd34d / #fca5a5).

### Named Rules

**The Two Inks Rule.** Amber is light; ink is text. Body copy is never amber and never a link colour. If a passage needs emphasis, it gets weight or oxblood, not the accent.

**The Gilded Edge Rule.** The warm gradient on `body` lives in the first and last 1% of the horizontal axis and nowhere else. A new surface does not get its own gradient; it sits flat on the sheet.

**The One Accent Rule.** Amber is the only interactive hue. Oxblood, the leaf trio, and the ledger greys never become hover or focus colours. Adding a fourth accent hue breaks the world.

**The Status-Only Green Rule.** Green appears in this system only as a freshness signal, always as a 12% tint behind a dark-shade label. It never becomes a bullet, a highlight, an illustration fill, or a success message elsewhere.

## Typography

**Body Font:** system UI stack (`-apple-system`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`)
**Mono Font:** Source Code Pro (with Consolas, Ubuntu Mono, Menlo, DejaVu Sans Mono)
**Table / TOC Font:** Roboto, loaded as a local webfont, at 300 for table cells and 325 for the table of contents
**Handbook Fonts:** BookInstanity (body), MrEavesRemake (headings), ScalySans (quotes, tables), ScalySansSmallCaps (admonition heads), SolberaImitationRemake (drop caps)

**Character:** The default register is deliberately unglamorous. A system UI face at 16px carries the reading load so the paper, the rules and the amber can do the styling; a 350-weight mono makes code feel etched rather than typed. The handbook register supplies the only genuinely decorative type in the system, and it earns that by being quarantined behind a route.

Roboto is the one quiet exception to the system stack, and it is a deliberate one: the table and the right-hand contents list are dense reference furniture rather than prose, so they get a real drawn face at a lighter weight instead of the OS default. Everything read as a sentence stays on the system stack.

### Hierarchy

- **Display** (700, 32px/40px): the page h1 and the hero title. Light mode oxblood, dark mode `#c68000`.
- **Headline** (600, 24px/32px): section h2. Always paired with a full-width 2px gold rule underneath. It is the single most repeated visual signature in the whole site.
- **Title** (600, 18px/26px): h3. Tight margins, no rule, no case change.
- **Body** (400, 16px/1.625): all prose and lists. Line height is the point: 26px against a 16px face. Tables inherit the size but not the face.
- **Label** (700, 0.85rem, uppercase): h4 only. The one place the system shouts quietly.
- **Mono** (350, 16px/1.5): code blocks and inline code. Weights stay under 450 even for emphasis, because a bold mono breaks the etched feel.
- **Table / TOC** (300 and 325, 16px): dense reference furniture. Roboto rather than the system stack, and never above 325 so it reads as annotation beside the prose.
- **Handbook Quote / Table** (400, ScalySans): blockquotes and stat tables inside the D&D route.
- **Handbook Small Caps** (400, ScalySansSmallCaps): admonition heads and the `::first-line` of a handbook opening paragraph.
- **Handbook Drop Cap** (400, SolberaImitationRemake at twice the h1 size): the floated first letter of the first paragraph after a header, filled with a 45-degree `#322814` to `#998250` gradient through `background-clip: text`.

### Named Rules

**The 16/26 Rule.** Body copy is 16px on a 26px line (1.625). A 110% base was tried and replaced; do not reintroduce it. Long-form reading quality is the site's most load-bearing visual decision. Note the mechanism: `--ifm-font-size-base` is declared twice, as `110%` in `custom.css` and as `16px` in `custom-narrow-styles.css`, and the second wins only because that file is imported last. The same applies to the system UI stack, which shadows an unused `"Open Sans"` declaration a few lines earlier. The computed value is the only one that counts; the earlier declarations are dead weight, not a second opinion.

**The Handbook Quarantine Rule.** BookInstanity, MrEavesRemake, ScalySans, the drop cap and the small-caps first line apply only inside `html[class*="-doc-id-DnD/"]`. They never appear on a dashboard, a landing page, or a general article.

**The Two-Weight Rule.** Reading text uses 400, emphasis 450 to 700, and mono never exceeds 450. Weight is the system's emphasis tool; colour is not.

## Layout

One content column inside Infima's docs frame: a 280px sidebar (hideable, 0.2s cubic-bezier(0.08, 0.52, 0.52, 1) width transition), a right-hand table of contents, and a single measure in between. The page reads as a printed sheet, so there is no multi-column prose, no cards-in-a-grid inside an article, and no side-bleed illustrations in body flow.

Vertical rhythm is generated rather than declared: h2 and h3 top margins are computed from Infima's rhythm variables divided by 3, which keeps section breaks tight enough that a long technical article does not feel like a series of pages. Paragraph bottom margin is halved (0.5em) and list paragraph margin reduced to 0.25em, so dense reference material stays scannable.

Section separators are a full-width 20px-tall SVG (`/img/divider-02.svg`) on `hr`, never a border line. Tables are full-width, borderless, zebra-striped through `--bg-table-row-odd` / `--bg-table-row-even`, with 0.5em horizontal cell padding and no outer frame.

The landing page is the exception: a full-bleed forest photograph behind the hero at `background-position: 50% 10%`, parallaxed at 0.1 speed on scroll, 4rem vertical padding, dropping to 2rem below 966px. Below the hero, a three-across feature grid (`col col--4`) of line-art illustrations.

Motion runs on four speeds and no more. State changes (pill borders, tag tints, focus) are 0.15s ease. Shadow lifts and border shifts are 0.2s ease-in-out. The sidebar is 0.2s `cubic-bezier(0.08, 0.52, 0.52, 1)`. The only long move in the system is the dark-mode toggle, which wraps the theme swap in a View Transition and reveals the new sheet with a 1s circular clip-path growing from the centre to 150%, on a hand-tuned exponential-out curve (`--expo-out`).

A 3px amber bar is pinned to the very top of the viewport on doc pages and grows with scroll position, so the reader always knows how much article is left.

## Elevation & Depth

This is a paper system. Surfaces are sheets lying on a desk, so depth is expressed as a warm shadow under the sheet rather than as glass, glassmorphism, or layered tonal planes. Every shadow on a paper surface is amber-tinted; neutral black is reserved for the handbook container and for dark-mode card hover, where amber would read as a glow instead of a lift.

Two artifacts go further than a drop shadow. Admonitions and pagination links cast a pair of skewed pseudo-element shadows (a page peeling at both bottom corners) that contract on hover, so the sheet appears to settle rather than float. The handbook container instead draws inset gold hairlines at top and bottom, using shadow as bookbinding rather than as lift.

### Shadow Vocabulary

- **Paper rest** (`0 2px 14px rgba(163, 106, 0, .4)`): the default floating state for pagination links, notes and any card that is not a plain surface.
- **Paper hover** (`0 5px 14px rgba(163, 106, 0, .7)`): the lifted state. Same geometry, larger offset, deeper alpha, 0.2s ease-in-out.
- **Card hover, light** (`0 3px 6px #0003`): the only neutral-black shadow allowed on a light paper surface, used for the generic card grid.
- **Card hover, dark** (`0 3px 6px #AAA3`): the dark-mode counterpart, a light haze instead of a dark one.
- **Handbook binding** (`0 6px 12px rgba(0, 0, 0, .3)` plus inset 4px/5px gold and oxblood hairlines): the D&D parchment container. Dark mode deepens the outer shadow to .5.
- **Hero glow** (`1px 3px 0 #c68000, -1px -3px 0 #ffb630, 1px 13px 15px #a36a00`): a stacked text-shadow that makes the home hero title look embossed in metal. Homepage only.

### Named Rules

**The Warm Shadow Rule.** If a shadow falls on paper, it is `rgba(163, 106, 0, ...)`. Black shadows are an exception for the handbook container and dark-mode hovers, not a default.

**The Settle Rule.** Hover does not scale, bounce or glow. It changes the shadow from rest to lifted over 0.2s ease-in-out. Motion in this system is a sheet being picked up, nothing faster.

## Shapes

Form language is irregular by intent. The signature radius is the compound `28px 12px 35px 15px`: four deliberately different corners that make a rectangle look cut by hand. It belongs to the code plaque, admonitions and terminal frames, and it is what most distinguishes the site from a stock Docusaurus theme.

Everything else is either a hairline or a pill, with no middle ground. Handbook inputs use a 3px radius, inline code and tags 4px, standalone buttons and copy controls 6px, Infima surfaces 0.4rem, standalone search fields 8px, and filters and badges are fully round at 9999px. Borders are almost always 1px or 2px and amber-derived; heavy frames are replaced by the plaque edge treatment (a 28px gradient bar across the top).

Recurring silhouettes: the three-leaf control cluster on code plaques (18px leaves, 20px apart), the full-width gold rule under every h2, the hand-drawn divider on `hr`, and the handbook's four small circles at the corners of a blockquote. A new artifact should reuse one of these before inventing a new shape.

## Components

Components here are quiet: they are mostly a hairline, a pill, or a sheet. The personality lives in the three signature artifacts.

### Buttons

- **Shape:** Infima defaults, 0.4rem radius. The system barely uses buttons; primary actions are links and pills.
- **Primary:** there is no dedicated primary button component. Calls to action are amber-family links (`--ifm-link-color` = amber-link, hover amber-link-hover, no underline shift) or filter pills.
- **Hero CTA:** the one exception, on the home page only: `button button--secondary button--lg` overridden to an amber-darker fill (#c68000) with an amber-lightest border and a stacked amber text-shadow. The label stays Infima grey-900 (#1c1e21, 5.16:1) rather than white, so it clears AA at its 18.9px/700 size. It is a hero ornament, not a reusable button style.
- **Hover / Focus:** colour and shadow transitions run 0.15s to 0.2s ease. Focus-visible uses a 2px `--focus-ring` outline with 2px offset. The ring is `#8f5d00` (5.39:1) on paper and `#ffb630` (10.85:1) in dark mode; amber at #e99700 is only 2.26:1 and is never a focus colour.

### Chips

- **Style:** filter pills are fully round, transparent at rest with a 1px emphasis-300 border, 0.8125rem label at weight 500, 0.375rem by 0.75rem padding.
- **State:** hover shifts border and label to amber. The active pill inverts to an amber fill with ink text (6.77:1) and lightens its count badge with a white-alpha fill. Ink is used rather than white because `#fff` on #e99700 is only 2.36:1, and `opacity: .9` on hover would drop a white label further.
- **Badges:** freshness badges are round at 9999px with a 8px status dot and a 12% tinted background (green, amber, red). The label is the dark shade of the same hue, not the bright one; a stale or outdated badge also carries a dotted-underline "Suggest update" link at 0.65rem. Tags are the opposite: 4px radius, 0.625rem uppercase-ish meta text on an amber tint over the page field (`rgba(233, 151, 0, .12)`), ink text. Category badges share that tint; there is no per-category hue.

### Cards

- **Corner Style:** 0.4rem, Infima default.
- **Background:** the paper field; cards do not tint themselves.
- **Shadow Strategy:** flat at rest, `0 3px 6px #0003` on hover, border shifts to amber at the same moment.
- **Border:** none visible until hover.
- **Internal Padding:** 2rem vertical by 1.5rem horizontal, content bottom-aligned with `margin-top: auto` on the meta row.

### Inputs / Fields

- **Style:** two families. Standalone search fields are 8px radius, 1px emphasis-300 border, paper background, 0.625rem by 1rem padding. Handbook fields are 3px radius, 2px D&D-gold border, D&D-input fill, oxblood text.
- **Focus:** a border-colour shift to amber in both families. Handbook fields also add a faint inset shadow.
- **Error / Disabled:** handbook errors swap to a 10% red wash with a 3px left rule and oxblood-red text. No disabled treatment is defined anywhere in the system.

### Navigation

- **Style:** a navbar with the tree logo and site title, hide-on-scroll, two left links and a GitHub icon on the right.
- **Surface:** the navbar is a paper strip with a warm gradient at its left and right 1% edges, matching the page field. The footer is the one genuinely dark surface (`#1b2127`) with a subtle inner gradient.
- **Typography:** link labels at base body size; no letter-spacing, no uppercase. The active TOC entry is amber; the rest are ink.
- **Mobile:** Infima's sidebar drawer, with the same hide/show transition reinstated explicitly at 0.2s `cubic-bezier(0.08, 0.52, 0.52, 1)`.

### Signature: Code Plaque

The most recognisable artifact in the system. A code block is a dark bark plaque (Forest Floor `#2b2b2b`) with the compound organic radius, a 2px amber-darkest frame, and a 28px header bar carrying an amber gradient from darker to darkest. Three 18px leaves (red, amber, green) sit at the top-left where window controls would be, and the code block title floats beside them at 0.85rem in a light smoke colour. In light mode the plaque body inverts to the paper card colour with a `HB_Color_HeaderUnderline` to `HB_Color_HeaderText` gradient bar, so it still reads as a wooden lid on a pale page.

Reuse it for any full-width terminal or log frame (`.terminal-window` mirrors the same CSS). Do not apply the organic radius or the leaf trio to ordinary cards.

### Signature: Ruled Heading

Every h2 gets `border-bottom: 2px solid` gold-rule (#c9ad6a in light, rgb(134, 115, 71) in dark) at full column width, with a deliberately small bottom margin (0.25rem via `--ifm-heading-margin-bottom`). Combined with the halved top rhythm, this makes an article read as a series of ruled paper sections. It is the cheapest and most repeated signal of the world; keep it on every h2 and on none of h3.

## Do's and Don'ts

### Do:

- **Do** keep body copy at 16px on a 26px line (1.625), and keep paragraph margins tight (0.5em bottom).
- **Do** give every h2 the full-width 2px gold rule, and give h3 nothing.
- **Do** use the compound radius `28px 12px 35px 15px` for anything that reads as a cut sheet: code blocks, admonitions, terminal frames.
- **Do** tint paper shadows amber (`rgba(163, 106, 0, .4)` at rest, `.7` on hover) and animate them over 0.2s ease-in-out.
- **Do** reach for `--ifm-color-primary` and its seven-step family instead of writing new amber hex values.
- **Do** use the SVG divider on `hr`, and the leaf trio on full-width terminal frames only.
- **Do** scope handbook typography and the parchment texture to the `-doc-id-DnD/` route classes, and give those components their own `--dnd-*` tokens.
- **Do** route every focus indicator through `--focus-ring` (`#8f5d00` light, `#ffb630` dark). Amber at #e99700 is 2.26:1 on paper and is never a focus colour.
- **Do** keep green, stale-amber and outdated-red inside the freshness family, always as a 12% tint with a dark-shade label, never as a bare fill.
- **Do** prefer a 9999px pill or a 3px hairline to a mid-range radius; the system has no 12px-to-24px middle ground.

### Don't:

- **Don't** set body copy in amber, and don't make amber a heading colour in light mode. Headings are oxblood there.
- **Don't** put the warm gradient anywhere except the first and last 1% of the viewport edges.
- **Don't** introduce a fourth accent hue. Amber, oxblood and the decorative leaf trio are the whole palette.
- **Don't** use neutral grey shadows on paper surfaces; the dark-mode card hover (`#AAA3`) and the handbook container are the only exceptions.
- **Don't** reuse the handbook's red rule (#9c2b1b) as an error colour, or the leaf red as a danger state.
- **Don't** ship white-on-amber text. `#fff` on #e99700 is 2.36:1. Amber fills carry ink (`--ink`, 6.77:1) or use amber-darkest as the fill with white text (4.55:1).
- **Don't** apply the organic radius, the leaf trio or the drop cap outside their artifacts. They are signatures, and repeating them everywhere spends them.
- **Don't** set Roboto outside table cells and the table of contents; prose is the system UI stack.
- **Don't** animate anything on scroll except the 0.1-speed hero parallax.
- **Don't** put a hardcoded type size in a component CSS module when an Infima variable already carries it; the two-register type system depends on those variables being the single source.
