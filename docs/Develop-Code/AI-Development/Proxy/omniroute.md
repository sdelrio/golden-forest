---
title: "OmniRoute"
description: "Free, open-source AI gateway that routes requests across 340+ providers with auto-fallback, token compression up to 95%, and zero-config setup."
tags: [ai, tools, proxy, gateway, free, compression, routing, claude-code, cursor, opencode, cline]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Accordion from '@site/src/components/Accordion/Accordion';
import AccordionGroup from '@site/src/components/Accordion/AccordionGroup';
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

# OmniRoute

OmniRoute is a free, MIT-licensed AI gateway that sits between your coding tools and **340+ LLM providers**. It exposes a single OpenAI-compatible endpoint (`localhost:20128/v1`) and intelligently routes every request across providers, falling back automatically when one hits rate limits or goes down. The result: you never stop coding, and you pay as little as possible.

:::info
OmniRoute aggregates the documented free tiers of **340+ providers** (across 42 deduplicated pools / 495 models) into approximately **1.51 billion free tokens per month**, accessible through a single endpoint with no API key required for the `auto` combo.
:::

## Core Advantages & Efficiency

- **Zero-Config Start**: Install and run. The `auto` model combo works immediately with pre-wired free providers (OpenCode Free, Felo). No API keys needed to begin.
- **340+ Providers, 90+ Free**: Every major lab (OpenAI, Anthropic, Google (Gemini), DeepSeek, Mistral, Groq, xAI, Qwen, Meta Llama, and 220+ more) through one endpoint.
- **Automatic Fallback**: When a provider hits rate limits or goes down, OmniRoute silently slides to the next one in milliseconds. Four tiers cascade: Subscription-based (Anthropic, OpenAI, Google) → API Key (DeepSeek, Groq, xAI) → Cheap (GLM, MiniMax) → Free (Kiro, Qoder, Pollinations).
- **Token Compression**: Stacked RTK + Caveman engines compress tokens 78-95% (average 89%) on repetitive tool output, shell logs, and test results.
- **33+ Compatible CLIs**: Works with Claude Code, Codex, Cursor, Cline, Kilo Code, OpenCode, Aider, Goose, Continue, and many more.

:::tip
Set your model to `auto` and OmniRoute builds a virtual combo from your connected providers, scored live on 14 factors (including health, quota, cost, latency, success rate). No combo creation required.
:::

## Routing Engine & Intelligence

OmniRoute's smart router is the core of the gateway. It evaluates every candidate provider in real time and picks the best one per request.

### Auto-Combo Strategies

| Model ID | What it optimizes for |
|---|---|
| `auto` | Balanced default (Last-Known-Good Path - sticks to last successful provider) |
| `auto/coding` | Quality-first weights for code generation |
| `auto/fast` | Lowest latency first |
| `auto/cheap` | Cheapest per token first |
| `auto/offline` | Most quota / rate-limit headroom first |
| `auto/smart` | Quality-first + 10% exploration to discover better models |

### 19 Routing Strategies

Beyond `auto`, OmniRoute offers 19 composable strategies you can mix and match per combo step. Key strategies include:

- **priority** - First-target ordered list, drain each before the next
- **weighted** - Weighted random by per-target weight
- **round-robin** - Cycle through targets in order
- **cost-optimized** - Minimize $ per request from live catalog pricing
- **context-relay** - Hand off context across targets for long conversations
- **cache-optimized** - Pin reusable prompt prefixes to the same account for cache hits
- **fusion** - Fan out to a panel of models, a judge synthesizes one answer
- **pipeline** - Chain steps, each target's output feeds the next

### 3-Layer Resilience

OmniRoute has three independent self-healing layers:

1. **Provider Circuit Breaker** - Trips on 408/5xx errors, reroutes to the next provider while the circuit is open (recovery probed after 60s/30s/15s)
2. **Connection Cooldown** - Exponential backoff per key/account, skips cooling keys while siblings serve
3. **Model Lockout** - Per-model 429 or 404 locks just that model, never the whole connection

## Token Compression

OmniRoute's compression pipeline runs 12 stacked engines transparently on every request. No client changes required.

### Compression Presets

| Mode | Savings | Best for |
|---|---|---|
| Lite | ~15% | Always-on safe default |
| Standard (Caveman) | ~30% | Daily coding |
| Aggressive | ~50% | Long tool-heavy sessions |
| Ultra | ~75% | Maximum savings |
| RTK | 60-90% | Shell/test/build/git output |
| **Stacked (RTK + Caveman)** | **78-95%** | **Mixed prompts + tool logs** |

:::info
The default stacked combo (RTK + Caveman) saves an average of **89%** on tokens. Code blocks, URLs, JSON, and structured data are always preserved byte-perfect by the preservation engine.
:::

The 12-engine stack includes: Session-Dedup, CCR, Lite, RTK, Responses Tool Output, Headroom, Relevance, Caveman, Aggressive, LLMLingua-2, Ultra, and OmniGlyph. Each is independently toggleable and configurable per routing combo.

## Security & Privacy

- **Local-First**: Runs 100% on your hardware. The proxy binds to `localhost:20128` and never phones home.
- **Zero Telemetry**: No data is sent anywhere by default.
- **Encrypted Keys**: Credentials stored with AES-256-GCM encryption at rest.
- **No Account Required**: Works without sign-up. API keys stay on your machine.
- **TLS Stealth**: Built-in TLS fingerprint masking to avoid blocking by provider anti-bot systems.

