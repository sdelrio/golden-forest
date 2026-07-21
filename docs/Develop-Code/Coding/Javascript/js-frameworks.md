# Javascript Frameworks

import BarChart from '@site/src/components/BarChart/BarChart';

## Common Frameworks

* **React**: The most popular library for building user interfaces, maintained by Meta. Huge ecosystem and community.
* **Vue.js**: A progressive framework that is approachable and versatile.
* **Angular**: A platform for building mobile and desktop web applications, maintained by Google.

## Next.js

Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

**2026 Updates (v16):** Partial Prerendering (PPR) is now GA — serves a static shell instantly then streams dynamic holes. Turbopack is the default bundler for both dev and production. The React Compiler handles automatic memoization (no more `useMemo`/`useCallback`). Server Actions provide RPC-style mutations from client to server.

* [NextJS HomePage](https://nextjs.org/)

## Vinext

Vinext (pronounced "vee-next") is a high-performance, drop-in replacement for Next.js built on **Vite** and **Rolldown**. It implements the core Next.js API surface (App/Pages router, RSC, Server Actions) but swaps the bespoke Turbopack/Webpack toolchain for the standardized Vite ecosystem.

*   **Creation**: Developed by Steve Faulkner (Cloudflare) in just one week using an "AI-first" approach (Claude), costing only ~$1,100 in tokens.
*   **Architecture**: Optimized for serverless/edge runtimes (Cloudflare Workers, etc.) without fragile adaptation layers.
*   **Performance**: Up to 4x faster builds and ~57% smaller bundle sizes compared to official Next.js.
*   [Vinext Announcement Blog](https://blog.cloudflare.com/vinext/)

## Remix

Remix took an unconventional path: what was planned as Remix v3 shipped as **React Router v7** in November 2024. If you're using React Router v7 with its framework features enabled, you're effectively using Remix. Meanwhile, the original Remix team is building **Remix 3** as a separate, experimental "batteries-included, bundler-free" framework.

**Philosophy:** Embrace the platform — forms use `<form>`, data loading uses loaders that run on the server, mutations use actions, caching uses HTTP cache headers. Progressive enhancement means core flows work without JavaScript.

* [Remix Homepage](https://remix.run/)
* [React Router v7 Docs](https://reactrouter.com/)

## Astro

Astro's story in 2026 is defined by one headline: **Cloudflare acquired Astro in January 2026**. This isn't just a funding round — it's a fundamental shift. Astro now has a direct line to Cloudflare's edge infrastructure, and the integration is already shipping.

### Islands Architecture

Astro's core innovation is radical simplicity: **ship zero JavaScript by default.** Every page is static HTML. When you need interactivity, you create an "island" — an isolated component that hydrates independently. You can control *when* it hydrates:

* `client:load` — Hydrate immediately on page load
* `client:idle` — Hydrate when the browser is idle
* `client:visible` — Hydrate when the component enters the viewport
* `client:media` — Hydrate when a CSS media query matches

### Framework Agnostic

Astro's most underrated feature: **you can use any UI framework inside Astro** — React, Vue, Svelte, Solid, Preact, Lit. You can even mix them on the same page. This makes it ideal for migration projects and mixed-framework teams.

* **Best for:** Blogs, documentation, marketing sites, e-commerce storefronts. Astro ships 2-10x less JavaScript than Next.js for content pages.
* **Cloudflare integration:** Astro v6 (beta) runs the dev server in the Cloudflare runtime, with first-class access to Durable Objects, R2, D1, and AI Workers.

* [Astro Homepage](https://astro.build/)

## Svelte

Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.

**Svelte 5 Runes:** Replaced the old `$:` syntax with explicit reactivity primitives (`$state`, `$derived`, `$props`) — more predictable, composable, and no hook rules or stale closure bugs.

* **No Virtual DOM**: Svelte compiles your code to tiny, framework-less vanilla JS -> faster apps.
* **Truly Reactive**: No complex state management libraries needed for simple things.
* [Svelte Homepage](https://svelte.dev/)

## SvelteKit

SvelteKit is the meta-framework for Svelte, consistently winning developer satisfaction surveys. It offers a development experience that makes React feel verbose.

**Architecture:** Nested routes with `+page.server.ts` load functions and `+page.svelte` rendering — similar to Remix's loader/action pattern but with Svelte's compiled output. The `use:enhance` directive enables progressive enhancement: forms work without JavaScript, but with JS it intercepts submissions for SPA-like navigation with automatic revalidation.

**Performance:** SvelteKit ships **50-70% less JavaScript** than React-based frameworks for equivalent functionality. A "Hello World" app is ~15KB vs ~85KB for Next.js.

* **Best for:** Startups, small-to-medium teams, performance-critical apps where DX matters.
* **Considerations:** Smaller ecosystem than React. Finding Svelte talent at scale is harder.

* [SvelteKit Homepage](https://kit.svelte.dev/)

## High Performance & Fastest

* **SolidJS**: A declarative, efficient, and flexible JavaScript library for building user interfaces. It uses a compiled approach similar to Svelte but with React-like syntax.
* **Qwik**: A framework that allows for instant loading of web applications, regardless of the size of the application or complexity.
* **Fastify**: (Backend) An efficient and low overhead web framework for Node.js.

## Lightweight / HTML-First Libraries

For projects that don't need a full SPA framework, these libraries add interactivity directly to HTML with minimal overhead.

### htmx

htmx extends HTML with AJAX, WebSockets, and Server-Sent Events — all via HTML attributes. No JavaScript required for common patterns like partial page updates, form submissions, and live content. Uses `XMLHttpRequest` under the hood.

```html
<button hx-get="/api/clicks" hx-target="#count" hx-swap="innerHTML">
  Click me
</button>
<div id="count">0</div>
```

* [htmx Homepage](https://htmx.org/)
* ~14KB min+gzip

### Alpine.js

Alpine.js brings declarative, inline reactivity to HTML using directives like `x-data`, `x-show`, `x-model`, and `x-on`. Think of it as a lighter Vue that lives directly in your markup. Great for sprinkling interactivity without a build step.

```html
<div x-data="{ count: 0 }">
  <button x-on:click="count++">Click me</button>
  <span x-text="count"></span>
</div>
```

* [Alpine.js Homepage](https://alpinejs.dev/)
* ~15KB min+gzip

### HMPL

HMPL is a server-oriented templating library that uses fetch-based `{{#request}}` blocks. Templates compile to JS functions that handle server communication declaratively — with built-in indicators, event triggers, and response rendering. A more powerful alternative to Alpine.js for server-driven UI.

```html
<div id="app"></div>
<script>
  const templateFn = hmpl.compile(`
    <div>
      <button id="btn">Click me</button>
      <div>{{#request src="/api/clicks" after="click:#btn"}}{{/request}}</div>
    </div>
  `);
  document.querySelector("#app").append(templateFn().response);
</script>
```

* [HMPL Homepage](https://hmpl-language.github.io/hmpl/)
* ~7KB min+gzip

### htmx vs Alpine.js vs HMPL

| Feature | htmx | Alpine.js | HMPL |
| :--- | :--- | :--- | :--- |
| **Approach** | HTML attributes | HTML directives | Compiled templates |
| **Rendering** | Server returns HTML fragments | Client-side reactivity | Server-driven via fetch |
| **JS Required** | No (progressive) | No (progressive) | Yes (compile step) |
| **HTTP Method** | XMLHttpRequest only | fetch or XMLHttpRequest | fetch only |
| **Bundle Size** | ~14KB | ~15KB | ~7KB |
| **Best For** | Server-rendered apps with partial updates | Lightweight client interactivity | Server-driven UI with complex request flows |

## Compile-time Optimizations

Tools and modes that shift work from runtime to build time, inspired by Svelte's approach.

* **React Compiler (React Forget)**: An automatic memoizing compiler for React that optimizes your app by memoizing values and components at build time.
* **Million.js**: An optimizing compiler for React that uses a block virtual DOM to make components up to 70% faster.
* **Vue Vapor Mode**: An opt-in performance mode for Vue that compiles templates to direct DOM manipulation code, bypassing the Virtual DOM.

## TypeScript

TypeScript is a strongly typed superset of JavaScript that provides a robust development experience through four key components:

* **Language**: Extends JavaScript syntax with type annotations.
* **Type Checker**: Performs static analysis to ensure type safety and catch errors during development.
* **Compiler**: Transforms TypeScript code into standard, executable JavaScript.
* **Language Services**: Powers IDE features like IntelliSense, autocompletion, and automated refactoring.

* [How TypeScript Won Over Developers and JavaScript Frameworks](https://thenewstack.io/how-typescript-won-over-developers-and-javascript-frameworks/)
* [TypeScript Homepage](https://www.typescriptlang.org/)

---

## Comparisons

### React Meta-Frameworks: Next.js vs Vinext vs Remix

| Feature | Next.js | Vinext | Remix (React Router v7) |
| :--- | :--- | :--- | :--- |
| **Toolchain** | Turbopack / Webpack | **Vite / Rolldown** | Any bundler |
| **Build Speed** | Baseline | **Up to 4x Faster** | Baseline |
| **Bundle Size** | Baseline | **~57% Smaller** | ~20% smaller than Next.js |
| **Rendering** | SSG, SSR, ISR, PPR, CSR | SSG, SSR, RSC | SSR only (loader/action) |
| **Ecosystem** | Vercel-centric | Vite Plugin Ecosystem | Web standards / HTTP |
| **Deployment** | Vercel Optimized | **Native Serverless/Edge** | Any Node host |
| **Maturity** | Battle-tested | Early stages / Bleeding edge | Stable (React Router v7) |
| **Progressive Enhancement** | Optional | Optional | **Default** |

### Bundle Size Comparison (min+gzip)

<BarChart
  title="JS Bundle Size — Hello World App (KB, min+gzip)"
  data={[
    { name: 'Next.js', value: 85 },
    { name: 'React', value: 85 },
    { name: 'Remix', value: 65 },
    { name: 'Angular', value: 65 },
    { name: 'Vue', value: 45 },
    { name: 'SvelteKit', value: 15 },
    { name: 'Alpine.js', value: 15 },
    { name: 'htmx', value: 14 },
    { name: 'HMPL', value: 7 },
    { name: 'Astro', value: 0 },
  ]}
  colorMap={{
    'Next.js': '#388e3c',
    'React': '#1976d2',
    'Remix': '#f57c00',
    'Angular': '#c62828',
    'Vue': '#00838f',
    'SvelteKit': '#7b1fa2',
    'Alpine.js': '#4e342e',
    'htmx': '#37474f',
    'HMPL': '#558b2f',
    'Astro': '#ffb300',
  }}
  yAxisLabel="Bundle Size (KB)"
  maxValue={100}
/>

### Lighthouse Performance Score (Content Page, Higher is Better)

<BarChart
  title="Lighthouse Score — Content Page"
  data={[
    { name: 'Astro', value: 99 },
    { name: 'SvelteKit', value: 96 },
    { name: 'htmx', value: 95 },
    { name: 'Remix', value: 94 },
    { name: 'HMPL', value: 94 },
    { name: 'Alpine.js', value: 93 },
    { name: 'Next.js', value: 90 },
  ]}
  colorMap={{
    'Next.js': '#388e3c',
    'React': '#1976d2',
    'Remix': '#f57c00',
    'Angular': '#c62828',
    'Vue': '#00838f',
    'SvelteKit': '#7b1fa2',
    'Alpine.js': '#4e342e',
    'htmx': '#37474f',
    'HMPL': '#558b2f',
    'Astro': '#ffb300',
  }}
  yAxisLabel="Score"
  maxValue={100}
/>

## Framework Decision Guide

| What are you building? | Recommended | Runner-up |
| :--- | :--- | :--- |
| **Content site** (blog, docs, marketing) | Astro | SvelteKit |
| **Full-stack SaaS app** | Next.js | SvelteKit |
| **Form-heavy CRUD app** (admin, dashboards) | Remix | Next.js |
| **Server-rendered app with partial updates** | htmx | HMPL |
| **Lightweight interactivity on existing HTML** | Alpine.js | htmx |
| **Server-driven UI with complex request flows** | HMPL | htmx |
| **Startup / small team** | SvelteKit | Remix |
| **Enterprise / large team** | Next.js | Remix |

## All Frameworks at a Glance

| Framework | Bundle Size (min+gzip) | Rendering | Learning Curve | Best For | Backing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **React** | ~45KB | Client-side | Moderate | UI library (any use) | Meta |
| **Vue.js** | ~45KB | Client-side | Easy | Progressive apps | Community |
| **Angular** | ~65KB | Client-side + SSR | Steep | Enterprise apps | Google |
| **Next.js** | ~85KB | SSG/SSR/ISR/PPR/CSR | Steep | Full-stack apps | Vercel |
| **Vinext** | ~35KB | SSG/SSR/RSC | Steep | Edge/serverless Next.js | Cloudflare |
| **Remix** | ~65KB | SSR (loader/action) | Moderate | Form-heavy CRUD | Shopify |
| **Astro** | ~0-15KB | SSG + Islands | Easy | Content sites | Cloudflare |
| **Svelte** | ~4KB | Compiled | Easy | UI library (any use) | Vercel |
| **SvelteKit** | ~15KB | SSG/SSR | Easy | Full-stack apps | Vercel |
| **SolidJS** | ~10KB | Compiled | Moderate | Performance-critical UI | Community |
| **Qwik** | ~10KB | Resumable | Moderate | Instant-loading apps | Google |
| **htmx** | ~14KB | Server HTML fragments | Easy | Server-rendered partial updates | Community |
| **Alpine.js** | ~15KB | Client-side directives | Easy | Lightweight interactivity | Community |
| **HMPL** | ~7KB | Server fetch templates | Easy | Server-driven UI | Community |

## References

- [Next.js vs Remix vs Astro vs SvelteKit in 2026: The Definitive Framework Decision Guide](https://dev.to/pockit_tools/nextjs-vs-remix-vs-astro-vs-sveltekit-in-2026-the-definitive-framework-decision-guide-lp5)
