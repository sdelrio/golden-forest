# The Golden Forest — Project Context

**URL:** lorien.cloud
**Type:** Docusaurus 3.x digital garden + D&D companion toolkit

## Stack
- **Framework:** Docusaurus 3.x
- **UI:** React 19, CSS Modules, Infima CSS variables
- **Content:** MDX (Markdown + JSX), Mermaid diagrams
- **Skeletons:** boneyard-js v1.9 (manual JSON bones, no CLI)
- **Search:** Algolia DocSearch + Typesense
- **Build:** Yarn, Makefile tasks
- **CI:** GitHub Actions, Dependabot

## Directory Layout
- `docs/` — MDX articles (digital garden content)
- `blog/` — Blog posts
- `tutorial/` — Tutorial content
- `src/components/` — React components (PascalCase dirs)
- `src/theme/` — Docusaurus theme overrides
- `src/client/` — Client modules (theme-transition, boneyard registry)
- `static/fg/chars/` — XML character data (111 chars)
- `static/fg/campaign/` — Campaign JSON data (planned)
- `plugins/` — Custom Docusaurus plugins
- `memory/` — Agent persistent memory (this system)

## Conventions
- **Commits:** Conventional Commits (`feat(scope): desc`, `fix:`, `docs:`)
- **Components:** Function components, React 19 hooks, PascalCase dirs
- **Styles:** CSS Modules (`*.module.css`), camelCase classes, `clsx()` for conditionals
- **No TypeScript:** Use JSDoc for type hints
- **MDX:** `<` and `>` must be escaped as `&lt;`/`&gt;` outside code blocks
- **Links:** `<Card href>` resolves from page URL (auto-prepends `../`). Markdown links resolve from file system.
- **Broken links:** `onBrokenLinks: 'throw'` — always verify

## Key Components
| Component | Purpose |
|-----------|---------|
| `XmlChar` | Renders D&D character sheets from XML |
| `CharSearch` | Searchable card grid of all 111 characters |
| `PartySummary` | Current party composition view |
| `DnDPointBuy` | Ability score point-buy calculator |
| `StatDiceRoller` | Dice roller with stat modifiers |
| `Feat`/`FeatBrowser`/`FeatTable` | Feat browsing/filtering |
| `AiDashboard` | AI tools directory with search/filter |
| `MermaidPlayground` | Interactive Mermaid diagram editor |
| `Card`/`Accordion`/`Steps` | Documentation components |

## Build Commands
- `yarn start` / `make start` — Dev server
- `yarn build` / `make build` — Production build
- `make check` — MDX syntax validation
- `make test` — Unlighthouse performance test
- `yarn clear` — Clear Docusaurus cache
