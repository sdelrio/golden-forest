# AGENTS.md - AI Coding Agent Guidelines

This document provides guidelines for AI coding agents working on **The Golden Forest** (lorien.cloud), a Docusaurus 3.x digital garden built with React 19, MDX, and CSS Modules.

## Self-learning

When I correct you, or you catch yourself making a mistake: before continuing, add the lesson as a one-liner rule under ## Lessons, so it never happens again.

## Lessons

### Always update AI Dashboard when adding articles under `docs/Develop-Code/AI-Development/`
- **When**: 2026-07-26 — added `opensre.md` under `docs/Develop-Code/AI-Development/Workflows/` without updating the AI Dashboard.
- **Why it matters**: `static/ai-dashboard/tools.json` is the source of truth for the AI Dashboard. Articles under `docs/Develop-Code/AI-Development/` **must** also be added there, then run `task ai-dashboard:enrich` to enrich the entry.
- **Rule**: Every new article in `docs/Develop-Code/AI-Development/` → add entry to `tools.json` → run `task ai-dashboard:enrich`.

### Verify final file location after write-article
- **When**: 2026-07-26 — `write-article` task created `opensre-agents.md` in `Skills-and-Agents/Agents/` instead of the intended `Workflows/` folder.
- **Why it matters**: The task may place files in the wrong subdirectory. Always verify the file ended up where the user requested, and remove any stray files.
- **Rule**: After `write-article`, check `git status` or `rtk find` to confirm the file is in the correct path. Delete any incorrectly placed files.

### Always run `task build` after write-article to catch missing imports
- **When**: 2026-07-26 — `opensre.md` used `<Tabs>/<TabItem>` without importing them; `task check` passed but `task build` failed at SSG.
- **Why it matters**: `task check` only validates MDX syntax — it does not verify that all components used in JSX are actually imported. `task build` (SSG) catches these at render time.
- **Rule**: After writing any article, always run `task build` as a final validation step. If it fails, look for missing component imports (`Tabs`, `TabItem`, etc.).

### Never use em dash
- **Rule**: Never use the em dash "—". Use plain dash "-" instead.

### Never auto-add agent co-author to commits
- **Rule**: When writing commit messages, NEVER auto-add your agent name as co-author.

## Build/Lint/Test Commands

### Core Operations
- `yarn start` or `make start`: Start development server.
- `yarn build` or `make build`: Production build (to `./build`).
- `yarn clear`: Clear Docusaurus cache if experiencing build issues.

### Quality Checks
- `task check`: Run Docusaurus MDX checker (crucial for verifying MDX syntax).
- `task test:pages -- <files>`: Test changed pages load via lightpanda CDP (HTTP 200, no JS errors).
- `task test:perf`: Run `unlighthouse` web performance test.
- `task test:links`: Check for broken links in the build directory.

### PR Workflow
- `task pr:workflow --title "feat(scope): description"`: Automate PR creation workflow.
  - Steps: MDX check → Create branch → Commit → Push → Create PR → Watch checks
  - Options:
    - `ENRUG=true`: Include AI dashboard enrichment step
    - `BRANCH=name`: Specify custom branch name
    - `BODY="description"`: PR body text
    - `NOCHECK=true`: Skip MDX validation
    - `DRYRUN=true`: Preview commits without executing
  - Example: `task pr:workflow --title "feat(prompt-library): add new article" --enrich`
  - Auto-commit mode: Omit `--title` to auto-generate commits from changed files

### Manual PR Workflow (when `task pr:workflow` is not used)
1. `git checkout -b feat/<scope>` from master
2. Stage and commit: `git add -A && git commit -m "feat(scope): desc\n\n- bullet points"`
3. Push: `git push -u origin feat/<scope>`
4. Create PR: `gh pr create --title "..." --body "..."`
5. Watch checks: `gh pr checks <number> --watch`
6. If broken links fail (common with Card hrefs):
   - Card `<Card href>` resolves from **page URL** (with trailing slash), not file system
   - Use absolute path `/docs/...` for cross-section Card hrefs (e.g., linking from `comparatives/` to `Security/`)
   - Markdown links `[text](path.md)` resolve from **file system** — use relative `../` paths
   - Amend: `git add -A && git commit --amend --no-edit && git push --force-with-lease`
