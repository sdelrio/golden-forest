# Components Guide (src/components)

## Directory Overview
- **Documentation**: `Accordion`, `Card`, `CodeGroup`, `Steps`, `ParamField` (registered in `src/theme/MDXComponents`).
- **D&D Tools**: `CharSearch`, `XmlChar`, `DnDPointBuy`, `FeatBrowser`, `StatDiceRoller`, `PartySummary`.
- **Structure**: Directory-per-component (PascalCase) containing `Component.js` and `Component.module.css`.

## Current Focus
Optimizing documentation-focused components (`Accordion`, `Steps`) for MDX articles. Ensuring consistent icon usage and mobile responsiveness across the "Digital Garden".

## Component Standards
- **MDX Registration**: New components must be added to `src/theme/MDXComponents/index.js` to be used in Markdown.
- **Styling**: CSS Modules only. Leverage Infima variables (e.g., `--ifm-color-primary`, `--ifm-spacing-vertical`).
- **Interactivity**: Use `@iconify/react` for icons. Wrap browser-dependent logic in `BrowserOnly`.

## Common Mistakes to Avoid
1. **Missing Registration**: Forgetting to add the component to `MDXComponents`.
2. **SSR Breaks**: Accessing `window` or `document` outside of `useEffect` or `BrowserOnly`.
3. **Global CSS**: Using global selectors in modules instead of scoped classes.
4. **Kebab-case Classes**: Use camelCase for CSS classes to allow `styles.className` access.
5. **Prop Drilling**: Destructure props in the function signature with sensible defaults.

## Boneyard Skeleton Integration

Project uses `boneyard-js` (v1.9) for skeleton loading screens. Bones are manually crafted JSON in `src/bones/` (no CLI — Docusaurus uses webpack/Rspack, not Vite).

### Critical Gotchas

1. **Always pass children with explicit height** — Boneyard's bone overlay uses `position: absolute; inset: 0`. The Skeleton wrapper has `position: relative` but NO intrinsic height. Without children, the overlay collapses to 0px.
   ```jsx
   // WRONG — skeleton renders at 0px height
   <Skeleton name="card" loading={true} initialBones={bones} animate="shimmer" />

   // CORRECT — children provide height via visibility: hidden (still takes layout space)
   <Skeleton name="card" loading={true} initialBones={bones} animate="shimmer">
     <div style={{ height: bones.height }} />
   </Skeleton>
   ```

2. **Dark mode: Boneyard checks `.dark` class, Docusaurus uses `data-theme='dark'`** — Without syncing, Boneyard uses light-mode bone colors in dark mode (nearly invisible). The `src/bones/registry.js` client module adds a `MutationObserver` on `data-theme` to toggle the `.dark` class.

3. **Call `registerBones()` in registry** — Importing JSON isn't enough. The registry must call `registerBones()` from `boneyard-js/react` so the Skeleton component can resolve bones by name.

4. **`initialBones` bypasses registry** — Passing `initialBones` directly is the safest approach for Docusaurus (no dependency on registry timing). The registry is still useful as a fallback.

5. **Dark mode detection is class-based** — Boneyard's `checkDark()` only watches `classList.contains('dark')` and `attributeFilter: ['class']`. It does NOT check `data-theme` attribute. Always sync via the registry.

### Bone Format
Each bone is a tuple `[x, y, w, h, r, c?]`:
- `x`: horizontal offset as % of container width
- `y`: vertical offset from top in px
- `w`: width as % of container width
- `h`: height in px
- `r`: border radius (px number, or `"50%"` for circles)
- `c`: optional container bone flag

Top-level JSON: `{ name, viewportWidth, width, height, bones: Bone[] }`.
