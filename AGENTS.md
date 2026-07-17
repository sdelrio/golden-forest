# AGENTS.md - AI Coding Agent Guidelines

This document provides guidelines for AI coding agents working on **The Golden Forest** (lorien.cloud), a Docusaurus 3.x digital garden built with React 19, MDX, and CSS Modules.

## Build/Lint/Test Commands

### Core Operations
- `yarn start` or `make start`: Start development server.
- `yarn build` or `make build`: Production build (to `./build`).
- `yarn clear`: Clear Docusaurus cache if experiencing build issues.

### Quality Checks
- `make check`: Run Docusaurus MDX checker (crucial for verifying MDX syntax).
- `make test`: Run `unlighthouse` web performance test.

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
- **Algolia Search**: See [ALGOLIA.md](file:///Users/sdelrio/github/sdelrio/golden-forest/ALGOLIA.md) for indexing configuration, record count analysis, and reduction strategies. Config: `.algolia.docsearch.json`.
- **Git**: Use **Conventional Commits** (`feat(scope): desc`, `fix: desc`, `docs: desc`).
- **PR Descriptions**: Do not wrap filenames or code in backticks inside bold markers — GitHub strips backticks inside `**`, leaving empty `****`. Use plain text filenames instead.

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
5. Run `make check` to validate MDX syntax. Fix any errors.

USER REQUEST: {user_request}

Return: file path written, number of sections, components imported, and any warnings.
```

2. **Do NOT use `skill(name="write-article")` directly** — it injects ~12KB into context.
3. For follow-up edits, invoke a new task with the file path and corrections.

## /job-prepare Workflow (Required Steps)
When executing `/job-prepare <#>`, complete ALL steps in order — do not skip any:
1. **Plan** — Research and present the implementation plan
2. **Branch** — `git checkout -b feat/<scope>` from master
3. **Implement** — Make the changes
4. **Test** — `make check` (MDX validation) and verify no regressions
5. **Commit** — `git commit -m "feat(scope): desc"`
6. **Push** — `git push -u origin <branch>`
7. **PR** — `gh pr create` with title and body

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
