# Algolia Indexing - Comparison & Reference

## Config File

`/.algolia.docsearch.json`

## Change Applied (2026-07-08)

### Selectors Modified

```diff
  "selectors": {
    "default": {
      "lvl0": { ... },
      "lvl1": "header h1",
      "lvl2": "article h2",
-     "lvl3": "article h3",
-     "lvl4": "article h4",
-     "lvl5": "article h5",
-     "lvl6": "article h6",
-     "text": "article li"
+     "lvl3": "article h3",
+     "text": "article p"
    }
  }
```

### What Changed

1. Removed `lvl4`, `lvl5`, `lvl6` selectors (h4-h6 no longer generate individual records)
2. Changed `text` from `article li` to `article p` (paragraphs instead of list items)

### Why

- Each heading level (h1-h6) generates one Algolia record per matching element
- `article li` generates one record per bullet point, inflating count dramatically
- h1+h2+h3 hierarchy covers the vast majority of search use cases
- Paragraphs are fewer and carry more meaningful content than individual list items

## Record Count Comparison

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| **Total nb_hits** | 46,250 | 5,808 | **-87.4%** |

### Page-Level Examples

| Page | Before | After |
|------|--------|-------|
| `/docs/Apps-and-utilities/gws-cli-tool/` | 52 | 26 |
| `/docs/OS-and-Hardware/Hardware/KVM/remote-screen/` | ~5 | 1 |

### Highest-Record Pages (After)

| Page | Records |
|------|---------|
| `/docs/Games/DnD/feats/` | 474 |
| `/docs/Games/DnD/skills/` | 105 |
| `/docs/Games/DnD/FantasyGrounds/fg-char-extract/development/contributing-guide/` | 69 |
| `/docs/Games/DnD/FantasyGrounds/fg-char-extract/development/building-the-project/` | 48 |
| `/docs/Develop-Code/AI-Development/Skills-and-Agents/html-anything/` | 77 |
| `/docs/Develop-Code/AI-Development/Skills-and-Agents/cybersecurity-skills/` | 82 |

## How the Scraper Creates Records

The DocSearch scraper creates **one record per matched DOM element**:

- `lvl0`: sidebar category (1/page)
- `lvl1`: `header h1` (1/page, Docusaurus wraps only h1 in `<header>`)
- `lvl2`: `article h2` (1 per h2 heading)
- `lvl3`: `article h3` (1 per h3 heading)
- `text`: `article p` (1 per paragraph)

**Important**: In Docusaurus, `<header>` only wraps the h1. All h2+ headings live inside `<article>` but outside `<header>`. Using `header h2` as a selector would match zero elements.

## Future Reduction Strategies

If more reduction is needed:

1. **Remove `lvl3`** — keeps only h1+h2 hierarchy (moderate reduction)
2. **Add `stop_urls` patterns** — exclude entire sections (e.g., `/docs/Games/DnD/` has high-record pages like feats/skills)
3. **Add `max_hierarchy_depth: 2`** in `custom_settings` — caps nesting depth
4. **Switch `text` to empty** — removes all text records, keeps only heading hierarchy (aggressive)
5. **Add `only_content` selectors** — restrict to specific content areas
6. **Exclude tag pages** — add `/tags/` patterns (some tag pages still getting indexed despite stop_urls)

## Reindexing

```bash
# Local
make algolia

# CI (runs 1st and 15th of every month)
# See .github/workflows/indexing.yml
```

**Note**: The Makefile uses `-it` flag which fails without TTY. Run Docker directly without `-it` if needed:

```bash
docker run --rm --env-file=$HOME/.algoliaenv \
  -e "CONFIG=$(cat .algolia.docsearch.json | jq -r tostring)" \
  algolia/docsearch-scraper:latest -v
```