:::warning
OmniRoute uses TLS fingerprint stealth to make proxy traffic resemble normal browser requests. Some providers may detect non-official client patterns, which carries a risk of account suspension. Use free-tier or dedicated proxy accounts for safety.
:::

## Installation & Setup

<Steps>
  <Step title="Install OmniRoute">
    Install globally via npm. Requires Node.js v22.22.2+ or v24+.

    <Tabs groupId="install-method">
      <TabItem value="npm" label="npm (Recommended)" default>
        ```bash
        npm install -g omniroute
        omniroute
        ```
        Dashboard at `http://localhost:20128`. API at `http://localhost:20128/v1`.
      </TabItem>
      <TabItem value="docker" label="Docker">
        ```bash
        docker run -d --name omniroute --restart unless-stopped \
          -p 127.0.0.1:20128:20128 -v omniroute-data:/app/data \
          diegosouzapw/omniroute:latest
        ```
      </TabItem>
      <TabItem value="pnpm" label="pnpm">
        ```bash
        pnpm add -g omniroute@latest --allow-build=better-sqlite3 --allow-build=@swc/core
        omniroute
        ```
      </TabItem>
    </Tabs>
  </Step>

  <Step title="Connect a Free Provider">
    Open the Dashboard at `http://localhost:20128` and navigate to **Providers**. Connect a free provider:
    - **OpenCode Free** - No auth required, works immediately
    - **Felo** - Free tier, pre-wired into the `auto` combo
    - **Kiro AI** - Free Claude credits (~50/month per account)
  </Step>

  <Step title="Point Your Coding Tool">
    Configure your tool's base URL and model:

    ```
    Base URL: http://localhost:20128/v1
    API Key:  [copy from Dashboard → Endpoints]
    Model:    auto
    ```
  </Step>

  <Step title="Verify It Works">
    ```bash
    curl http://localhost:20128/v1/models -H "Authorization: Bearer YOUR_KEY"
    ```
    You should see your connected models listed. Start coding, and OmniRoute auto-routes and falls back for you.
  </Step>
</Steps>

### Docker Compose

For a full deployment with profiles (Redis, web providers, CLI tools), clone the repo and use Docker Compose:

```bash
git clone https://github.com/diegosouzapw/OmniRoute.git
cp .env.example .env
# Edit .env with your provider keys

# Minimal (no CLI tools)
docker compose --profile base up -d

# With web-cookie providers (Chromium/Playwright)
docker compose --profile web up -d

# With CLIs installed inside the container
docker compose --profile cli up -d
```

Available profiles: `base`, `web`, `cli`, `host`, `cliproxyapi`, `memory` (Qdrant), `bifrost`.

### One-Command CLI Launch

Launch any supported CLI through OmniRoute with zero config written:

```bash
omniroute run claude   --model auto
omniroute run codex    --model auto
omniroute run aider    --model auto
omniroute run opencode --model auto
```

## Compatible Tools

<AccordionGroup>
  <Accordion title="Coding CLIs" icon="mdi:code-braces">
    Claude Code, Codex CLI, Aider, Goose, OpenCode, Qwen Code, Gemini CLI, DeepSeek TUI, Continue, Cline, Kilo Code, Zoo Code, and more.
  </Accordion>
  <Accordion title="IDE Integrations" icon="mdi:microsoft-visual-studio-code">
    [VS Code (via OmniCopilot extension)](https://github.com/diegosouzapw/OmniCopilot), Cursor, Windsurf, JetBrains AI Assistant. Point at `localhost:20128/v1` in your IDE settings.
  </Accordion>
  <Accordion title="Agent Protocols" icon="mdi:robot">
    MCP server (stdio/HTTP/SSE) with 109 tools, A2A agent-to-agent protocol, REST API, and webhooks.
  </Accordion>
</AccordionGroup>

## Platform Support

| Platform | Install | Highlights |
|---|---|---|
| npm (global) | `npm install -g omniroute` | One command, any OS |
| Docker | `docker run ... diegosouzapw/omniroute` | Multi-arch AMD64 + ARM64 |
| Desktop (Electron) | `npm run electron:build` | Native window + system tray |
| Android (Termux) | `pkg install nodejs && npx -y omniroute` | Runs on your phone, 24/7 |
| PWA | "Add to Home Screen" | Fullscreen, offline, installable |
| From source | `npm install && npm run dev` | Hack on it, contribute |

## MCP & Agent Integration

Expose OmniRoute over MCP so any capable agent controls the full gateway:

```bash
claude mcp add-server omniroute --type http --url http://localhost:20128/api/mcp/stream
```

This gives Claude Code access to 109 MCP tools covering routing, providers, combos, cache, compression, memory, and more.

## References

- [Official Website](https://omniroute.online)
- [GitHub Repository](https://github.com/diegosouzapw/OmniRoute)
- [Official Documentation](https://github.com/diegosouzapw/OmniRoute#-documentation)
- [Docker Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.50/docs/guides/DOCKER_GUIDE.md)
- [CLI Integrations](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.50/docs/guides/CLI-INTEGRATIONS.md)
- [YouTube - OmniRoute Overview](https://youtu.be/4jiM4w7qr2g)
- [YouTube - OmniRoute Deep Dive](https://youtu.be/AQm1ig0GrP4)
- [OmniRoute vs FreeLLMAPI - Comparative](../comparatives/ai-proxy.md)
