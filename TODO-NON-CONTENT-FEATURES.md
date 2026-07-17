# TODO: Non-Content Infrastructure Features

Potential features for The Golden Forest (lorien.cloud), focusing on security, code quality, CSS simplification, and AI tooling — excluding content and DnD-specific features.

---

## Verification Checklist

Before merging any PR from this plan, **all** of these must pass:

1. **`make check`** — Docusaurus MDX syntax checker passes (no errors outside `graphify-out/`).
2. **`yarn start`** — Dev server compiles with 0 errors (`compiled successfully`).
3. **Visual check** — Navigate to affected pages in both **light** and **dark** mode. No broken layouts, missing styles, or console errors.
4. **Import paths** — All new/moved files resolve correctly (no `Module not found` errors).
5. **TODO file updated** — Completed items marked with ✅ DONE in this file.

## 1. Security

### 1.1 SECURITY.md

Missing security policy. Add vulnerability reporting instructions at the repository root.

- **Complexity:** Low

### 1.2 `.github/copilot-instructions.md` ✅ DONE

Referenced in AGENTS.md as "designates this file as the source of truth" but the file does not exist. Should point to AGENTS.md.

- **Complexity:** Low

### 1.3 Dependabot: Group GitHub Actions

Currently groups `@docusaurus/*` and `react`/`react-dom` for npm. Could group `actions/*` and `github/*` actions for cleaner PRs.

- **File:** `.github/dependabot.yml`
- **Complexity:** Low

### 1.4 CODEOWNERS

No file found. Auto-assign reviews for `src/`, `docs/`, `.github/`.

- **File:** `.github/CODEOWNERS`
- **Complexity:** Low

### 1.5 Issue/PR Templates

No `.github/ISSUE_TEMPLATE/` or `PULL_REQUEST_TEMPLATE.md`.

- **Complexity:** Low

---

## 2. `src/` Organization

### 2.1 Group D&D Components into Subdirectory ✅ DONE

`DnDPointBuy.js`, `Feat.js`, `FeatBrowser.js`, `FeatTable.js`, `StatDiceRoller.js` are loose files in `src/components/`. Move to `src/components/DnD/`.

- **Complexity:** Medium (requires updating all MDX imports)

### 2.2 Extract Shared `useSearchFilter` Hook ✅ DONE

Fetch + filter + search logic is duplicated in AiDashboard, MermaidPlayground, and CharSearch. Create `src/hooks/useSearchFilter.js`.

- **Pattern:** Identical `useState`/`useMemo` blocks in 3 components
- **Complexity:** Medium

### 2.3 Extract D&D Shared Constants ✅ DONE

`ABILITIES` array duplicated in DnDPointBuy and StatDiceRoller. Skeleton colors duplicated in XmlChar, CharSearch, PartySummary. Create `src/constants/dnd.js` and `src/constants/skeleton.js`.

- **Complexity:** Low

### 2.4 `withBrowserOnly` HOC

6 components wrap in identical `BrowserOnly` boilerplate. Create `src/utils/withBrowserOnly.js`.

- **Files:** XmlChar, CharSearch, AiDashboard, MermaidPlayground, PartySummary, StatDiceRoller
- **Complexity:** Low

---

## 3. Reduce Duplicated Code

### 3.1 Shared `CategoryFilter` Component

AiDashboard and MermaidPlayground have identical pill-bar JS+CSS. Reuse `AiDashboard/CategoryFilter` in MermaidPlayground.

- **Files:** `AiDashboard/CategoryFilter.js` + `.module.css`, `MermaidPlayground/MermaidPlayground.js` (inline duplicate)
- **Complexity:** Low-Medium

### 3.2 Shared `BaseCard` Component

`ToolCard` and `TemplateCard` are 80%+ identical. Extract shared card into a common component.

- **Files:** `AiDashboard/ToolCard.js`, `MermaidPlayground/TemplateCard.js`
- **Complexity:** Medium

