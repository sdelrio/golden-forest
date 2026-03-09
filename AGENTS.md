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
- Use **function components** with hooks (React 19).
- Destructure props in the function signature with defaults.
- Wrap browser-dependent logic (e.g., `DOMParser`, `window`) in `BrowserOnly`.
- Use `export default` for the primary component.

```javascript
export default function CharacterCard({ name, level = 1 }) {
  const [active, setActive] = useState(false);
  return <div className={styles.card}>{name} ({level})</div>;
}
```

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

### 6. Error Handling
- Use React state to manage loading and error states for asynchronous data (like fetching XML).
- Provide meaningful fallbacks for missing assets or failed fetches.

## Data & Project Structure
- **Content**: `docs/`, `blog/`, and `tutorial/` contain MDX files.
- **Components**: `src/components/` (Shared) and `src/theme/` (Overrides).
- **Static Assets**: `static/fg/chars/` contains XML character data for the D&D tools.
- **Git**: Use **Conventional Commits** (`feat(scope): desc`, `fix: desc`, `docs: desc`).

## AI Rules Integration
- **Copilot**: `.github/copilot-instructions.md` designates this file as the source of truth.
- **Cursor**: Adhere to this file's formatting and style patterns when generating code.
- **Broken Links**: `onBrokenLinks: 'throw'` is enabled; always verify internal links.
