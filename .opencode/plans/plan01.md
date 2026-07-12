# Char Search Web App — Plan 01

## Goal
Create a searchable character browser that lets users filter the 110 Fantasy Grounds characters by **name** and **class**, then view any character using the existing `<XmlChar>` component.

---

## Architecture Overview

```
docs/Games/DnD/FantasyGrounds/char-view/index.mdx   ← MDX page, renders <CharSearch>
src/components/CharSearch/
  CharSearch.js          ← React component (BrowserOnly)
  CharSearch.module.css  ← Styled to match XmlChar theme
scripts/build-char-index.mjs  ← Man-run script → generates static/fg/chars/index.json
static/fg/chars/index.json         ← Pre-built JSON index {filename, name, classes[], race}
```

---

## Step-by-Step Implementation

### 1. Build Script — `scripts/build-char-index.mjs`

**Purpose:** Read all XML files from `static/fg/chars/`, extract minimal metadata (name, class names, race), and write a single JSON index file.

**Approach:**
```javascript
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const charsDir = './static/fg/chars';
const files = readdirSync(charsDir).filter(f => f.endsWith('.xml'));

// DOMParser via jsdom (already a transitive dep) or manual XML extraction
function parseName(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([^<]+)<`, 'i');
  return match ? match[1].trim() : '';
}

const index = [];
for (const file of files) {
  const xml = readFileSync(join(charsDir, file), 'utf-8');
  
  // Name & race are top-level under <character>
  const name = parseName(xml, 'name') || '';
  const race = parseName(xml, 'race') || '';

  // Classes: extract all <classes><...><name type="string">ClassName</name></classes>
  const classMatches = [...xml.matchAll(/<classes[^>]*>([\s\S]*?)<\/classes>/g)];
  const classes = [];
  for (const clsMatch of classMatches) {
    const innerClasses = clsMatch[1];
    const nameMatches = [...innerClasses.matchAll(/<name\s+type="string"\s*>([^<]+)<\/name>/g)];
    for (const m of nameMatches) classes.push(m[1]);
  }

  index.push({ filename: file.replace('.xml', ''), name, race, classes });
}