### 3.3 Shared `CopyButton` Component

ToolDetail already has one. Export it and use in LiveEditor.

- **Files:** `AiDashboard/ToolDetail.js`, `MermaidPlayground/LiveEditor.js`
- **Complexity:** Low

### 3.4 Shared `DndSkeleton` Wrapper

3 components use identical skeleton JSX + color values (`rgba(88,24,13,0.08)`, `rgba(255,182,48,0.08)`).

- **Files:** XmlChar, CharSearch, PartySummary
- **Complexity:** Low

### 3.5 D&D Ability Constants ✅ DONE

`['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']` duplicated in DnDPointBuy and StatDiceRoller.

- **Complexity:** Low

---

## 4. Simplify CSS

### 4.1 D&D CSS Custom Properties ✅ DONE

~40 hardcoded hex values (`#58180d`, `#fcf5e5`, `#1a1612`, `#c68000`, etc.) scattered across 6+ CSS modules. Define as CSS variables. Some already exist as `--HB_Color_*` but modules use raw hex.

- **Files:** XmlChar.module.css, CharSearch.module.css, PartySummary.module.css, ToolCard.module.css, ToolDetail.module.css, TemplateCard.module.css, custom.css
- **Complexity:** Medium

### 4.2 Shared `.dnd-container` Class ✅ DONE

Parchment container with inset box-shadow is copy-pasted 3 times with near-identical values.

- **Files:** XmlChar.module.css (lines 16-33), CharSearch.module.css (lines 1-14), PartySummary.module.css (lines 1-15)
- **Complexity:** Low-Medium

### 4.3 Shared Pill/Filter CSS ✅ DONE

CategoryFilter and MermaidPlayground have identical `.pill`, `.active`, `.filterBar` classes.

- **Files:** `AiDashboard/CategoryFilter.module.css`, `MermaidPlayground/MermaidPlayground.module.css`
- **Complexity:** Low

### 4.4 Shared Search Input CSS ✅ DONE

Identical `.searchInput` class in AiDashboard and MermaidPlayground.

- **Files:** `AiDashboard/AiDashboard.module.css`, `MermaidPlayground/MermaidPlayground.module.css`
- **Complexity:** Low

### 4.5 Shared Loading/Error/Empty CSS ✅ DONE

Identical `.loading`, `.error`, `.empty` classes in AiDashboard and MermaidPlayground.

- **Files:** `AiDashboard/AiDashboard.module.css`, `MermaidPlayground/MermaidPlayground.module.css`
- **Complexity:** Low

### 4.6 Shared Tag CSS ✅ DONE

`.tag` class duplicated in 3 files.

- **Files:** `AiDashboard/ToolCard.module.css`, `AiDashboard/ToolDetail.module.css`, `MermaidPlayground/TemplateCard.module.css`
- **Complexity:** Low

### 4.7 Convert StatDiceRoller Inline Styles to CSS Module

15+ inline `style={{}}` objects. Only component not using CSS modules.

- **File:** `src/components/StatDiceRoller.js`
- **Complexity:** Medium

---

## 5. AGENTS.md & AI Files Organization

### 5.1 Consolidate AGENTS.md Hierarchy

4 files exist: root `AGENTS.md`, `src/components/AGENTS.md`, `XmlChar/AGENTS.md`, `CharSearch/AGENTS.md`. Consider merging component-specific ones into `src/components/AGENTS.md`.

- **Complexity:** Low

### 5.2 Sync `.agents/commands/` and `.opencode/commands/` ✅ DONE

10 of 16 OpenCode commands duplicate `.agents/commands/` files. Could symlink or use a single source of truth.

- **Directories:** `.agents/commands/` (10 files), `.opencode/commands/` (16 files, 10 overlapping)
- **Complexity:** Low-Medium

### 5.3 Create `.github/copilot-instructions.md` ✅ DONE

Referenced in AGENTS.md but missing. Should point to AGENTS.md.

