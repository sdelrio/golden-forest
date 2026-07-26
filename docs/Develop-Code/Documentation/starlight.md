---
title: "Starlight"
description: "Documentation framework built on Astro — fast, accessible, and easy to extend with any UI framework."
tags: [development, tools, documentation, astro]
sidebar_position: 20
sidebar_label: "Starlight"
---

import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

# Starlight

Starlight is a documentation website framework built on top of [Astro](https://astro.build/). It provides everything you need to build a stellar documentation site: navigation, search, internationalization, SEO, readable typography, code highlighting, dark mode, and more — all out of the box.

Starlight combines speed (via Astro), built-in SEO and accessibility, a built-in search engine, and support for Markdown, MDX, and multiple languages.

## Key Features & Advantages

- **Astro-powered**: Leverages Astro's partial hydration and islands architecture for blazing-fast page loads.
- **Zero-config SEO & Accessibility**: Includes meta tags, Open Graph, sitemaps, and WCAG-compliant markup by default.
- **Built-in Search**: Powered by Pagefind — no external service required.
- **Markdown, Markdoc & MDX**: Write content in your preferred format with TypeScript-validated frontmatter.
- **UI Framework Agnostic**: Extend with React, Vue, Svelte, Solid, or any Astro-compatible component library.
- **Internationalization**: Multi-language routing built in.
- **Dark Mode**: Automatic theme switching with user preference toggle.

:::info
Starlight has **9k+ GitHub stars** and is used by teams at StackBlitz, WPEngine, and many open-source projects. Its design focuses on developer experience so you can concentrate on writing content, not configuring tooling.
:::

## Installation & Setup

<Steps>
  <Step title="Create a new Astro project">
    ```bash
    npm create astro@latest my-docs
    ```
  </Step>
  <Step title="Add the Starlight integration">
    ```bash
    npx astro add starlight
    ```
  </Step>
  <Step title="Configure your site">
    Edit `astro.config.mjs` to set the title, logo, and sidebar:
    ```javascript
    import { defineConfig } from 'astro/config';
    import starlight from '@astrojs/starlight';

    export default defineConfig({
      integrations: [
        starlight({
          title: 'My Docs',
          sidebar: [
            { label: 'Guide', items: [{ label: 'Introduction', slug: 'guide/intro' }] },
          ],
        }),
      ],
    });
    ```
  </Step>
  <Step title="Add content">
    Create Markdown or MDX files in the `src/content/docs/` directory.
  </Step>
</Steps>

## Extensibility

Because Starlight is built on Astro, you can pull in any Astro integration or UI component library alongside it. Need a reactive widget? Drop in a React, Vue, or Svelte component. Need an analytics script? Add it to your layout. The documentation site is a full Astro project, not a walled garden.

## Comparison with Docusaurus

| Feature | Starlight | Docusaurus |
| :--- | :--- | :--- |
| **Base Framework** | Astro (islands architecture) | React (full hydration) |
| **Default Bundle Size** | Smaller — ships zero JS by default | Larger — React runtime included |
| **Content Formats** | Markdown, Markdoc, MDX | Markdown, MDX |
| **UI Extensibility** | Any Astro-compatible framework (React, Vue, Svelte, Solid) | React components only |
| **Search** | Built-in (Pagefind) | Algolia DocSearch or local search plugins |
| **i18n** | Built-in routing | Built-in with `i18n/` directory |
| **Theming** | CSS custom properties, easy dark mode | CSS variables, Infima design system |
| **Community & Ecosystem** | Growing fast (9k stars) | Mature (large ecosystem, many plugins) |
| **Learning Curve** | Low if you know Astro | Low if you know React |
| **Best For** | New docs sites, performance-critical docs, multi-framework teams | Existing React projects, large-scale documentation with complex sidebars |

:::tip
Choose **Starlight** if you're starting fresh and want the lightest possible docs site with maximum flexibility. Choose **Docusaurus** if you're already invested in React or need its mature plugin ecosystem and proven scale.
:::

## References

- [Official Documentation](https://starlight.astro.build/)
- [GitHub Repository](https://github.com/withastro/starlight)
- [Astro Framework](https://astro.build/)
- [Midudev's Overview (Spanish)](https://x.com/midudev/status/2074873802354217387)
