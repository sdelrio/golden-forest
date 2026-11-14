---
title: Obsidian as a Backend, Not a Second Brain
description: Turn an Obsidian vault into a backend with a human/machine split, an AGENTS.md in every folder, frontmatter filled by collector scripts, and findings files that make every agent run better.
category: "AI Workflows / Knowledge Bases"
labels: ["Obsidian", "Claude Code", "AI Agents", "PKM"]
tags:
  - obsidian
  - agents
  - automation
  - productivity
---

import { Icon } from '@iconify/react';

# Obsidian as a Backend, Not a Second Brain

<Icon icon="simple-icons:obsidian" width="4em" height="4em" />

## Summary

A second brain collects. You feed it every day and it feeds nothing back, so the notes turn into an archive you never reread. The vault in this article is built the other way around: plain Markdown files, frontmatter fields filled by scripts on a schedule, and agents that log their own work and read their own history before the next run.

Once notes have structured frontmatter, you can build anything on top of them: agent workflows, dashboards, a custom front end. The vault stops being a visualizer and becomes a small database you own. The knowledge layer of that database is covered in [Obsidian Skills & LLM Wiki Setup](./obsidian-skills-setup.md); this article is the rest of the vault.

:::info The three things that make it work
1. Markdown files with frontmatter properties.
2. An agent file at the top of every folder.
3. A findings file per workflow, so the agent improves with every run.
:::

Source: [Build an Obsidian Backend, Not a Second Brain](https://youtu.be/4z2i6UsQG1k) by Easy Machine AI, who runs the described setup daily and demos the front end built on top of it.

## Split the Vault: Human Side vs Machine Side

Keep your ideas and the agent's ideas in separate folders. AI consolidates and summarizes by default, and you cannot tell afterwards whether it captured your intent or its guess about your intent.

| Area | Who writes | Typical contents |
|---|---|---|
| Human side | You, with agents restricted to reading and copying | Daily notes, tasks, projects, resources, people, context, templates, content |
| Machine side | The agent, with full write access | Outputs, scripts, workflows, logs, research |

The vault layout from the video:

```text title="vault layout"
vault/
├── AGENTS.md            vault map and the highest-level rules
├── Start Here.md        entry note, the first thing a human opens
├── 00 Human/            agent reads and copies, never writes
│   ├── 10 Daily Notes/
│   ├── 20 Tasks/
│   ├── 30 Projects/
│   ├── 40 Resources/
│   ├── 50 People/
│   ├── 70 Context/
│   ├── 80 Templates/
│   ├── 90 Content/
│   └── AGENTS.md
└── Machine/             agent-owned
    ├── AGENTS.md
    ├── Logs/
    ├── Outputs/
    ├── Research/
    ├── Scripts/
    └── Workflows/
        ├── AGENTS.md
        └── Shorts/      one example workflow
            ├── workflow.md
            ├── findings.md
            └── assets/
```

The numbered prefixes keep the human folders in the order the author reads them, and every folder an agent enters carries its own `AGENTS.md`, including `Machine/` and `Machine/Workflows/`. On the machine side, `Logs/` and `Research/` are where the agent's own output and findings land, alongside the collector scripts and the workflows themselves.

Give the agent a hard rule, not a preference: the machine side is where it writes, the human side is read-only.

## One Agent File at the Root of Every Folder

Every folder, including the vault root, carries its own `AGENTS.md` (or `CLAUDE.md`). It is the instruction manual for that section: what lives here, what the agent may touch, and how to run the workflow that belongs here.

This is also the fix for the most common agent mistake: dumping the whole vault into the context window. More context does not mean better answers. It is like handing someone a stack of reference material; they get the beginning and the end, and the middle gets lost. With an agent file per folder, the agent reads the map first, then loads only the workflow, the note and the assets that folder needs.

```text title="Machine/Workflows/Shorts/AGENTS.md"
# Shorts/
- Build the deliverable with workflow.md in this folder.
- Read findings.md before you start. Never skip it.
- Write outputs to Machine/Outputs/.
- Log what you did in today's note under 00 Human/10 Daily Notes/.
```

## Daily Notes Are the Database

Think of every daily note as a row and every frontmatter property as a column:

```yaml title="00 Human/10 Daily Notes/2026-11-14.md"
---
youtube_views: 14203
subscribers: 8110
instagram_reach: 30412
top_task: finish the compiler pass
---
```

Two mechanisms fill that table, and neither one needs an LLM:

- **Collector scripts.** One per platform, run on a schedule through the official API, writing values into the frontmatter. Deterministic: the same data, collected the same way, every day. No probabilistic filter between the number and the file.
- **Agent logging.** The agent's standing instruction is to log what it did into today's daily note. You stop journaling; the work journal writes itself.

The agent logging is the part most setups miss. The agent should not have to rediscover what happened yesterday, and the numbers should be there before any agent wakes up.

## Findings Files Make Every Run Better

Each workflow folder under `Machine/Workflows/` should also hold a `findings.md`: what shipped, performance numbers, which topics landed, which approaches did not. The agent file requires reading it before the next run.

The difference is between "here is the workflow" and "here is the workflow, here is where we are, and here is everything we learned from running it dozens of times". Each run starts from accumulated evidence instead of from zero.

## The Front End Is Optional

The video's author built a custom app on top of his vault. It reads the same Markdown, runs the same scripts and uses the same connections, so nothing is duplicated and nothing is locked in. A custom app is ergonomics, not architecture; the same setup works from a terminal.

What makes it more than a dashboard is that it can act: if the connectors exist, the UI can draft an email, start a workflow, or kick off research. The app ranks tasks into a short "needs you" list from the history in frontmatter, so the ranking is grounded in your own data rather than guessed.

That app is sold through the author's paid community, not shipped as an Obsidian plugin; the demo link is in References below.

## How This Fits the LLM Wiki

The two patterns are the same vault seen from two angles. This one decides where things live and what fills them; the [LLM Wiki](./obsidian-skills-setup.md) decides what the agent writes once it is there. Karpathy's original idea file, with the sizing guidance and the trade-offs, is in [Karpathy's LLM Wiki](../Tools/karpathy-llm-wiki.md).

| In this pattern | In the LLM Wiki |
|---|---|
| Human side (`00 Human/`) | `raw/`: source material the agent reads |
| Machine side (`Machine/`) | `wiki/`: pages the agent owns |
| `AGENTS.md` in every folder | the schema file, applied per folder |
| `findings.md` | entries in `wiki/log.md` |
| Collector scripts and agent logging | session material for the compiler |

## References

- [Video: Build an Obsidian Backend, Not a Second Brain (Easy Machine AI)](https://youtu.be/4z2i6UsQG1k)
- [Demo of the app in the video](https://hq.easymachineai.com) (paid community)
