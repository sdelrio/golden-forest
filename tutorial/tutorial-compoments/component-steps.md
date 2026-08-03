---
sidebar_position: 2
title: Steps Component
description: Learn how to use the Steps component for sequential workflows and tutorials
---

# Steps Component

The Steps component displays a sequential workflow with numbered indicators, titles, and content. It's perfect for tutorials, installation guides, and step-by-step instructions.

## Basic Usage

Import the component in your MDX file:

```jsx
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';
```

### Simple Example

```jsx
<Steps>
  <Step title="Step 1">
    This is the first step with default styling.
  </Step>
  <Step title="Step 2">
    This is the second step.
  </Step>
  <Step title="Step 3">
    This is the third step.
  </Step>
</Steps>
```

<Steps>
  <Step title="Step 1">
    This is the first step with default styling.
  </Step>
  <Step title="Step 2">
    This is the second step.
  </Step>
  <Step title="Step 3">
    This is the third step.
  </Step>
</Steps>

## Step States

The `status` prop controls the visual state of each step.

### Completed Steps

Use `status="completed"` to show a green indicator with a checkmark icon:

```jsx
<Steps>
  <Step title="Install Dependencies" status="completed">
    Run `npm install` to install all required packages.
  </Step>
  <Step title="Configure Environment" status="completed">
    Set up your `.env` file with the necessary variables.
  </Step>
  <Step title="Run Application" status="current">
    Start the development server with `npm start`.
  </Step>
</Steps>
```

<Steps>
  <Step title="Install Dependencies" status="completed">
    Run `npm install` to install all required packages.
  </Step>
  <Step title="Configure Environment" status="completed">
    Set up your `.env` file with the necessary variables.
  </Step>
  <Step title="Run Application" status="current">
    Start the development server with `npm start`.
  </Step>
</Steps>

### Error Steps

Use `status="error"` to show a red indicator with an alert icon:

```jsx
<Steps>
  <Step title="Build Project" status="completed">
    Compile the source code.
  </Step>
  <Step title="Run Tests" status="error">
    Test execution failed due to missing dependencies.
  </Step>
  <Step title="Deploy" status="current">
    Waiting for test fixes before deployment.
  </Step>
</Steps>
```

<Steps>
  <Step title="Build Project" status="completed">
    Compile the source code.
  </Step>
  <Step title="Run Tests" status="error">
    Test execution failed due to missing dependencies.
  </Step>
  <Step title="Deploy" status="current">
    Waiting for test fixes before deployment.
  </Step>
</Steps>

### Current Step

Use `status="current"` to highlight the active step with a pulsing ring animation:

```jsx
<Steps>
  <Step title="Completed Task" status="completed">
    This task is done.
  </Step>
  <Step title="Active Task" status="current">
    This is what you're working on now.
  </Step>
  <Step title="Upcoming Task" status="">
    This task is pending.
  </Step>
</Steps>
```

<Steps>
  <Step title="Completed Task" status="completed">
    This task is done.
  </Step>
  <Step title="Active Task" status="current">
    This is what you're working on now.
  </Step>
  <Step title="Upcoming Task" status="">
    This task is pending.
  </Step>
</Steps>

## Custom Icons

The `icon` prop lets you override the default number or status icon with any Material Design Icon:

```jsx
<Steps>
  <Step title="GitHub" icon="github">
    Clone the repository from GitHub.
  </Step>
  <Step title="Terminal" icon="console">
    Open your terminal application.
  </Step>
  <Step title="Rocket" icon="rocket-launch">
    Launch the application.
  </Step>
</Steps>
```

<Steps>
  <Step title="GitHub" icon="github">
    Clone the repository from GitHub.
  </Step>
  <Step title="Terminal" icon="console">
    Open your terminal application.
  </Step>
  <Step title="Rocket" icon="rocket-launch">
    Launch the application.
  </Step>
</Steps>

### Icon Format

Icons can be specified in two ways:

- **Short format**: `icon="check"` → automatically prefixed with `mdi:`
- **Full format**: `icon="mdi:check-circle"` → used as-is

```jsx
<Step icon="check" />         {/* Renders mdi:check */}
<Step icon="mdi:alert" />     {/* Renders mdi:alert */}
```

## Real-World Example

Here's a complete example showing a typical installation workflow:

```jsx
<Steps>
  <Step title="Prerequisites" status="completed">
    Ensure you have Node.js 18+ and npm installed on your system.
  </Step>
  <Step title="Clone Repository" icon="github">
    Clone the repository from GitHub and navigate into the project directory.
  </Step>
  <Step title="Install Dependencies" status="current">
    Install all required packages using npm. This may take a few minutes depending on your connection.
  </Step>
  <Step title="Configure Environment" icon="cog">
    Copy the example environment file and update the values with your configuration.
  </Step>
  <Step title="Start Development Server" status="error">
    There was an issue starting the server. Check the logs for details.
  </Step>
</Steps>
```

