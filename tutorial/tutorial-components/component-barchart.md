---
sidebar_position: 6
title: BarChart Component
description: Learn how to use the BarChart component for Recharts-based bar charts with per-bar coloring and dark mode
---

# BarChart Component

The BarChart component renders a responsive bar chart using Recharts, with per-bar coloring, dark mode support, tooltips, and a legend. It's wrapped in `BrowserOnly` for SSR safety.

## Basic Usage

BarChart is not globally registered — you must import it:

```jsx
import BarChart from '@site/src/components/BarChart/BarChart';

<BarChart
  title="Simple Chart"
  data={[
    { name: 'Apples', value: 30 },
    { name: 'Oranges', value: 50 },
    { name: 'Bananas', value: 20 },
  ]}
/>
```

import BarChart from '@site/src/components/BarChart/BarChart';

<BarChart
  title="Simple Chart"
  data={[
    { name: 'Apples', value: 30 },
    { name: 'Oranges', value: 50 },
    { name: 'Bananas', value: 20 },
  ]}
/>

## Per-Bar Coloring with colorMap

Use `colorMap` to assign specific colors to each bar by name. This ensures consistent colors across multiple chart instances:

```jsx
<BarChart
  title="Framework Bundle Size"
  data={[
    { name: 'Next.js', value: 85 },
    { name: 'SvelteKit', value: 15 },
    { name: 'Astro', value: 10 },
    { name: 'Nuxt', value: 65 },
  ]}
  colorMap={{
    'Next.js': '#388e3c',
    'SvelteKit': '#ff3e00',
    'Astro': '#ff5d01',
    'Nuxt': '#00dc82',
  }}
  yAxisLabel="KB"
  maxValue={100}
/>
```

<BarChart
  title="Framework Bundle Size"
  data={[
    { name: 'Next.js', value: 85 },
    { name: 'SvelteKit', value: 15 },
    { name: 'Astro', value: 10 },
    { name: 'Nuxt', value: 65 },
  ]}
  colorMap={{
    'Next.js': '#388e3c',
    'SvelteKit': '#ff3e00',
    'Astro': '#ff5d01',
    'Nuxt': '#00dc82',
  }}
  yAxisLabel="KB"
  maxValue={100}
/>

## Y-Axis Label

The `yAxisLabel` prop adds a rotated label on the left side of the chart:

```jsx
<BarChart
  title="Performance Score"
  data={[
    { name: 'Chrome', value: 92 },
    { name: 'Firefox', value: 88 },
    { name: 'Safari', value: 95 },
  ]}
  yAxisLabel="Score"
  maxValue={100}
/>
```

<BarChart
  title="Performance Score"
  data={[
    { name: 'Chrome', value: 92 },
    { name: 'Firefox', value: 88 },
    { name: 'Safari', value: 95 },
  ]}
  yAxisLabel="Score"
  maxValue={100}
/>

## Max Value

Set `maxValue` to control the Y-axis domain. Without it, Recharts auto-scales:

```jsx
<BarChart
  title="Auto-Scaled"
  data={[
    { name: 'Small', value: 5 },
    { name: 'Medium', value: 25 },
    { name: 'Large', value: 50 },
  ]}
/>

<BarChart
  title="Fixed Max (100)"
  data={[
    { name: 'Small', value: 5 },
    { name: 'Medium', value: 25 },
    { name: 'Large', value: 50 },
  ]}
  maxValue={100}
/>
```

<BarChart
  title="Auto-Scaled"
  data={[
    { name: 'Small', value: 5 },
    { name: 'Medium', value: 25 },
    { name: 'Large', value: 50 },
  ]}
/>

<BarChart
  title="Fixed Max (100)"
  data={[
    { name: 'Small', value: 5 },
    { name: 'Medium', value: 25 },
    { name: 'Large', value: 50 },
  ]}
  maxValue={100}
/>

## Custom Colors Palette

The `colors` prop overrides the default color palette. Colors are applied by index when `colorMap` has no match:

```jsx
<BarChart
  title="Custom Palette"
  data={[
    { name: 'A', value: 40 },
    { name: 'B', value: 60 },
    { name: 'C', value: 30 },
    { name: 'D', value: 50 },
  ]}
  colors={['#e91e63', '#9c27b0', '#3f51b5', '#00bcd4']}
/>
```

<BarChart
  title="Custom Palette"
  data={[
    { name: 'A', value: 40 },
    { name: 'B', value: 60 },
    { name: 'C', value: 30 },
    { name: 'D', value: 50 },
  ]}
  colors={['#e91e63', '#9c27b0', '#3f51b5', '#00bcd4']}
/>

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Optional heading above the chart |
| `data` | `Array<{ name: string, value: number }>` | — | Chart data points |
| `colorMap` | `Record<string, string>` | — | Maps `name` keys to hex colors for consistent per-bar coloring |
| `yAxisLabel` | `string` | — | Rotated label on the Y-axis |
| `maxValue` | `number` | `'auto'` | Y-axis domain maximum |
| `colors` | `string[]` | `DEFAULT_COLORS` | Fallback color palette when `colorMap` has no match |

## Styling

- **Responsive**: Uses Recharts `ResponsiveContainer` for fluid width
- **Dark mode**: Automatically detects theme via `useColorMode()` — grid, axes, tooltips, and cursor all switch palettes
- **Bar styling**: `fillOpacity={0.85}` with rounded top corners (`radius={[4, 4, 0, 0]}`)
- **X-axis labels**: Rotated -45 degrees to prevent overlap
- **SSR safe**: Wrapped in `BrowserOnly` — falls back to "Loading chart..." during server rendering
- **Consistent colors**: Pass the same `colorMap` keys across multiple `<BarChart>` instances so each category always renders the same color
