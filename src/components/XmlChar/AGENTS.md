# XmlChar Component

A D&D character sheet renderer that fetches Fantasy Grounds XML files and parses them into styled, responsive cards with three display modes (small/medium/large). Used by `CharSearch` for detail views.

## Folder Structure

```
src/components/XmlChar/
  ├── XmlChar.js           # Main component + BrowserOnly wrapper, render logic
  ├── XmlParser.js         # DOMParser-based XML → JS object converter
  ├── utils.js             # signed() helper (formats ±bonus strings)
  ├── XmlChar.module.css   # Scoped styles + dark mode
  └── assets/              # divider-triangle.svg icons
```

## What It Does

- Fetches a `.xml` character file from `/fg/chars/<filename>` and parses it into structured data (name, race, classes, abilities, skills, feats, etc.).
- Renders three display modes: **small** (compact card), **medium** (adds skills/languages/prof bonus), **large** (adds portrait + feats).
- Auto-detects avatar images from `/fg/avatar/`, falling back to `faceless.svg` when missing.

## Common Mistakes to Avoid

1. **Omitting BrowserOnly** — DOMParser and window access must stay inside the wrapped component (`XmlCharInternal`). Never move parsing logic to the top-level export.
2. **Passing a non-existent filename** — the component will throw "File not found"; always ensure the XML file exists in `static/fg/chars/`.
3. **Assuming abilities always have all fields** — `score`, `bonus`, and `save` may be missing; the parser defaults to `0` but rendering assumes they exist once parsed.
4. **Using display="large" without filename** — portrait detection depends on `filename`; pass it even if using a custom `image` prop.
