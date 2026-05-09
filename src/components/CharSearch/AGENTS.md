# CharSearch Component

A searchable, class-filtered character browser for The Golden Forest's D&D tools. Fetches `fg/chars/index.json` and renders a list of `<XmlChar>` cards with live name search and class dropdown filtering.

## Folder Structure

```
src/components/CharSearch/
  ├── CharSearch.js        # Main component + BrowserOnly wrapper
  └── CharSearch.module.css # Scoped styles (light/dark theme)
```

## What It Does

- Loads a JSON index of character files from `/fg/chars/index.json` on mount.
- Filters by name (case-insensitive substring) and D&D class dropdown.
- Clicking a card shows the full `<XmlChar>` detail view; "Back to list" returns to grid.
- Wraps content in `BrowserOnly` for SSR safety (Docusaurus requirement).

## Common Mistakes to Avoid

1. **Modifying state outside BrowserOnly** — all state and effects must live inside `CharSearchInternal`.
2. **Adding new class options without updating DEFAULT_CLASSES** — the dropdown is hardcoded; any new class needs both the array entry and a matching XML file in `static/fg/chars/`.
3. **Breaking the index.json contract** — each entry must have `name`, `filename`, `classes` (array), and optionally `race`. The filter logic assumes these keys exist.
4. **Using regular imports for DOM APIs** — use `BrowserOnly`; never access `window`, `document`, or `DOMParser` at the top level.
