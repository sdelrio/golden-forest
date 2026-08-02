---
title: "JavaScript Components"
description: "Understanding JavaScript components — from vanilla patterns to Web Components and modern framework approaches."
last_updated: 2026-08-01
tags: [javascript, components, web-components, vanilla-js]
sidebar_position: 10
sidebar_label: "JS Components"
---

# JavaScript Components

JavaScript components are the fundamental building blocks of modern web development. A component encapsulates logic, markup, and styling into a reusable, self-contained unit. This article covers the evolution of JS components — from plain functions to Web Components and beyond.

:::tip
This article draws inspiration from [midudev's video on JavaScript components](https://x.com/midudev/status/2083192585795809457/video/1?s=52), which demonstrates how to build components from scratch using vanilla JavaScript.
:::

## What Is a Component?

At its core, a JavaScript component is any function or class that returns UI — whether that's a DOM element, an HTML string, or a virtual node. The key properties are:

- **Encapsulation**: Logic, template, and styles live together
- **Reusability**: Same component can be used multiple times with different data
- **Composition**: Components can contain other components
- **Independence**: Each component manages its own state and lifecycle

## Vanilla JavaScript Components

Before frameworks, developers built components using plain JavaScript. The pattern is straightforward: a function that creates and returns DOM elements.

```javascript
function Counter(initialValue = 0) {
  let count = initialValue;

  const container = document.createElement('div');
  container.className = 'counter';

  const display = document.createElement('span');
  display.textContent = count;

  const incrementBtn = document.createElement('button');
  incrementBtn.textContent = '+';
  incrementBtn.addEventListener('click', () => {
    count++;
    display.textContent = count;
  });

  container.append(display, incrementBtn);
  return container;
}

document.body.appendChild(Counter(10));
```

This pattern is still relevant today. Many lightweight libraries and tools use it internally.

## Template-Based Components

Another vanilla approach uses HTML template strings and event delegation:

```javascript
function UserCard({ name, role, avatar }) {
  const html = `
    <div class="user-card">
      <img src="${avatar}" alt="${name}" />
      <h3>${name}</h3>
      <span class="role">${role}</span>
    </div>
  `;

  const wrapper = document.createElement('template');
  wrapper.innerHTML = html;
  return wrapper.content.cloneNode(true);
}
```

:::warning
Template strings with user input are vulnerable to **XSS attacks**. Always sanitize dynamic content before inserting into HTML templates.
:::

## Web Components

[Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) are the browser-native standard for creating reusable components. They work across any framework — or no framework at all.

### Custom Elements

The Custom Elements API lets you define your own HTML elements:

```javascript
class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-flex; gap: 0.5rem; align-items: center; }
        button { padding: 0.25rem 0.75rem; cursor: pointer; }
      </style>
      <button id="dec">-</button>
      <span>${this.count}</span>
      <button id="inc">+</button>
    `;

    this.shadowRoot.getElementById('dec')
      .addEventListener('click', () => { this.count--; this.render(); });
    this.shadowRoot.getElementById('inc')
      .addEventListener('click', () => { this.count++; this.render(); });
  }
}

customElements.define('my-counter', MyCounter);
```

```html
<my-counter></my-counter>
```

### Shadow DOM

The Shadow DOM provides encapsulation for styles and markup. Styles defined inside a shadow root don't leak out, and external styles don't bleed in.

### HTML Templates

The `<template>` and `<slot>` elements allow defining reusable markup structures:

```html
<template id="card-template">
  <div class="card">
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
</template>
```

## Component Patterns Across Frameworks

| Pattern | Vanilla JS | React | Vue | Svelte |
| :--- | :--- | :--- | :--- | :--- |
| **State** | Manual variables | `useState` | `ref()` / `reactive()` | `$state` (Runes) |
| **Template** | DOM API / strings | JSX | `<template>` | `{#if}` / `{#each}` |
| **Styling** | CSS classes | CSS Modules / CSS-in-JS | `<style scoped>` | `<style>` (scoped) |
| **Lifecycle** | `connectedCallback` | `useEffect` | `onMounted` | `onMount` |

## React Components

React components are JavaScript functions that return JSX — a syntax extension that looks like HTML but compiles to `React.createElement()` calls.

### Function Components

The modern pattern uses plain functions with hooks:

```jsx
import { useState } from 'react';

function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="counter">
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

### Props

Props are read-only inputs passed from parent to child:

```jsx
function UserCard({ name, role, avatar }) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <span>{role}</span>
    </div>
  );
}

