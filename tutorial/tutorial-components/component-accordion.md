---
sidebar_position: 5
title: Accordion Component
description: Learn how to use the Accordion component for expandable and collapsible content sections
---

# Accordion Component

The Accordion component displays expandable/collapsible content sections with animated transitions, optional icons, and a rotating chevron indicator.

## Basic Usage

Accordion and AccordionGroup are globally registered — no import needed:

```jsx
<Accordion title="Click to expand">
  This content is hidden by default and revealed when clicked.
</Accordion>
```

<Accordion title="Click to expand">
  This content is hidden by default and revealed when clicked.
</Accordion>

## Default Open

Use `defaultOpen` to start the accordion in the expanded state:

```jsx
<Accordion title="Open by default" defaultOpen={true}>
  This content is visible on page load.
</Accordion>
```

<Accordion title="Open by default" defaultOpen={true}>
  This content is visible on page load.
</Accordion>

## Icons

The `icon` prop adds an Iconify icon to the left of the title:

```jsx
<Accordion title="With Icon" icon="cog">
  This accordion has a gear icon in its header.
</Accordion>

<Accordion title="Rocket Launch" icon="rocket-launch">
  Launch sequences are documented here.
</Accordion>
```

<Accordion title="With Icon" icon="cog">
  This accordion has a gear icon in its header.
</Accordion>

<Accordion title="Rocket Launch" icon="rocket-launch">
  Launch sequences are documented here.
</Accordion>

## AccordionGroup

`AccordionGroup` wraps multiple accordions in a single bordered container with separators between them:

```jsx
<AccordionGroup>
  <Accordion title="First Section" icon="alpha-a-circle" defaultOpen={true}>
    Content for section A.
  </Accordion>
  <Accordion title="Second Section" icon="alpha-b-circle">
    Content for section B.
  </Accordion>
  <Accordion title="Third Section" icon="alpha-c-circle">
    Content for section C.
  </Accordion>
</AccordionGroup>
```

<AccordionGroup>
  <Accordion title="First Section" icon="alpha-a-circle" defaultOpen={true}>
    Content for section A.
  </Accordion>
  <Accordion title="Second Section" icon="alpha-b-circle">
    Content for section B.
  </Accordion>
  <Accordion title="Third Section" icon="alpha-c-circle">
    Content for section C.
  </Accordion>
</AccordionGroup>

## Props Reference

### `<Accordion>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Content revealed when open |
| `title` | `string` | — | Header text |
| `icon` | `string` | — | Iconify icon name (auto-prepends `mdi:`) |
| `defaultOpen` | `boolean` | `false` | Start in expanded state |

### `<AccordionGroup>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Accordion components to group |

## Styling

- **Animated expand/collapse**: Content uses `max-height` transition (0.3s cubic-bezier) with opacity fade
- **Chevron rotation**: The `mdi:chevron-down` icon rotates 180 degrees when open
- **Hover effects**: Border turns `--ifm-color-primary` with subtle box-shadow on hover
- **Dark mode**: Background switches to `--ifm-color-emphasis-100`; header hover uses `emphasis-200`
- **Accessibility**: Header button has `aria-expanded` attribute for screen readers
- **Group borders**: AccordionGroup removes individual borders and adds a single outer border with 12px radius