7. Wait for user confirmation before `gh pr merge --squash`

### Git Commit Messages
Follow **Conventional Commits** format. Every commit has a **short subject** and optional **long body**.

**Subject line (short)**: `type(scope): description`
- Max 50 characters
- Use imperative mood ("add" not "added")
- No period at end

**Body (long)**: Blank line after subject, then bullet points
- Each bullet starts with `- ` and describes one change
- Wrap at 72 characters
- Explain **what** and **why**, not how

**Examples**:
```
feat(prompt-library): add self-learn prompt article

- Add Boris Cherny's self-learning prompt technique
- Include YouTube video reference
- Update AI dashboard tools cache
```

```
docs(k8s): add dedicated k9s article

- Add new article covering k9s terminal UI for Kubernetes
- Include installation and configuration steps
- Add screenshots for key features
```

**Types**: `feat`, `docs`, `chore`, `fix`, `refactor`, `style`, `test`
**Scopes**: `prompt-library`, `tools`, `mcps`, `workflows`, `dnd`, `homelab`, `components`, `ai-dashboard`, `chars`, `scripts`, `blog`, `tutorial`

### Running a "Single Test"
The project has no unit test framework (Jest/Vitest). To test components:
1. Create an MDX file in `docs/` or `tutorial/` (e.g., `docs/_test-feature.mdx`).
2. Prefix the filename with `_` to exclude it from the sidebar automatically.
3. Run `yarn start` and navigate to the page manually to verify component behavior.

## Code Style Guidelines

### 1. Imports Order
1. React imports
2. External libraries (`lodash`, `clsx`, etc.)
3. Docusaurus/theme imports (`@docusaurus/...`, `@theme/...`)
4. Local components and modules
5. CSS module imports

```javascript
import React, { useState } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import StatBlock from '../StatBlock/StatBlock';
import styles from './Component.module.css';
```

