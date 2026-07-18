# Non-Content Infrastructure Features

Security, code quality, CSS simplification, AI tooling. Status as of 2026-07-18.

---

## 1. Security

| # | Feature | Status | Complexity |
|---|---------|--------|------------|
| 1.1 | SECURITY.md | NOT STARTED | Low |
| 1.2 | `.github/copilot-instructions.md` | DONE | Low |
| 1.3 | Dependabot GH Actions grouping | NOT STARTED | Low |
| 1.4 | CODEOWNERS | DONE | Low |
| 1.5 | Issue/PR templates | DONE | Low |

### Notes
- **1.1:** Add vulnerability reporting instructions at repo root.
- **1.3:** Currently groups `@docusaurus/*` and `react`/`react-dom`. Could group `actions/*` and `github/*` for cleaner PRs. File: `.github/dependabot.yml`.

---

## 2. `src/` Organization

| # | Feature | Status | Complexity |
|---|---------|--------|------------|
| 2.1 | Group DnD Components into `DnD/` | DONE | Medium |
| 2.2 | Extract `useSearchFilter` hook | DONE | Medium |
| 2.3 | Extract DnD/skeleton constants | DONE | Low |
| 2.4 | `withBrowserOnly` HOC | DONE | Low |

### Notes
- **2.4:** DONE — HOC created at `src/utils/withBrowserOnly.js`, all 6 components refactored. PR #162.

---

## 3. Reduce Duplicated Code

| # | Feature | Status | Complexity |
|---|---------|--------|------------|
| 3.1 | Shared `CategoryFilter` component | NOT STARTED | Low-Med |
| 3.2 | Shared `BaseCard` component | NOT STARTED | Medium |
| 3.3 | Shared `CopyButton` component | DONE | Low |
| 3.4 | Shared `DndSkeleton` wrapper | NOT STARTED | Low |
| 3.5 | D&D Ability Constants | DONE | Low |

### Notes
- **3.1:** AiDashboard and MermaidPlayground have identical pill-bar JS+CSS.
- **3.2:** `ToolCard` and `TemplateCard` are 80%+ identical.
- **3.3:** DONE — Shared component at `src/components/CopyButton/` with icon/button variants. PR #163.
- **3.4:** 3 components use identical skeleton JSX + color values.

---

## 4. Simplify CSS

| # | Feature | Status | Complexity |
|---|---------|--------|------------|
| 4.1 | D&D CSS Custom Properties | DONE | Medium |
| 4.2 | Shared `.dnd-container` class | DONE | Low-Med |
| 4.3 | Shared Pill/Filter CSS | DONE | Low |
| 4.4 | Shared Search Input CSS | DONE | Low |
| 4.5 | Shared Loading/Error/Empty CSS | DONE | Low |
| 4.6 | Shared Tag CSS | DONE | Low |
| 4.7 | StatDiceRoller inline → CSS module | DONE | Medium |

### Notes
- **4.7:** DONE — Migrated 15+ inline `style={{}}` to CSS module. PR #165.

---

## 5. AGENTS.md & AI Files Organization

| # | Feature | Status | Complexity |
|---|---------|--------|------------|
| 5.1 | Consolidate AGENTS.md hierarchy | NOT STARTED | Low |
| 5.2 | Sync `.agents/commands/` and `.opencode/commands/` | DONE | Low-Med |
| 5.3 | Create `.github/copilot-instructions.md` | DONE | Low |
| 5.4 | Create `.cursorrules` | DONE | Low |
| 5.5 | Document Ponytail System | DONE | Low |
| 5.6 | Archive stale plan files | DONE | Low |

### Notes
- **5.1:** 4 AGENTS.md files exist. Consider merging component-specific ones into `src/components/AGENTS.md`.
- **5.5:** Done — PR #167. Removed 6 duplicate top-level ponytail-*.md files, added `.opencode/README.md`.
- **5.6:** Done — created `memory/archive/` convention. Plan file was already deleted during migration (2026-07-17).

---

## Summary

| Status | Count |
|--------|-------|
| DONE | 19 |
| NOT STARTED | 7 |
| **Total** | **26** |

### Priority Quick Wins (NOT STARTED, Low effort)
- 1.1 SECURITY.md
- 1.3 Dependabot GH Actions
