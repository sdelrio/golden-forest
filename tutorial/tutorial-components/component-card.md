---
sidebar_position: 3
title: Card Component
description: Learn how to use the Card component for linkable content blocks, grid layouts, and structured card sections
---

# Card Component

The Card component displays content in a styled container with optional icon, title, and link behavior. It comes with sub-components for building structured cards with headers, bodies, footers, and images.

## Basic Usage

Card and its sub-components are globally registered — no import needed:

```jsx
<Card title="My Card" icon="book">
  This is a simple card with a title and icon.
</Card>
```

<Card title="My Card" icon="book">
  This is a simple card with a title and icon.
</Card>

## Link vs Div

When `href` is provided, the card renders as a clickable Docusaurus `<Link>`. Without `href`, it renders as a plain `<div>`:

```jsx
<Card title="Clickable Card" icon="rocket" href="/tutorial/tutorial/tutorial-components/">
  This card is a link — click it to navigate.
</Card>

<Card title="Static Card" icon="information">
  This card is just a styled div — no link behavior.
</Card>
```

<Card title="Clickable Card" icon="rocket" href="/tutorial/tutorial/tutorial-components/">
  This card is a link — click it to navigate.
</Card>

<Card title="Static Card" icon="information">
  This card is just a styled div — no link behavior.
</Card>

## Icons

The `icon` prop accepts Iconify icon names. If no namespace is provided, `mdi:` is auto-prepended:

```jsx
<Card title="Short Format" icon="check" />
<Card title="Full Format" icon="mdi:alert-circle" />
```

## Shadow

Use the `shadow` prop with Infima shadow modifiers:

```jsx
<Card title="Shadow Small" shadow="sm">Small shadow</Card>
<Card title="Shadow Medium" shadow="md">Medium shadow</Card>
<Card title="Shadow Large" shadow="lg">Large shadow</Card>
```

## CardGroup

`CardGroup` lays out cards in a responsive grid using Docusaurus Infima columns:

```jsx
<CardGroup cols={2}>
  <Card title="First" icon="alpha-a-circle">Column 1</Card>
  <Card title="Second" icon="alpha-b-circle">Column 2</Card>
</CardGroup>
```

<CardGroup cols={2}>
  <Card title="First" icon="alpha-a-circle">Column 1</Card>
  <Card title="Second" icon="alpha-b-circle">Column 2</Card>
</CardGroup>

### Three Columns

```jsx
<CardGroup cols={3}>
  <Card title="One" icon="numeric-1-circle">Item 1</Card>
  <Card title="Two" icon="numeric-2-circle">Item 2</Card>
  <Card title="Three" icon="numeric-3-circle">Item 3</Card>
</CardGroup>
```

<CardGroup cols={3}>
  <Card title="One" icon="numeric-1-circle">Item 1</Card>
  <Card title="Two" icon="numeric-2-circle">Item 2</Card>
  <Card title="Three" icon="numeric-3-circle">Item 3</Card>
</CardGroup>

## Sub-Components

For more structured cards, use `CardHeader`, `CardBody`, `CardFooter`, and `CardImage` inside a Docusaurus `card` wrapper:

```jsx
<div className="card">
  <CardImage src="https://placehold.co/600x300" alt="Placeholder image" />
  <CardHeader icon="code-tags">Section Title</CardHeader>
  <CardBody>
    This is the body content. It can contain any markdown or JSX.
  </CardBody>
  <CardFooter>
    <a href="#">Read more</a>
  </CardFooter>
</div>
```

<div className="card">
  <CardImage src="https://placehold.co/600x300" alt="Placeholder image" />
  <CardHeader icon="code-tags">Section Title</CardHeader>
  <CardBody>
    This is the body content. It can contain any markdown or JSX.
  </CardBody>
  <CardFooter>
    <a href="#">Read more</a>
  </CardFooter>
</div>

## Props Reference

### `<Card>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Card content |
| `title` | `string` | — | Optional heading text in an `<h3>` |
| `icon` | `string` | — | Iconify icon name (auto-prepends `mdi:`) |
| `href` | `string` | — | Link URL. Renders as `<Link>` when provided, `<div>` otherwise |
| `shadow` | `string` | — | Infima shadow modifier (`sm`, `md`, `lg`) |
| `className` | `string` | — | Additional CSS classes |

### `<CardGroup>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Card elements to lay out |
| `cols` | `number` | `2` | Columns: `2` = 50% each, any other = 33% each |
| `className` | `string` | — | Additional CSS classes |

### `<CardHeader>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Header text |
| `icon` | `string` | — | Iconify icon name |
| `className` | `string` | — | Additional CSS classes |

### `<CardBody>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Body content |
| `className` | `string` | — | Additional CSS classes |

### `<CardFooter>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Footer content |
| `className` | `string` | — | Additional CSS classes |

### `<CardImage>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | — | Image URL |
| `alt` | `string` | `''` | Alt text (also used as title) |
| `className` | `string` | — | Additional CSS classes |

## Styling

- **Hover effects**: Border color transitions to `--ifm-color-primary` with a subtle box-shadow on hover
- **Dark mode**: Hover uses `--ifm-color-primary-light` and a lighter shadow
- **Transitions**: Border and shadow animate at 0.1s ease
- **CardGroup layout**: Uses Infima grid classes (`row`, `col`, `col--6`/`col--4`) for responsive columns
