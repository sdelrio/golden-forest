# AGENTS.md - AI Coding Agent Guidelines

This document provides guidelines for AI coding agents working on The Golden Forest codebase.

## Project Overview

- **Name**: The Golden Forest (lorien.cloud)
- **Type**: Docusaurus 3.x static documentation site / digital garden
- **Stack**: React 19, JavaScript (ES modules), CSS Modules, MDX
- **Package Manager**: Yarn
- **Node Requirement**: >=18.0 (CI uses Node 23.x)
- **Deployment**: GitHub Pages

## Build/Lint/Test Commands

### Development

```bash
yarn start          # Start dev server with hot reload
yarn build          # Production build to ./build
yarn serve          # Serve built site locally
yarn clear          # Clear Docusaurus cache
make start          # Install deps (if needed) + start dev server
```

### Deployment

```bash
yarn deploy         # Deploy to GitHub Pages
make deploy         # Deploy with GIT_USER and SSH
```

### Quality Checks

```bash
make check          # Run Docusaurus MDX checker (useful for migrations)
make test           # Run unlighthouse web performance test
```

**Note**: No unit test framework is currently configured. There are no single test commands.

## Project Structure

```
src/
  components/       # React components (e.g., HomepageFeatures, StatBlock)
  css/              # Global styles and CSS modules
  pages/            # Docusaurus pages (index.js, etc.)
  theme/            # Docusaurus theme overrides (Root.js)
docs/               # Main documentation content (MDX files)
tutorial/           # Tutorial documentation section
blog/               # Blog posts in Markdown/MDX
static/             # Static assets (images, fonts)
docusaurus.config.js # Main Docusaurus configuration
sidebars.js         # Sidebar configuration
```

## Code Style Guidelines

### Imports Order

1. React imports
2. External libraries (lodash, clsx, etc.)
3. Docusaurus/theme imports
4. Local components and modules
5. CSS module imports

Example:
```javascript
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
```

### React Components

- Use **function components** with hooks (no class components)
- Destructure props in function signature
- Use `export default` for page components
- Use named exports for reusable components and utilities
- Keep components focused and single-purpose

Example:
```javascript
function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      {/* ... */}
    </div>
  );
}

export default function HomepageFeatures() {
  return <ThreePhrases />;
}
```

### CSS Styling

- Use **CSS Modules** (`*.module.css`) for component-scoped styles
- Global styles go in `src/css/custom.css`
- Leverage Docusaurus Infima CSS variables for theming
- Use `clsx()` utility for conditional class names

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `HomepageFeatures.js`, `StatBlock.js` |
| Utility files | camelCase | `utils.js`, `XmlParser.js` |
| CSS modules | camelCase classes | `styles.featureSvg` |
| Constants | UPPER_SNAKE_CASE | `FeatureList` |

### JavaScript Style

- Use ES modules (`import`/`export`)
- Use `const` for constants, `let` for reassignable variables
- Prefer arrow functions for callbacks
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- No TypeScript - use JSDoc comments for type hints in config files

## Markdown/MDX Guidelines

- Documentation uses MDX (Markdown + JSX)
- Frontmatter supported in blog posts
- Mermaid diagrams enabled in code blocks
- KaTeX math equations supported

## Git Guidelines

Use **Conventional Commits** format:

```
<type>(<scope>): <description>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding/updating tests
- `chore`: Maintenance tasks

**Examples**:
```
feat: add new DnD character sheet component
fix: resolve parallax scroll issue on homepage
docs: update deployment instructions
chore: upgrade Docusaurus to 3.9
```

## CI/CD Notes

- PR previews deployed to `/pr-preview/pr-{number}`
- Build uses `DOCUSAURUS_IGNORE_SSG_WARNINGS=true`
- Node modules cached by `yarn.lock` hash