- **Complexity:** Low

### 5.4 Create `.cursorrules`

For Cursor users, should reference AGENTS.md patterns.

- **Complexity:** Low

### 5.5 Document Ponytail System

7 `.opencode/ponytail*.md` files + 6 plugin files. Could benefit from a top-level README in `.opencode/`.

- **Complexity:** Low

### 5.6 Archive Stale Plan Files

`PLAN-01-mermaid-diagram-playground.md` at root — playground is built (done). Could be archived to `docs/` or removed.

- **Complexity:** Low

---

## Priority Matrix

| Priority | Features | Rationale |
|----------|----------|-----------|
| **P0 — Quick Wins** | 1.1, 1.2, 1.3, 2.3, 2.4, 3.5, 5.1, 5.3, 5.4, 5.6 | Low effort, immediate value |
| **P1 — CSS Consolidation** | 4.1, 4.2, 4.3, 4.4, 4.5, 4.6 | Reduces maintenance burden across 6+ files |
| **P2 — Component Extraction** | 3.1, 3.2, 3.3, 3.4 | Eliminates duplicated React components |
| **P3 — Structural Reorg** | 2.1, 2.2, 5.2 | Improves long-term maintainability |
| **P4 — Security Hardening** | 1.4, 1.5 | Standard repo hygiene |

---

## Comparison Matrix

| # | Feature | Area | Complexity | Files Affected | Impact |
|---|---------|------|------------|----------------|--------|
| 1.1 | SECURITY.md | Security | Low | 1 new file | Policy |
| 1.2 | copilot-instructions.md | Security | Low | 1 new file | Missing reference |
| 1.3 | Dependabot GH Actions grouping | Security | Low | 1 file | Cleaner PRs |
| 1.4 | CODEOWNERS | Security | Low | 1 new file | Auto-assign reviews |
| 1.5 | Issue/PR templates | Security | Low | 2-3 new files | Contribution UX |
| 2.1 | Group DnD components | Organization | Medium | 5 files + imports | Clearer structure |
| 2.2 | useSearchFilter hook | Organization | Medium | 3 components | DRY |
| 2.3 | DnD/skeleton constants | Organization | Low | 3-4 components | DRY |
| 2.4 | withBrowserOnly HOC | Organization | Low | 6 components | Less boilerplate |
| 3.1 | CategoryFilter reuse | Duplication | Low-Med | 2 components | DRY |
| 3.2 | BaseCard component | Duplication | Medium | 2 components | DRY |
| 3.3 | CopyButton component | Duplication | Low | 2 components | DRY |
| 3.4 | DndSkeleton wrapper | Duplication | Low | 3 components | DRY |
| 3.5 | ABILITIES constant | Duplication | Low | 2 components | DRY |
| 4.1 | D&D CSS variables | CSS | Medium | 6+ files | Maintainability |
| 4.2 | .dnd-container class | CSS | Low-Med | 3 files | DRY |
| 4.3 | Pill/filter CSS | CSS | Low | 2 files | DRY |
| 4.4 | Search input CSS | CSS | Low | 2 files | DRY |
| 4.5 | Loading/error CSS | CSS | Low | 2 files | DRY |
| 4.6 | Tag CSS | CSS | Low | 3 files | DRY |
| 4.7 | StatDiceRoller CSS module | CSS | Medium | 1 file | Consistency |
| 5.1 | Consolidate AGENTS.md | AI Files | Low | 4 files | Clarity |
| 5.2 | Sync agents/opencode commands | AI Files | Low-Med | 26 files | DRY |
| 5.3 | copilot-instructions.md | AI Files | Low | 1 new file | Missing reference |
| 5.4 | .cursorrules | AI Files | Low | 1 new file | Cursor support |
| 5.5 | Ponytail README | AI Files | Low | 1 new file | Documentation |
| 5.6 | Archive stale plans | AI Files | Low | 1 file | Cleanliness |