<Steps>
  <Step title="Prerequisites" status="completed">
    Ensure you have Node.js 18+ and npm installed on your system.
  </Step>
  <Step title="Clone Repository" icon="github">
    Clone the repository from GitHub and navigate into the project directory.
  </Step>
  <Step title="Install Dependencies" status="current">
    Install all required packages using npm. This may take a few minutes depending on your connection.
  </Step>
  <Step title="Configure Environment" icon="cog">
    Copy the example environment file and update the values with your configuration.
  </Step>
  <Step title="Start Development Server" status="error">
    There was an issue starting the server. Check the logs for details.
  </Step>
</Steps>

## Props Reference

### `<Steps>`

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Step components to render |

### `<Step>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Step heading text |
| `status` | `'current'` \| `'completed'` \| `'error'` | — | Visual state of the step |
| `icon` | `string` | — | Custom icon name (e.g., `check`, `mdi:alert`) |
| `interactive` | `boolean` | `false` | Enable click-to-change state behavior |
| `children` | `ReactNode` | — | Step content |

## Interactive Mode

The `interactive` prop enables clickable step indicators that cycle through states:

**State cycle:** `default` → `current` → `completed` → `error` → `default` → ...

Click the step indicators below to see them change:

```jsx
<Steps>
  <Step title="Click Me" interactive>
    Click the number to cycle through states.
  </Step>
  <Step title="Also Interactive" interactive>
    Each step tracks its own state independently.
  </Step>
  <Step title="Try It" interactive>
    The cycle goes: number → current (pulsing) → completed (green check) → error (red alert) → back to number.
  </Step>
</Steps>
```

<Steps>
  <Step title="Click Me" interactive>
    Click the number to cycle through states.
  </Step>
  <Step title="Also Interactive" interactive>
    Each step tracks its own state independently.
  </Step>
  <Step title="Try It" interactive>
    The cycle goes: number → current (pulsing) → completed (green check) → error (red alert) → back to number.
  </Step>
</Steps>

### Interactive with Initial State

You can combine `interactive` with an initial `status`:

```jsx
<Steps>
  <Step title="Starts as Current" interactive status="current">
    This step begins in the "current" state.
  </Step>
  <Step title="Starts as Completed" interactive status="completed">
    This step begins with a checkmark.
  </Step>
</Steps>
```

<Steps>
  <Step title="Starts as Current" interactive status="current">
    This step begins in the "current" state.
  </Step>
  <Step title="Starts as Completed" interactive status="completed">
    This step begins with a checkmark.
  </Step>
</Steps>

### Interactive with Custom Icons

When interactive, custom icons show in the default and current states, but are replaced by check/alert icons in completed/error states:

```jsx
<Steps>
  <Step title="With Icon" interactive icon="rocket">
    Click to see the icon change through states.
  </Step>
  <Step title="Another Icon" interactive icon="star">
    Different icons for different steps.
  </Step>
</Steps>
```

<Steps>
  <Step title="With Icon" interactive icon="rocket">
    Click to see the icon change through states.
  </Step>
  <Step title="Another Icon" interactive icon="star">
    Different icons for different steps.
  </Step>
</Steps>

## Styling

The component uses CSS Modules with the following classes:

- `.stepsContainer` — Outer wrapper with dashed left border
- `.stepItem` — Individual step container
- `.stepIndicator` — Circular number/icon indicator
- `.stepTitle` — Step heading
- `.stepContent` — Step body text

### Dark Mode

The component automatically adapts to dark mode with appropriate color adjustments for indicators and borders.

### Animations

- **Ring pulse**: Active steps have a subtle pulsing ring animation
- **Hover effects**: Steps scale up slightly and change color on hover
- **Reduced motion**: Animations respect `prefers-reduced-motion` media query

## Complete Example

```jsx
<Steps>
  <Step title="First Step" status="completed">
    Completed step content.
  </Step>
  <Step title="Second Step" status="current" icon="play">
    Active step with custom icon.
  </Step>
  <Step title="Third Step" status="error">
    Step with error state.
  </Step>
  <Step title="Fourth Step">
    Default numbered step.
  </Step>
</Steps>
```

<Steps>
  <Step title="First Step" status="completed">
    Completed step content.
  </Step>
  <Step title="Second Step" status="current" icon="play">
    Active step with custom icon.
  </Step>
  <Step title="Third Step" status="error">
    Step with error state.
  </Step>
  <Step title="Fourth Step">
    Default numbered step.
  </Step>
</Steps>
