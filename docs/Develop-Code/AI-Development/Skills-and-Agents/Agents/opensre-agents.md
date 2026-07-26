---
title: "OpenSRE Framework"
description: "An open-source framework for building, training, and deploying AI SRE agents to automate production incident investigation and response."
tags: ["AI SRE", "Site Reliability Engineering", "AI Agents", "Observability", "Production Debugging", "OpenSRE"]
date: 2026-05-24
---

import Card from '@site/src/components/Card/Card';
import CardGroup from '@site/src/components/Card/CardGroup';
import Accordion from '@site/src/components/Accordion/Accordion';
import AccordionGroup from '@site/src/components/Accordion/AccordionGroup';
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# OpenSRE: Autonomous Incident Response

When something breaks in production, the evidence is scattered across logs, metrics, traces, runbooks, and Slack threads. **OpenSRE** is an open-source framework for building, training, and deploying AI SRE (Site Reliability Engineering) agents that investigate and resolve production incidents directly on your own infrastructure.

Just as SWE-bench established clear feedback and benchmarks for code-writing agents, OpenSRE is building the missing layer for infrastructure debugging: an open reinforcement learning environment for agentic incident response, backed by scored synthetic simulations and cloud-backed end-to-end tests.

## Why OpenSRE?

Production debugging remains an unsolved challenge for AI because distributed failures are slower, noisier, and harder to evaluate than local code changes. OpenSRE addresses this by bridging the gap between LLMs and real-world system debugging.

```mermaid
flowchart TD
    subgraph Trigger
        Alert[Incident Alert / Webhook]
    end

    subgraph Engine ["OpenSRE Agentic Engine"]
        Context["1. Fetch Context\n(Logs, Metrics, Traces)"]
        Analyze["2. Reason & Correlate\n(Detect anomalies across systems)"]
        Report["3. Generate RCA Report\n(Identify probable root cause)"]
        Remediation["4. Remediate & Suggest\n(Suggest or run safe actions)"]
    end

    subgraph Notification
        Slack["Slack Summary / Thread"]
        PD["PagerDuty Ack & Note"]
    end

    Alert --> Context
    Context --> Analyze
    Analyze --> Report
    Report --> Remediation
    Remediation --> Slack
    Remediation --> PD
```

## Core Advantages

OpenSRE is designed with production reliability, visibility, and safety in mind:

<CardGroup cols={2}>
  <Card title="Production-Ready RCA" icon="mdi:chart-timeline-variant">
    Automatically fetches alert context, correlated logs, and telemetry traces across connected systems to identify anomaly root causes.
  </Card>
  <Card title="Interactive TUI REPL" icon="mdi:console">
    Streams investigations with clear slash commands, customizable safety levels, and controllable reasoning depth directly from your terminal.
  </Card>
  <Card title="Scored Validation" icon="mdi:shield-check">
    Runs scored synthetic suites that check root-cause accuracy, required evidence, and adversarial red herrings to validate agent behavior safely.
  </Card>
  <Card title="60+ Core Integrations" icon="mdi:connection">
    Connects to the observability, databases, incident management, and communication tools you already run out of the box.
  </Card>
</CardGroup>

## Interactive TUI & Shell Commands

When launched with no arguments, OpenSRE boots into an interactive, Bubble Tea-powered terminal REPL (TTY required) where you can describe incidents in plain language and stream the agent's step-by-step investigation.

### Interactive Slash Commands

Inside the REPL shell, you can control the agent's behavior and environment using the following slash commands:

*   `/help` — Displays available commands and usage guidelines.
*   `/status` — Checks active system integrations, connected providers, and agent status.
*   `/clear` — Clears screen history.
*   `/reset` — Resets session state, clearing the conversation history.
*   `/trust` — Toggles safety boundaries and tool execution permissions.
*   `/effort` — Sets LLM reasoning depth (`low`, `medium`, `high`, `xhigh`, or `max`) for compatible providers like OpenAI/Codex.
*   `/exit` — Safely terminates the REPL session.

:::info
During an active, in-flight investigation, pressing `Ctrl+C` will safely cancel the execution without losing your current REPL session state.
:::

### One-Shot Investigation

You can also run the agent as a single-run cli command against specific incident alerts:

```bash
opensre investigate -i tests/e2e/kubernetes/fixtures/datadog_k8s_alert.json
```

## Installation & Setup

Set up OpenSRE on your preferred workstation or deployment target:

<Steps>
  <Step title="Install OpenSRE">
    You can install OpenSRE via direct installation scripts, Homebrew, or PowerShell:

    <Tabs groupId="install-method">
      <TabItem value="unix-stable" label="Unix/macOS (Stable)" default>
        ```bash
        curl -fsSL https://install.opensre.com | bash
        ```
      </TabItem>
      <TabItem value="unix-main" label="Unix/macOS (Rolling Main)">
        ```bash
        curl -fsSL https://install.opensre.com | bash -s -- --main
        ```
      </TabItem>
      <TabItem value="brew" label="Homebrew">
        ```bash
        brew tap tracer-cloud/tap
        brew install tracer-cloud/tap/opensre
        ```
      </TabItem>
      <TabItem value="windows" label="Windows (PowerShell)">
        ```powershell
        irm https://install.opensre.com | iex
        ```
      </TabItem>
    </Tabs>
  </Step>

  <Step title="Run Onboarding">
    Initialize OpenSRE and run the automated onboarding guide to configure your credentials:
    ```bash
    opensre onboard
    ```
  </Step>

  <Step title="Configure Environment Variables">
    For hosted setups (using Docker, EC2, ECS, or Railway) or manual configurations, specify your LLM provider and credentials:
    ```bash
    # Set your LLM provider and API keys
    LLM_PROVIDER=openai
    OPENAI_API_KEY=sk-proj-...

    # Configure database and cache URIs for hosted layouts requiring persistence
    DATABASE_URI=postgresql://user:pass@localhost:5432/opensre
    REDIS_URI=redis://localhost:6379/0
    ```
  </Step>

  <Step title="Launch the REPL">
    Launch the interactive terminal UI in your project workspace:
    ```bash
    opensre
    ```
  </Step>
</Steps>

## Capabilities & Integrations

OpenSRE connects to 60+ tools across the modern cloud stack, making it easy to wire your agent directly into your live infrastructure.

| Category | Integrations |
| :--- | :--- |
| **Observability** | Datadog, Splunk, New Relic, Victoria Logs, AWS CloudWatch |
| **Cloud Infrastructure** | Kubernetes, AWS EC2, AWS ECS Fargate, AWS RDS, AWS Lambda, Apache Flink |
| **Deployments** | Helm, ArgoCD |
| **Incident & Ticketing** | ServiceNow, incident.io, Linear, Confluence, Trello, Notion |
| **Communication** | Slack, Microsoft Teams, WhatsApp |

## Telemetry & Privacy

:::tip
OpenSRE is designed with production environments in mind. It uses structured, auditable LLM prompts, processes transcripts locally by default, and guarantees no silent bulk exports of raw production logs.
:::

By default, OpenSRE collects anonymous telemetry using PostHog (for product analytics) and Sentry (for error reporting). You can instantly opt-out of all telemetry tracking by setting the following environment variable:

```bash
export OPENSRE_NO_TELEMETRY=1
```

## References

* [OpenSRE GitHub Repository](https://github.com/Tracer-Cloud/opensre)
* [OpenSRE Official Website](https://www.opensre.com)
* [OpenSRE Quickstart Guide](https://www.opensre.com/docs/quickstart)
* [OpenSRE FAQ Page](https://opensre.com/docs/faq)
