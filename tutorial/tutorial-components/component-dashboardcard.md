---
sidebar_position: 4
title: DashboardCard Component
description: Learn how to use the DashboardCard component for clickable cards with accent colors, tags, and hover effects
---

# DashboardCard Component

The DashboardCard is a clickable button-based card with a header row, accent color border on hover, tag overflow, and a lift effect. It's designed for dashboard-style layouts where cards need to be interactive.

## Basic Usage

DashboardCard is not globally registered — you must import it:

```jsx
import DashboardCard from '@site/src/components/DashboardCard/DashboardCard';

<DashboardCard header="My Tool" onClick={() => alert('clicked!')}>
  A simple clickable card with a header.
</DashboardCard>
```

import DashboardCard from '@site/src/components/DashboardCard/DashboardCard';

<DashboardCard header="My Tool" onClick={() => alert('clicked!')}>
  A simple clickable card with a header.
</DashboardCard>

## Header and HeaderRight

Use `header` for left-aligned content and `headerRight` for a right-aligned badge or category:

```jsx
<DashboardCard
  header="MCP Server"
  headerRight={<span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '9999px', background: '#1976d2', color: '#fff' }}>Tool</span>}
>
  An MCP server for interacting with external APIs.
</DashboardCard>
```

<DashboardCard
  header="MCP Server"
  headerRight={<span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '9999px', background: '#1976d2', color: '#fff' }}>Tool</span>}
>
  An MCP server for interacting with external APIs.
</DashboardCard>

## Tags

The `tags` prop accepts an array of strings. Only the first 3 are shown; overflow displays a `+N` counter:

```jsx
<DashboardCard
  header="Framework"
  tags={['react', 'typescript', 'ssr', 'hydration', 'bundler']}
>
  A framework with many features.
</DashboardCard>
```

<DashboardCard
  header="Framework"
  tags={['react', 'typescript', 'ssr', 'hydration', 'bundler']}
>
  A framework with many features.
</DashboardCard>

## Accent Color

The `accentColor` prop sets the hover border color via a CSS custom property:

```jsx
<DashboardCard header="Green Accent" accentColor="#388e3c">
  This card highlights green on hover.
</DashboardCard>

<DashboardCard header="Purple Accent" accentColor="#7b1fa2">
  This card highlights purple on hover.
</DashboardCard>
```

<DashboardCard header="Green Accent" accentColor="#388e3c">
  This card highlights green on hover.
</DashboardCard>

<DashboardCard header="Purple Accent" accentColor="#7b1fa2">
  This card highlights purple on hover.
</DashboardCard>

## Complete Example

```jsx
<DashboardCard
  header="OpenSRE Agent"
  headerRight={<span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '9999px', background: '#f57c00', color: '#fff' }}>Workflow</span>}
  accentColor="#f57c00"
  tags={['sre', 'incident-response', 'runbook', 'automation']}
  onClick={() => window.open('/docs/Develop-Code/AI-Development/Workflows/opensre', '_blank')}
>
  An AI agent that follows SRE runbooks for incident response and remediation.
</DashboardCard>
```

<DashboardCard
  header="OpenSRE Agent"
  headerRight={<span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '9999px', background: '#f57c00', color: '#fff' }}>Workflow</span>}
  accentColor="#f57c00"
  tags={['sre', 'incident-response', 'runbook', 'automation']}
  onClick={() => window.open('/docs/Develop-Code/AI-Development/Workflows/opensre', '_blank')}
>
  An AI agent that follows SRE runbooks for incident response and remediation.
</DashboardCard>

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Card body content |
| `header` | `ReactNode` | — | Left-aligned header content |
| `headerRight` | `ReactNode` | — | Right-aligned content (e.g., category badge) |
| `tags` | `string[]` | — | Array of tag strings (max 3 shown, overflow shows `+N`) |
| `accentColor` | `string` | — | CSS color for hover border (sets `--card-accent`) |
| `onClick` | `function` | — | Click handler |
| `className` | `string` | — | Additional CSS classes |

## Styling

- **Renders as `<button>`**: Keyboard-accessible and focusable by default
- **Hover lift**: Cards translate up 2px on hover (`translateY(-2px)`)
- **Tag overflow**: Always shows at most 3 tags; remaining count appears as `+N`
- **Dark mode**: Background switches to `#1a1612`; heavier shadow on hover
- **Tags pushed to bottom**: `margin-top: auto` ensures tags sit at the bottom regardless of content height