### 2. React Components
See [src/components/AGENTS.md](file:///Users/sdelrio/github/sdelrio/golden-forest/src/components/AGENTS.md) for detailed architecture, folder structure, and component-specific guidelines.

- Use **function components** with React 19 hooks.
- Destructure props in the signature with defaults.
- Wrap browser-dependent logic in `BrowserOnly`.

### 3. Naming Conventions
- **Components**: PascalCase (e.g., `XmlChar.js`).
- **Directories**: PascalCase for multi-file components (e.g., `src/components/XmlChar/`).
- **Utility Files**: camelCase (e.g., `utils.js`).
- **CSS Modules**: camelCase for class names (e.g., `.statHeader`).
- **Constants**: UPPER_SNAKE_CASE.

### 4. CSS & Styling
- Use **CSS Modules** (`*.module.css`) for scoped styles.
- Leverage Docusaurus Infima CSS variables (e.g., `--ifm-color-primary`).
- Use `clsx()` for conditional classes.

### 5. Types & Documentation
- **No TypeScript**: Use JSDoc for type hints where clarity is needed.
- Documentation is written in **MDX** (Markdown + JSX).
- Mermaid diagrams are supported via `mermaid` code blocks.

### 6. Mermaid TreeView Dark Mode (Temporary Override)
TreeView-beta hardcodes `labelColor: 'black'` and `lineColor: 'black'` in `styles.ts`, ignoring Mermaid's `themeVariables`. CSS overrides with `!important` in `custom.css` adapt it to Docusaurus dark mode (needed because mermaid injects `<style>` inside SVG `<defs>`). **Pending review** when Mermaid upgrades or treeView leaves beta and inherits theme properly.

### 7. Mermaid `useMaxWidth` and Sizing
Mermaid diagrams default to `useMaxWidth: true` in their per-diagram config (e.g., `radar.useMaxWidth: true`). This caps the SVG at its internal resolution and prevents it from filling wider containers. To make a diagram scale to its container:
- Set `useMaxWidth: false` in `mermaid.initialize({ radar: { useMaxWidth: false, width: N, height: N } })`
- Apply CSS: `svg { width: 100% !important; height: auto !important; }` on the `.docusaurus-mermaid-container > svg` selector
- This pattern applies to `radar`, `xychart`, and any diagram type where the default 600px width is too narrow.

### 7. Error Handling
- Use React state to manage loading and error states for asynchronous data (like fetching XML).
- Provide meaningful fallbacks for missing assets or failed fetches.

### 8. Theme Transition Animation
The dark/light mode toggle uses the **View Transitions API** for a circular-mask reveal animation, implemented via a Docusaurus `clientModules` plugin (no component swizzle required).

- **JS**: `src/client/theme-transition.js` — intercepts clicks on the toggle button in the capturing phase, wraps the theme change in `document.startViewTransition()`. Falls back to instant toggle on unsupported browsers.
- **CSS**: `src/css/custom.css` — defines `::view-transition-old/new(root)` pseudo-elements with a `clip-path: circle()` reveal that expands from center to `150%`, plus the `--expo-out` timing function.
- **Config**: `clientModules` array in `docusaurus.config.js` registers the client module.
- **Why clientModules, not swizzle?** Avoids copying the full `ColorModeToggle` component from `@docusaurus/theme-classic`, so the project stays current with Docusaurus updates automatically.
- **Reference**: [rudrodip/theme-toggle-effect](https://github.com/rudrodip/theme-toggle-effect)

## Data & Project Structure
- **Content**: `docs/`, `blog/`, and `tutorial/` contain MDX files.
- **MCP Servers**: `docs/Develop-Code/AI-Development/MCPs/` contains articles about MCP server tools (e.g., `cve-mcp-server.md`).
- **Components**: `src/components/` (See [AGENTS.md](file:///Users/sdelrio/github/sdelrio/golden-forest/src/components/AGENTS.md)) and `src/theme/`.
- **Client Modules**: `src/client/` contains Docusaurus client modules that run on every page load (e.g., `theme-transition.js` for View Transitions API animation). **Important**: `clientModules` only dispatch lifecycle hooks (`onRouteDidUpdate`, etc.) — they do **not** auto-call a default export. Code that must run at page load (event listeners, global patches) must be written at **top level** of the module, not inside an exported function. Guard with `typeof document !== 'undefined'` for SSR safety.
- **Static Assets**: `static/fg/chars/` contains XML character data for the D&D tools.
- **Agent Memory**: `memory/` — Persistent memory for agents. Load `memory/MEMORY.md` every session for the index. Feature tracking, decisions, and project context live here. See [memory/MEMORY.md](memory/MEMORY.md).
- **Memory Job References**: When referencing jobs from `memory/MEMORY.md` in PR descriptions, commit messages, or comments, use the format `<number>.` (e.g., `9.`) — **never** `#<number>` (e.g., not `#9`). GitHub auto-links `#N` to issues/PRs, creating false references.
- **AI Dashboard**: Any new article under `docs/Develop-Code/AI-Development/` **must** also be added to `static/ai-dashboard/tools.json`. Run `task ai-dashboard:enrich` after adding the entry. See the schema in the existing entries for the required fields (`id`, `name`, `description`, `category`, `github`, `npm`, `pip`, `install`, `site`, `license`, `tags`, `supportedBy`, `docPath`).
- **Algolia Search**: See [ALGOLIA.md](file:///Users/sdelrio/github/sdelrio/golden-forest/ALGOLIA.md) for indexing configuration, record count analysis, and reduction strategies. Config: `.algolia.docsearch.json`.
- **Git**: Use **Conventional Commits** (`feat(scope): desc`, `fix: desc`, `docs: desc`).
- **PR Descriptions**: Do not wrap filenames or code in backticks inside bold markers — GitHub strips backticks inside `**`, leaving empty `****`. Use bold plain text filenames instead (e.g., `**.cursorrules**`, not `**`.cursorrules`**`).

## Character Index (`static/fg/chars/index.json`)
- Generated from `scripts/build-char-index.py` (scans all .xml in `static/fg/chars/`).
- Rebuild with: `task chars:buildindex`.
- Schema per entry: `{ filename, name, race, classes: string[], level: int|null }`.
- Consumed by `src/components/CharSearch/CharSearch.js`: responsive card grid (2 columns ≥520px, 1 column on mobile). Each card shows name + inline class+level+race via `.cardMeta` layout.

## Skill Invocation via Subagents

Skills that produce substantial output (articles, large code blocks) should be invoked via `task()` subagent, not `skill()` injection, to keep the main conversation context clean.

### write-article

When the user asks to write, update, or refactor an article under `/docs` or `/tutorial`:

1. **Invoke `task`** with `subagent_type="general"` and this prompt:

```
You are writing a Docusaurus MDX article for The Golden Forest digital garden.

STEPS:
1. Read the skill file at .agents/skills/write-article/SKILL.md — follow ALL its guidelines.
2. Read the 4 templates at .agents/skills/write-article/resources/templates/ for structure reference.
3. Determine the target folder under /docs/ based on content domain.
4. Draft and write the article to the appropriate location.
5. Run `task check` to validate MDX syntax. Fix any errors.

USER REQUEST: {user_request}

Return: file path written, number of sections, components imported, and any warnings.
```

2. **Do NOT use `skill(name="write-article")` directly** — it injects ~12KB into context.
3. For follow-up edits, invoke a new task with the file path and corrections.

## /job-prepare Workflow (Required Steps)
When executing `/job-prepare <number>`, complete ALL steps in order — do not skip any:
1. **Plan** — Research and present the implementation plan
2. **Branch** — `git checkout -b feat/<scope>` from master
3. **Implement** — Make the changes
4. **Test** — `task check` (MDX validation) and verify no regressions
5. **Commit** — `git commit -m "feat(scope): desc"`
6. **Review Gate** — STOP here and ask the user to review the diff before pushing. Do NOT proceed to push or PR without explicit user approval.
7. **Push** — `git push -u origin <branch>`
8. **PR** — `gh pr create` with title and body

Skipping steps (especially branch, test, commit, push, PR) violates the workflow.

## AI Rules Integration
- **Copilot**: `.github/copilot-instructions.md` designates this file as the source of truth.
- **Cursor**: `.cursorrules` — hybrid file with redirect to `AGENTS.md` + inline summary of key conventions.
- **Broken Links**: `onBrokenLinks: 'throw'` is enabled; always verify internal links.
- **Anchor Links**: Use relative sibling format for component links (e.g., `<Card href="my-page#section-id" />` or `href="my-page/sub-item/path/to/page"`). Example: `<Card href="DnD/XmlTest" />`. When linking from an index file (e.g., `index.mdx`), always include the folder name in the path.
- **Card href vs Markdown Links (Critical)**: With `trailingSlash: true`, `<Card href>` resolves relative to the **page URL**, not the file system. The Card component also auto-prepends `../` to relative hrefs (unless they already start with `../`). Markdown links with `.md`/`.mdx` extension resolve from the **file system** instead.
  - **Card hrefs**: Calculate the path from the page's URL, accounting for the auto-prepend. From `comparatives/page/`, a link to `Skills-and-Agents/tool` needs `../../Skills-and-Agents/tool` (two levels up to `AI-Development/`). Using `../` only goes up one level (to `comparatives/`).
  - **Markdown links** (`[text](path.md)`): Use file-system-relative paths. From `comparatives/page.md`, `../Tools/tool.md` correctly resolves to `AI-Development/Tools/tool.md`.
- **MDX Character Escaping (Critical)**: The `<` and `>` characters are reserved for JSX/MDX tags. When writing regular text that contains these characters (e.g., `<200ms`, `Array<string>`, `<div>`), you **MUST** escape them as HTML entities only if they are **outside** markdown code blocks (` ` or ` ``` `):
  - `<` → `&lt;`
  - `>` → `&gt;`


## Agent skills

### Issue tracker

Issues live in GitHub Issues (uses `gh` CLI). See `.agents/issue-tracker.md`.

### Triage labels

Default five-role vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `.agents/triage-labels.md`.

### Domain docs

Single-context layout at `.agents/` (CONTEXT.md + ADRs). See `.agents/domain.md`.
