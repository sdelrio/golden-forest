# Components Guide (src/components)

## Directory Overview
- **Documentation**: `Accordion`, `BarChart`, `Card`, `CodeGroup`, `Steps`, `ParamField` (registered in `src/theme/MDXComponents`).
- **D&D Tools**: `DnD/` subdirectory contains `DnDPointBuy`, `Feat`, `FeatBrowser`, `FeatTable`, `StatDiceRoller`. Top-level: `CharSearch`, `XmlChar`, `PartySummary`.
- **Structure**: Directory-per-component (PascalCase) containing `Component.js` and `Component.module.css`.

## D&D Tool Components

### CharSearch

Searchable, class-filtered character browser. Fetches `fg/chars/index.json` and renders a list of `<XmlChar>` cards with live name search and class dropdown filtering.

**Folder Structure:**
```
src/components/CharSearch/
  ├── CharSearch.js        # Main component + BrowserOnly wrapper
  └── CharSearch.module.css # Scoped styles (light/dark theme)
```

**Gotchas:**
1. All state and effects must live inside `CharSearchInternal` (inside `BrowserOnly`).
2. The class dropdown is hardcoded in `DEFAULT_CLASSES` — new classes need both an array entry and a matching XML file in `static/fg/chars/`.
3. `index.json` contract: each entry must have `name`, `filename`, `classes` (array), and optionally `race`.
4. Never access `window`, `document`, or `DOMParser` at the top level — use `BrowserOnly`.

### XmlChar

D&D character sheet renderer that fetches Fantasy Grounds XML files and parses them into styled, responsive cards with three display modes (small/medium/large). Used by `CharSearch` for detail views.

**Folder Structure:**
```
src/components/XmlChar/
  ├── XmlChar.js           # Main component + BrowserOnly wrapper, render logic
  ├── XmlParser.js         # DOMParser-based XML → JS object converter
  ├── XmlChar.module.css   # Scoped styles + dark mode
  └── assets/              # divider-triangle.svg icons
```

**Gotchas:**
1. `DOMParser` and `window` access must stay inside `XmlCharInternal` (wrapped in `BrowserOnly`).
2. Always ensure the XML file exists in `static/fg/chars/` — missing files throw "File not found".
3. Abilities may lack `score`, `bonus`, or `save` fields — parser defaults to `0` but rendering assumes they exist once parsed.
4. `display="large"` requires `filename` for portrait detection, even with a custom `image` prop.

## Current Focus
Optimizing documentation-focused components (`Accordion`, `Steps`) for MDX articles. Ensuring consistent icon usage and mobile responsiveness across the "Digital Garden".

## Documentation Components

### BarChart

Reusable bar chart component built on Recharts. Renders a single-metric bar chart with per-bar coloring, dark mode support, and a built-in legend. Used in MDX articles for framework/tool comparisons.

**Folder Structure:**
```
src/components/BarChart/
  ├── BarChart.js           # Main component + BrowserOnly wrapper
  └── BarChart.module.css   # Scoped styles + dark mode
```

**Props:**
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | — | Heading above the chart |
| `data` | `Array<{ name: string, value: number }>` | — | Chart data points |
| `colorMap` | `Record<string, string>` | — | Framework name → hex color. Same keys across charts keep consistent colors |
| `yAxisLabel` | `string` | — | Y-axis label text |
| `maxValue` | `number` | `'auto'` | Y-axis max (0 → maxValue) |
| `colors` | `string[]` | `DEFAULT_COLORS` | Fallback palette when `colorMap` key is missing |

**Usage in MDX:**
```jsx
import BarChart from '@site/src/components/BarChart/BarChart';

<BarChart
  title="Bundle Size (KB)"
  data={[
    { name: 'Next.js', value: 85 },
    { name: 'SvelteKit', value: 15 },
  ]}
  colorMap={{ 'Next.js': '#388e3c', 'SvelteKit': '#7b1fa2' }}
  yAxisLabel="KB"
  maxValue={100}
/>
```

**Gotchas:**
1. **Not registered globally** — Import directly in MDX with `@site/src/components/BarChart/BarChart`. Do not add to `src/theme/MDXComponents/index.js`.
2. **Dark mode** — Uses `useColorMode` from `@docusaurus/theme-common` to detect theme. All Recharts internals (grid, axes, tooltip, cursor) switch palettes automatically.
3. **Per-bar coloring** — Pass `colorMap` with the same keys to multiple `<BarChart />` instances so each framework always renders the same color.
4. **SSR safe** — Wrapped in `BrowserOnly`. Recharts requires the DOM; the fallback shows "Loading chart...".

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
6. **Missing `useBaseUrl` for static assets**: When fetching JSON or other files from `static/` in components or `src/pages/`, always wrap the path with `useBaseUrl()` from `@docusaurus/useBaseUrl`. Hardcoded paths like `'/ai-dashboard/data.json'` break in PR previews and subpath deployments where the site is served under a base path (e.g., `/golden-forest/`). Use `const dataUrl = useBaseUrl('/ai-dashboard/data.json');` instead.

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
