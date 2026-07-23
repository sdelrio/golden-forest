---
title: "Self-learning Prompt"
description: "A simple yet powerful prompt technique that enables AI agents to learn from mistakes and self-correct in real-time."
author: "Boris Cherny"
tags: [prompts, self-improvement, agent-memory, prompt-engineering]
sidebar_position: 15
---

# Self-learning Prompt

A minimal prompt technique that transforms any AI agent into a self-improving assistant. By instructing the agent to capture lessons from corrections and mistakes, it creates a living knowledge base that evolves with your workflow.

## How It Works

- **Trigger**: User corrects the agent, or the agent catches its own mistake
- **Action**: Agent adds a one-liner rule under the `## Lessons` section
- **Result**: Lessons persist in context, preventing repeated errors across the session

:::tip
The beauty of this prompt is its simplicity. No complex configuration, no external tools — just a self-sustaining feedback loop.
:::

## The Prompt

```markdown
## Self-learning

When I correct you, or you catch yourself making a mistake: before continuing, add the lesson as a one-liner rule under ## Lessons, so it never happens again.


## Lessons

- (Agent add rules here)
```

## Key Features

- **Zero configuration**: Paste and start using immediately
- **Self-improving**: Agent learns continuously from interactions
- **Error prevention**: Each lesson prevents future recurrence
- **Minimal footprint**: Adds negligible tokens to context window

## References

- [Paste this into claude to build 10x faster... (Boris Cherny Method)](https://www.youtube.com/watch?v=9nTG1B1No_E)