writeFileSync('./static/fg/chars/index.json', JSON.stringify(index, null, 2));
console.log(`Indexed ${index.length} characters to static/fg/chars/index.json`);
```

**Run command:** `node scripts/build-char-index.mjs` (run after adding/removing characters)

---

### 2. React Component — `src/components/CharSearch/CharSearch.js`

**Props:** none (all data fetched at runtime from `/fg/chars/index.json`)

**Flow:**
1. Wrap everything in `<BrowserOnly>` so DOMParser + window work safely.
2. On mount, fetch `/fg/chars/index.json`.
3. Store index state as `{ filename, name, race, classes: string[] }[]`.
4. Collect all unique class names from the full index into an array for the dropdown.

**State:**
```javascript
const [index, setIndex] = useState(null);   // loaded JSON data (null → loading)
const [searchText, setSearchText] = useState('');  // name filter input
const [selectedClass, setSelectedClass] = useState('All');  // class dropdown
const [selectedChar, setSelectedChar] = useState(null);  // { filename } for XmlChar detail view
```

**Filtering logic:**
```javascript
const filtered = index.filter(ch => {
  const matchName = searchText === '' || ch.name.toLowerCase().includes(searchText.toLowerCase());
  const matchClass = selectedClass === 'All' || ch.classes.includes(selectedClass);
  return matchName && matchClass;
});
```

**Render structure:**
```jsx
<div className={styles.container}>
  {/* Search & Filter Bar */}
  <div className={styles.toolbar}>
    <input
      type="text"
      placeholder="Search by name..."
      value={searchText}
      onChange={e => setSearchText(e.target.value)}
      className={styles.searchInput}
    />
    <select
      value={selectedClass}
      onChange={e => setSelectedClass(e.target.value)}
      className={styles.classSelect}
    >
      {allClasses.map(c => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  </div>

  {/* Results Count */}
  <p className={styles.count}>{filtered.length} character{filtered.length !== 1 ? 's' : ''}</p>

  {/* Character Cards Grid */}
  {filtered.map(ch => (
    <button key={ch.filename} onClick={() => setSelectedChar(ch)} className={styles.card}>
      <div className={styles.cardName}>{ch.name}</div>
      <div className={styles.cardClass}>{ch.classes.join(' / ')}</div>
      {ch.race && <div className={styles.cardRace}>{ch.race}</div>}
    </button>
  ))}

  {/* Empty State */}
  {filtered.length === 0 && searchText && (
    <p className={styles.empty}>No characters match your filters.</p>
  )}

  {/* Detail View — XmlChar for selected character */}
  {selectedChar && index && (
    <div className={styles.detail}>
      <button onClick={() => setSelectedChar(null)} className={styles.backBtn}>← Back to list</button>
      <XmlChar filename={selectedChar.filename} display="large" />
    </div>
  )}

  {/* Loading State */}
  {!index && !error && (
    <div className={styles.loading}>Loading character index...</div>
  )}
</div>
```

**Imports:**
- `BrowserOnly` from `@docusaurus/BrowserOnly`
- `useBaseUrl` from `@docusaurus/useBaseUrl`
- `XmlChar` from `../XmlChar/XmlChar` (already available in the project)
- `useState, useEffect, useRef` from React

---

### 3. CSS Module — `src/components/CharSearch/CharSearch.module.css`

**Design tokens to reuse:**
| Token | Value | Source |
|---|---|---|
| Background | `#fcf5e5` (parchment) | XmlChar `.container` bg |
| Border color | `#58180d` (dark brown) | XmlChar borders |
| Accent | `#e69a28` (orange/gold) | XmlChar inset shadows |
| Font family | `'ScalySans', sans-serif` | XmlChar `.container` font |

**Key styles:**

| Selector | Description | Approx. lines |
|---|---|---|
| `.container` | Parchment bg, max-width 710px, brown borders with inset shadows (mirror XmlChar) | ~20 |
| `.toolbar` | Flex row: search input + class dropdown side by side | ~15 |
| `.searchInput` | Styled text input matching fantasy theme, flex-grow | ~15 |
| `.classSelect` | Styled select/dropdown matching theme | ~10 |
| `.count` | Small muted text showing result count | ~8 |
| `.card` | Clickable button styled as a character card (compact preview) | ~30 |
| `.cardName` | Bold name display, primary color | ~5 |
| `.cardClass` / `.cardRace` | Smaller secondary info, muted | ~10 |
| `.detail` | Full XmlChar view container, scrollable if needed | ~5 |
| `.backBtn` | Simple back button styled with theme colors | ~12 |
| `.loading` / `.empty` | Loading/empty state messages | ~8 |

---

### 4. MDX Page — `docs/Games/DnD/FantasyGrounds/char-view/index.mdx`

```mdx
# Character Browser

Search and browse all Fantasy Grounds characters by name and class.

import CharSearch from '@site/src/components/CharSearch/CharSearch';

<CharSearch />
```

---

## Files to Create (4 files)

| # | File | Lines (est.) | Description |
|---|---|---|---|
| 1 | `scripts/build-char-index.mjs` | ~50 | Node script: XML → index.json |
| 2 | `src/components/CharSearch/CharSearch.js` | ~130 | React component + filtering logic |
| 3 | `src/components/CharSearch/CharSearch.module.css` | ~80 | Scoped CSS matching theme |
| 4 | `docs/Games/DnD/FantasyGrounds/char-view/index.mdx` | ~6 | MDX page with `<CharSearch>` |

---

## Post-Implementation Steps (Manual)

1. **Build index:** Run `node scripts/build-char-index.mjs` — generates `static/fg/chars/index.json`
2. **Verify:** Run `yarn start` or `make build` to check the app renders correctly
3. **Link it:** Optionally add a sidebar entry or link from `docs/Games/DnD/FantasyGrounds/index.mdx`

---

## No Changes Required To

- Existing `XmlChar.js`, `XmlParser.js`, `utils.js`, `XmlChar.module.css` — reused as-is
- `docusaurus.config.js` — no plugin changes needed (static files auto-served)
- `sidebars.js` — new doc under existing category is auto-included by Docusaurus
