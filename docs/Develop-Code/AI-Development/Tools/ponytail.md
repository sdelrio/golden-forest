---
title: "Ponytail"
description: "Ponytail is an agent plugin that teaches your AI coding agent to write the least code that works — cutting tokens, cost, and latency while keeping safety intact."
tags: ["ponytail", "ai-agent", "yagni", "token-efficiency", "claude-code", "opencode"]
---

import Card from '@site/src/components/Card/Card';
import CardGroup from '@site/src/components/Card/CardGroup';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

# Ponytail – The Lazy Senior Dev for AI Agents

Ponytail is a ruleset and plugin that makes your AI coding agent write the least code that works. Named after that senior dev who's been paged at 3am one too many times, it enforces a simple philosophy: **the best code is the code you never wrote**.

Before Ponytail, you ask for a date picker and your agent installs flatpickr, writes a wrapper component, adds a stylesheet, and starts a discussion about timezones. With Ponytail, the agent reaches for `<input type="date">` — the native platform feature that already does the job.

## The Ladder

Before writing code, the agent climbs a decision ladder and stops at the first rung that holds:

1. Does this need to exist? → skip it (YAGNI)

:::note
**YAGNI** — "You Aren't Gonna Need It" — is a core principle from Extreme Programming (XP): don't add functionality until it's actually needed.
:::

2. Already in this codebase? → reuse it
3. Stdlib does it? → use it
4. Native platform feature? → use it
5. Installed dependency? → use it
6. One line? → one line
7. Only then: the minimum that works

The ladder runs *after* the agent understands the problem — it reads the code and traces the real flow before picking a rung. Lazy about the solution, never about reading.

:::warning
Ponytail never simplifies away validation, error handling, security, or accessibility. The code ends up small because it is necessary, not golfed.
:::

## Benchmarks

Measured on real Claude Code sessions editing a FastAPI + React repo (12 feature tasks, n=4, Haiku 4.5):

| Metric | Reduction |
| :--- | :--- |
| Lines of code | **-54%** |
| Tokens | **-22%** |
| Cost | **-20%** |
| Time | **-27%** |
| Safety | **100%** |

:::info
The cut is biggest where there is a real over-build trap (e.g., a date picker goes from 404 to 23 lines) and near zero on code that is already minimal.
:::

## Intensity Levels

Ponytail offers three modes to control how aggressive the laziness gets:

- **`lite`** – Builds what you asked, names the lazier alternative in one line. You pick. (default)
- **`full`** – The ladder enforced. Stdlib and native first. Shortest diff, shortest explanation.
- **`ultra`** – YAGNI extremist. Ships the one-liner and challenges the rest of the requirement in the same breath.

Set the level per session or globally via `PONYTAIL_DEFAULT_MODE` env var.

## Install

<Tabs>
  <TabItem value="claude" label="Claude Code" default>

<Steps>
  <Step title="Add the marketplace">
    ```bash
    /plugin marketplace add DietrichGebert/ponytail
    ```
  </Step>
  <Step title="Install the plugin">
    ```bash
    /plugin install ponytail@ponytail
    ```
  </Step>
</Steps>

:::tip
These are two separate prompts — send them one after the other. The desktop app has no `/plugin` command; use Customize → + by personal plugins → Create plugin instead.
:::

  </TabItem>
  <TabItem value="opencode" label="OpenCode">

Add to your `opencode.json`:

```json
{
  "plugin": ["@dietrichgebert/ponytail"]
}
```

Or run from a local checkout:

```json
{
  "plugin": ["./.opencode/plugins/ponytail.mjs"]
}
```

The plugin injects the ruleset every turn at the active level and adds the `/ponytail` commands. OpenCode also auto-loads this repo's `AGENTS.md`, so the rules hold even without the plugin.

  </TabItem>
  <TabItem value="codex" label="Codex">

```bash
codex plugin marketplace add DietrichGebert/ponytail
```

Open `/plugins`, select the Ponytail marketplace, and install. Then open `/hooks`, review and trust its two lifecycle hooks, and start a new thread.

  </TabItem>
  <TabItem value="gemini" label="Gemini CLI">

```bash
gemini extensions install https://github.com/DietrichGebert/ponytail
```

Loads the ruleset as always-on context every session and registers the `/ponytail` commands; the `skills/` ship too, activated when a task needs them.

  </TabItem>
  <TabItem value="pi" label="Pi Agent">

```bash
pi install git:github.com/DietrichGebert/ponytail
```

  </TabItem>
  <TabItem value="copy" label="Copy Rules File">

For Cursor, Windsurf, Cline, Kiro, and others: copy the matching rules file from the repo (`.cursor/rules/`, `.windsurf/rules/`, `.clinerules/`, etc.).

  </TabItem>
</Tabs>

## Commands

| Command | Description |
| :--- | :--- |
| `/ponytail [lite\|full\|ultra\|off]` | Set intensity or turn it off |
| `/ponytail-review` | Review the current diff for over-engineering |
| `/ponytail-audit` | Audit the whole repo for bloat |
| `/ponytail-debt` | Collect deferred shortcuts into a ledger |
| `/ponytail-gain` | Show the benchmark scoreboard |
| `/ponytail-help` | Quick command reference |

## Token Savings Breakdown

The token reduction comes from three compounding effects:

- **Less code generated** — The agent writes fewer lines because it reuses what exists or picks native solutions over libraries.
- **Shorter explanations** — When the solution is one line, the justification is one line too.
- **Fewer round-trips** — Less code means fewer review cycles and fewer follow-up edits.

This compounds across a coding session: every task that could have been 50 lines becomes 5, and the context window stays clean for the next problem.

## References

- [GitHub Repository](https://github.com/DietrichGebert/ponytail)
- [Official Website](https://ponytail.dev)
- [Benchmarks](https://github.com/DietrichGebert/ponytail/blob/main/benchmarks/results/2026-06-18-agentic.md)
- [Agent Portability Guide](https://github.com/DietrichGebert/ponytail/blob/main/docs/agent-portability.md)
