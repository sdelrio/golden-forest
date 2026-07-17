# Architecture Choice: Docusaurus 3.x

**Date:** 2024 (approximate)
**Status:** Active
**Decision:** Use Docusaurus 3.x as the site framework

## Context
The Golden Forest is a digital garden — part documentation site, part D&D companion toolkit. Needed a framework that supports MDX content, React components, and static generation.

## Choice
Docusaurus 3.x with React 19, MDX, and CSS Modules.

## Rationale
- Native MDX support for embedding React components in Markdown
- Static site generation for performance
- Built-in versioning, sidebar generation, search integration
- React 19 for modern hooks and concurrent features
- CSS Modules for scoped styling without runtime overhead
- Strong ecosystem (Algolia, Mermaid, etc.)

## Alternatives Considered
- **Next.js:** Overkill for content-heavy site, SSR not needed
- **Astro:** Good for content, but React component ecosystem was priority
- **Hugo/Jekyll:** No React component support

## Implications
- Content lives in `docs/`, `blog/`, `tutorial/` as MDX
- Components must be registered in `src/theme/MDXComponents`
- Build output in `./build` (static HTML)
- `onBrokenLinks: 'throw'` enforces link integrity
