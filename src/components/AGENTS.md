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
