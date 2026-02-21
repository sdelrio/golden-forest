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
make build          # Production build with SSG warnings suppressed
```

### Component Testing

```bash
make xmlchar-test   # Create XmlChar test page from _XmlTest.mdx template
```

**Note**: No unit test framework is configured. Test components by creating MDX test pages in `docs/`.

## Project Structure

```
src/
  components/       # React components (e.g., HomepageFeatures, StatBlock, XmlChar)
    ComponentName/  # Multi-file components use subdirectories
      ComponentName.js
      ComponentName.module.css
      utils.js
      assets/       # Component-specific static files
  css/              # Global styles (custom.css)
  pages/            # Docusaurus pages (index.js, etc.)
  theme/            # Docusaurus theme overrides (Root.js)
docs/               # Main documentation content (MDX files)
tutorial/           # Tutorial documentation section
blog/               # Blog posts in Markdown/MDX
static/             # Static assets (images, fonts)
  fg/               # Fantasy Grounds data (XML character files)
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

```javascript
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { merge, startCase } from 'lodash';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './Component.module.css';
import { helperFunction } from './utils';
```

### React Components

- Use **function components** with hooks (no class components)
- Destructure props in function signature with defaults
- Use `export default` for main component, named exports for utilities
- Wrap browser-dependent components in `BrowserOnly`

```javascript
export default function Component({ filename, display = 'medium', image }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    // ...
}

// For browser-only components:
export default function BrowserComponent(props) {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => <InternalComponent {...props} />}
        </BrowserOnly>
    );
}
```

### CSS Styling

- Use **CSS Modules** (`*.module.css`) for component-scoped styles
- Global styles go in `src/css/custom.css`
- Leverage Docusaurus Infima CSS variables for theming
- Use `clsx()` utility for conditional class names

```javascript
<div className={clsx(styles.container, isSmall && styles.small)}>
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `HomepageFeatures.js`, `StatBlock.js` |
| Multi-file components | Subdirectory | `src/components/XmlChar/XmlChar.js` |
| Utility files | camelCase | `utils.js`, `XmlParser.js` |
| CSS modules | camelCase classes | `styles.featureSvg` |
| Constants | UPPER_SNAKE_CASE | `FeatureList` |
| Helper functions | camelCase | `signed()`, `getStatModifier()` |

### JavaScript Style

- Use ES modules (`import`/`export`)
- Use `const` for constants, `let` for reassignable variables
- Prefer arrow functions for callbacks
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- No TypeScript - use JSDoc comments for type hints in config files

### Error Handling

- Use state for error management in components
- Provide meaningful error messages
- Use fallbacks for missing data/images

```javascript
const [error, setError] = useState(null);

useEffect(() => {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`File not found: ${filename}`);
            return response.text();
        })
        .catch(err => {
            console.error(err);
            setError(err.message);
        });
}, [filename]);

if (error) return <div className={styles.error}>Error: {error}</div>;
```

### Utility Functions

- Export individual functions, not objects
- Include type checking for robustness

```javascript
export function signed(number) {
    if (typeof number !== 'number') return number;
    return number >= 0 ? `+${number}` : `${number}`;
}
```

## Markdown/MDX Guidelines

- Documentation uses MDX (Markdown + JSX)
- Frontmatter supported in blog posts
- Mermaid diagrams enabled in code blocks
- KaTeX math equations supported
- Test pages use `_` prefix (e.g., `_XmlTest.mdx`) to hide from sidebar

## Git Guidelines

Use **Conventional Commits** format:

```
<type>(<scope>): <description>
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Examples**:
```
feat(XmlChar): add compact abilities display for small mode
fix: resolve parallax scroll issue on homepage
docs: update deployment instructions
```

## CI/CD Notes

- PR previews deployed to `/pr-preview/pr-{number}`
- Build uses `DOCUSAURUS_IGNORE_SSG_WARNINGS=true`
- Node modules cached by `yarn.lock` hash
- `onBrokenLinks: 'throw'` enforces valid internal links
