---
title: "Webwright"
description: "Microsoft's open-source browser agent framework that turns coding models into state-of-the-art browser automation agents using Playwright."
tags: [ai-development, skills, browser-automation, playwright, agents]
sidebar_position: 10
sidebar_label: "Webwright"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';


# Webwright

Webwright is an open-source framework from Microsoft that gives LLM-powered agents a terminal to control a browser. Instead of forcing models to predict one click at a time inside a rigid interaction loop, Webwright lets the agent **write Playwright scripts on the fly**, execute them, inspect results, and iterate — just like a human developer would.

The core idea is simple: separate the agent from the browser. The browser is disposable; the **code and logs** in the local workspace are the persistent artifact. This approach achieves state-of-the-art results on long-horizon benchmarks (tasks requiring many sequential browser interactions, like filling multi-step forms or navigating complex workflows) with a fraction of the token usage of traditional approaches.

## Key Features & Advantages

- **Code-as-action**: The agent writes free-form Python/Playwright scripts instead of predicting discrete UI actions. This enables loops, functions, and reusable tooling.
- **Workspace-as-state**: Browsers are spawned, inspected, and discarded. The workspace (scripts, screenshots, logs) is the source of truth.
- **Lightweight**: The entire agent loop is ~450 lines, the Playwright environment ~570 lines, and the CLI ~150 lines. No hidden orchestration layers.
- **Pluggable backends**: Supports OpenAI, Anthropic, and OpenRouter out of the box.
- **Plugin integration**: Ships as a skill for Claude Code, Codex, OpenClaw, OpenCode, and Hermes Agent.

:::info
Webwright achieves **86.7%** on the Online-Mind2Web benchmark (300 tasks) with GPT-5.4 (currently in limited preview), and **60.1%** on the Odysseys long-horizon benchmark (200 tasks) — a +15.6 point improvement over the prior state-of-the-art.
:::

## How It Works

The agent loop follows a straightforward cycle:

1. The agent receives a task instruction and a start URL.
2. It **writes a Playwright script** to interact with the page.
3. The script executes in a fresh Chromium browser session.
4. The agent inspects screenshots and logs to verify progress.
5. If the task isn't complete, it writes a new or repaired script and retries.

The key differentiator is that traditional browser agents predict one DOM action per step, while Webwright lets the agent compose multiple actions into compact programs. This means fewer interaction rounds, faster execution, and less error accumulation on complex tasks.

## Installation & Setup

:::tip
Webwright requires **Python 3.10+**.
:::

<Steps>
  <Step title="Install Webwright">
    Clone the repository and install in editable mode:
    ```bash
    git clone https://github.com/microsoft/Webwright.git
    cd Webwright
    pip install -e .
    ```
  </Step>
  <Step title="Install Chromium">
    Webwright uses Playwright's browser management:
    ```bash
    playwright install chromium
    ```
  </Step>
  <Step title="Configure your API key">
    Export the key for your chosen backend:
    ```bash
    # For OpenAI
    export OPENAI_API_KEY="sk-..."

    # For Anthropic
    export ANTHROPIC_API_KEY="sk-ant-..."
    ```
  </Step>
</Steps>

## Basic Usage

Run a web task from the CLI with a task instruction and a start URL:

```bash
python -m webwright.run.cli \
    -c base.yaml -c model_openai.yaml \
    -t "Search for flights from SEA to JFK on 2026-08-15 to 2026-08-20" \
    --start-url https://www.google.com/flights \
    --task-id demo_flights \
    -o outputs/default
```

When the task completes, the `outputs/default/demo_flights/` directory contains the full run artifacts: `trajectory.json` (step-by-step trace), screenshots captured at key points, and the final generated Playwright script. These are useful for debugging, auditing, or rerunning the task.

<Tabs groupId="config">
  <TabItem value="openai" label="OpenAI">
    Use `model_openai.yaml` and set `OPENAI_API_KEY`.
  </TabItem>
  <TabItem value="anthropic" label="Anthropic">
    Use `model_claude.yaml` and set `ANTHROPIC_API_KEY`.
  </TabItem>
</Tabs>

### CLI Flags

| Flag | Description |
| --- | --- |
| `-c` | Config file(s) from `src/webwright/config/` (stackable). |
| `-t` | Task instruction in natural language. |
| `--start-url` | Initial page URL. |
| `--task-id` | Output subfolder name. |
| `-o` | Output directory for trajectories and screenshots. |

## Use as a Claude Code Skill

Webwright can be installed as a Claude Code plugin for seamless browser automation within your coding agent:

```bash
# Add the marketplace
/plugin marketplace add microsoft/Webwright

# Install the plugin
/plugin install webwright@webwright
```

Restart your Claude Code session after installing — plugins load at session start.

Then use it in natural language or via slash commands:

```
/webwright:run search Google Flights for flights from SEA to JFK
/webwright:craft search a ticket on Google Flights from LAX to SFO
```

The `/webwright:craft` command generates a **reusable parameterized CLI tool** — a Python script with an `argparse` wrapper that you can rerun with different arguments later.

## Use as an OpenCode Skill

Webwright works with [OpenCode](https://opencode.ai) through the Agent Skills standard. OpenCode automatically discovers skills from `.opencode/skills/`, `.claude/skills/`, or `.agents/skills/` directories.

<Steps>
  <Step title="Install Webwright">
    Clone and install Webwright if you haven't already:
    ```bash
    git clone https://github.com/microsoft/Webwright.git
    cd Webwright
    pip install -e .
    playwright install chromium
    ```
  </Step>
  <Step title="Link the skill">
    Symlink the skill into your project or global config:
    ```bash
    # Project-level (inside your project directory)
    mkdir -p .opencode/skills
    ln -s /path/to/Webwright/skills/webwright .opencode/skills/webwright

    # Or global
    mkdir -p ~/.config/opencode/skills
    ln -s /path/to/Webwright/skills/webwright ~/.config/opencode/skills/webwright
    ```
  </Step>
</Steps>

Once linked, OpenCode discovers the skill automatically. Just ask in natural language — no API keys needed beyond your OpenCode provider:

```
Search Google Flights for flights from SEA to JFK on 2026-08-15 to 2026-08-20
```

You can also use the slash commands:

```
/webwright:run search Google Flights for flights from SEA to JFK
/webwright:craft search a ticket on Google Flights from LAX to SFO
```

## References

- [GitHub Repository](https://github.com/microsoft/Webwright)
- [Project Page](https://microsoft.github.io/Webwright/)
- [Research Blog Post](https://www.microsoft.com/en-us/research/articles/webwright-a-terminal-is-all-you-need-for-web-agents/)
- [Playwright Documentation](https://playwright.dev/)
