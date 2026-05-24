---
title: "Agency Agents"
description: "A comprehensive overview of the Agency Agents repository, its capabilities, and how to integrate it with various AI tooling."
tags: ["AI", "Agents", "Agency"]
sidebar_position: 10
---

import Card from '@site/src/components/Card/Card';
import CardGroup from '@site/src/components/Card/CardGroup';
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';
import CodeGroup from '@site/src/components/CodeGroup/CodeGroup';

# Agency Agents

:::info
Agency Agents is a curated collection of AI agent personalities, each with specialized expertise, processes, and deliverables. It provides a plug‑in system for various AI coding tools such as Claude Code, GitHub Copilot, Antigravity, and more.
:::

## What Is It?

Agency Agents defines a set of **agent files** that encapsulate:
- A clear **identity** and **personality**
- A well‑structured **core mission** and **deliverables**
- **Success metrics** and **workflow processes**

These agents can be installed into supported tools, giving you instant access to expert-like AI helpers for tasks ranging from frontend development to security engineering.

## Core Features

<CardGroup cols={2}>
  <Card title="Rich Agent Personas" href="https://github.com/msitarzewski/agency-agents#agents" >
    Each agent contains a detailed persona, voice, and set of responsibilities.
  </Card>
  <Card title="Multi‑Tool Integration" href="https://github.com/msitarzewski/agency-agents#supported-tools" >
    One‑click installers for Claude Code, Copilot, Antigravity, Gemini CLI, OpenCode, Cursor, and many more.
  </Card>
  <Card title="Plug‑in Architecture" href="https://github.com/msitarzewski/agency-agents#architecture" >
    Consistent `SKILL.md` + scripts allow seamless conversion to any platform.
  </Card>
  <Card title="Open Source & Extensible" href="https://github.com/msitarzewski/agency-agents" >
    MIT‑licensed, community‑driven, and easy to extend with new agents.
  </Card>
</CardGroup>

## Installation & Quick Start

<Steps>
  <Step title="Clone the Repository">
    ```bash
    git clone https://github.com/msitarzewski/agency-agents.git
    cd agency-agents
    ```
  </Step>
  <Step title="Run the Installer Script">
    The repo provides a unified installer that detects which AI tools you have installed and lets you pick which agents to install.
    ```bash
    ./scripts/install.sh
    ```
    You can also run it non‑interactively for CI pipelines:
    ```bash
    ./scripts/install.sh --no-interactive --tool all
    ```
  </Step>
  <Step title="Activate an Agent in Your Tool">
    After installation, reference an agent by name. For example, in Claude Code:
    ```markdown
    @frontend-developer review this React component
    ```
    Or in Antigravity:
    ```bash
    @agency-frontend-developer review this React component
    ```
  </Step>
</Steps>

## Supported Tools

<CodeGroup>
```bash
# Claude Code
./scripts/install.sh --tool claude-code

# GitHub Copilot
./scripts/install.sh --tool copilot

# Antigravity (Gemini)
./scripts/install.sh --tool antigravity

# Gemini CLI extension
./scripts/install.sh --tool gemini-cli

# OpenCode
./scripts/install.sh --tool opencode

# Cursor
./scripts/install.sh --tool cursor
```
</CodeGroup>

## Agent Index (Sample)

Below is a shortened glimpse of the agents available. Each card links to the corresponding markdown file in the repository.

<CardGroup cols={2}>
  <Card title="Frontend Developer" href="https://github.com/msitarzewski/agency-agents/blob/main/engineering/engineering-frontend-developer.md">
    React, Vue, Angular – UI implementation and performance.
  </Card>
  <Card title="Backend Architect" href="https://github.com/msitarzewski/agency-agents/blob/main/engineering/engineering-backend-architect.md">
    API design, database schema, scalability.
  </Card>
  <Card title="Security Engineer" href="https://github.com/msitarzewski/agency-agents/blob/main/engineering/engineering-security-engineer.md">
    Threat modeling, secure code review, security architecture.
  </Card>
  <Card title="DevOps Automator" href="https://github.com/msitarzewski/agency-agents/blob/main/engineering/engineering-devops-automator.md">
    CI/CD pipelines, infrastructure automation.
  </Card>
  <Card title="AI Engineer" href="https://github.com/msitarzewski/agency-agents/blob/main/engineering/engineering-ai-engineer.md">
    Model deployment, AI integration, data pipelines.
  </Card>
  <Card title="Growth Hacker" href="https://github.com/msitarzewski/agency-agents/blob/main/marketing/marketing-growth-hacker.md">
    User acquisition, viral loops, growth experiments.
  </Card>
</CardGroup>

## Contributing

If you want to add a new agent or improve an existing one:
1. Fork the repository.
2. Create a new markdown file under the appropriate category (e.g., `engineering/` or `marketing/`).
3. Follow the **Agent Markdown Template** described in `src/components/AGENTS.md`.
4. Run `./scripts/convert.sh` to generate integration files for all supported tools.
5. Submit a Pull Request.

## References

- **Official Repository**: [Agency Agents on GitHub](https://github.com/msitarzewski/agency-agents)
- **Installation Guide**: see the `README.md` section *Quick Install*.
- **Agent Architecture**: detailed in the *Multi‑Tool Integrations* section of the repo.
- **Contribution Guidelines**: `CONTRIBUTING.md` in the repo.