// Usage
<UserCard name="Ada" role="Engineer" avatar="/ada.png" />
```

### Side Effects

`useEffect` runs code after render — for subscriptions, API calls, or DOM mutations:

```jsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return <h2>{user.name}</h2>;
}
```

## When to Use What

- **Vanilla JS functions**: Simple UI helpers, no build step needed, maximum control
- **Web Components**: Design systems shared across frameworks, standards-based portability
- **Framework components** (React, Vue, Svelte): Complex app logic, rich ecosystem, team productivity

:::info
Web Components and framework components are **not mutually exclusive**. You can use Web Components inside React, Vue, or any other framework — they're just HTML elements.
:::

## Useful React Components

The React ecosystem offers a rich collection of component libraries. This section highlights some notable ones — starting with a newer entry.

### [mapcn](https://github.com/AnmolSaini16/mapcn) — Beautiful Map Components

**11.2k stars** · MIT License

Free, zero-config React components for interactive maps. Built on [MapLibre GL](https://maplibre.org/), styled with [Tailwind](https://tailwindcss.com/), and compatible with [shadcn/ui](https://ui.shadcn.com/).

```bash
npx mapcn@latest add basic-map
```

Features:
- 🎨 **Theme-aware** — adapts to light/dark mode automatically
- 🎯 **Zero config** — works out of the box with sensible defaults
- 📦 **shadcn/ui compatible** — same patterns and styling conventions
- 📍 **Markers & Popups** — rich marker system with popups, tooltips, and labels
- 🛤️ **Routes** — draw routes and paths on maps
- 🎮 **Controls** — zoom, compass, locate, and fullscreen controls

```jsx
import { BasicMap } from '@/components/ui/basic-map';

export default function App() {
  return (
    <BasicMap
      center={[-74.006, 40.7128]}
      zoom={12}
    />
  );
}
```

:::info
More components will be added here over time as the ecosystem evolves.
:::

## References

- [midudev — JavaScript Components (Video)](https://x.com/midudev/status/2083192585795809457/video/1?s=52)
- [MDN — Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- [MDN — Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [JavaScript Frameworks](../js-frameworks/)
- [mapcn — Beautiful React Map Components](https://github.com/AnmolSaini16/mapcn)
- [MapLibre GL](https://maplibre.org/)

### Component Libraries & Design Systems

- [shadcn/ui](https://ui.shadcn.com/) — Beautifully designed components built with Radix UI and Tailwind CSS
- [Radix UI](https://www.radix-ui.com/) — Unstyled, accessible components for building design systems
- [Headless UI](https://headlessui.com/) — Completely unstyled, fully accessible UI components (Tailwind Labs)
- [Ant Design](https://ant.design/) — Enterprise-class UI design language and React components
- [Material UI (MUI)](https://mui.com/) — React components that implement Google's Material Design
- [Chakra UI](https://www.chakra-ui.com/) — Simple, modular, accessible component library for React
- [NextUI](https://nextui.org/) — Beautiful, fast, and modern React UI library
- [Mantine](https://mantine.dev/) — React components and hooks library with native dark theme support
- [Park UI](https://park-ui.com/) — Beautifully designed components built with Ark UI and Panda CSS
- [Ark UI](https://ark-ui.com/) — Unstyled, accessible, open-source UI components for React, Vue, and Solid
