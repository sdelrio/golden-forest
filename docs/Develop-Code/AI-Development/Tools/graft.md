---
title: "Graft"
description: "Open-source context layer for large codebases - turbocharge coding agents with up to 4x cheaper, 3x faster performance via tree-sitter graph and optional LLM summaries."
tags: [ai, tools, code-graph, tree-sitter, claude-code, cursor, codex, gemini, mcp]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Graft: Codebase Context for Coding Agents

Graft builds a structural map of your codebase once and feeds it to coding agents on every prompt - so they arrive with context instead of re-learning the repo from scratch. [Open source (MIT)](https://github.com/trailhq/Graft), 6.4k+ stars. [YouTube overview](https://www.youtube.com/watch?v=cyIWQHYoUg8).

## The Problem

Coding agents are amnesiac. Every session starts at zero - grep, open, follow an import, back out, try again. That rediscovery burns most of a run's tool calls, tokens, and latency. Humans onboard once. Agents onboard every time.

## How It Works

Graft builds two layers: a **structural graph** via tree-sitter (no API key, deterministic, free) and an optional **semantic graph** via your own LLM key (file summaries grouped into concept nodes). The graph is stored as linked markdown files in a gitignored `graft/` folder - no embeddings, no vector DB. Before every query, it auto-refreshes against the working tree (~3ms if nothing changed), so the graph always reflects uncommitted edits.

## Benchmark Results

Graft published two sets of benchmarks using Claude Sonnet 5:

:::info
**Internal harness** (162 runs, two repos, 3 trials each):
- 46% fewer tool calls, 42% fewer tokens, 60% less time
- Equal correctness (93% vs 93%)

**SWE-bench Verified** (50 real GitHub issues):
- +12 pts correctness (66% vs 54%)
- 23% fewer tokens, 32% less wall-clock time
:::

The SWE-bench result is the more interesting one. The baseline agent would patch one file and miss its siblings; Graft found the rest. The internal harness shows the efficiency gains without correctness trade-offs.

## Setup

One command does the heavy lifting:

```bash
npx @nanonets/graft init
```

This detects your installed agents, builds the graph, and wires config files into `.claude/`, `AGENTS.md`, or whatever instruction directory your agent uses. It is idempotent and never clobbers existing config.

<Tabs groupId="agent-integration">
  <TabItem value="claude" label="Claude Code" default>
    Claude Code gets the deepest integration - a live statusline, auto-sync on every prompt, blast radius warnings when you edit files, and context pulled into each session automatically.

    ```bash
    npx @nanonets/graft init --agents claude
    ```
  </TabItem>
  <TabItem value="cursor" label="Cursor">
    ```bash
    npx @nanonets/graft init --agents cursor
    ```
    Or add the MCP server manually:
    ```json
    {
      "mcpServers": {
        "graft": {
          "command": "npx",
          "args": ["-y", "@nanonets/graft", "mcp"]
        }
      }
    }
    ```
  </TabItem>
  <TabItem value="codex" label="Codex / OpenCode">
    Both Codex CLI and OpenCode read `AGENTS.md` for agent instructions. Graft writes a section into it automatically.
    ```bash
    npx @nanonets/graft init --agents agents
    ```
    For Codex, this also registers MCP in `~/.codex/config.toml` and installs post-edit hooks.
  </TabItem>
  <TabItem value="gemini" label="Gemini CLI">
    ```bash
    npx @nanonets/graft init --agents gemini
    ```
  </TabItem>
</Tabs>

The graph itself is a local cache - what you commit to git is the small wiring in `.claude/` or `AGENTS.md`. Each teammate runs `graft build` to generate their own graph.

## What Graft Exposes to Agents

Through MCP, your agent gets six tools:

| Tool | What it does |
|:---|:---|
| `graft_find_code` | Answer a question by ranking relevant nodes with file:line references |
| `graft_file_api` | Show every signature in a file (no bodies - API surface for 1/10th the tokens) |
| `graft_trace_calls` | Walk the dependency graph N levels deep for blast radius |
| `graft_find_all` | Regex search grouped by enclosing symbol, ranked by coupling |
| `graft_repo_map` | Quick orientation: directory clusters, hubs, hotspots |
| `graft_check_freshness` | Detect if the local graph has drifted from the code |

## Graft vs. Graphify vs. Codegraph

All three tools solve the "agent starts blind" problem, but they are built for different workflows.

| | Graft | Graphify | Codegraph |
|:---|:---|:---|:---|
| **Approach** | Structural graph (tree-sitter) + optional LLM summaries | Multi-modal knowledge graph (code + docs + PDFs + images) | Pre-indexed semantic code graph (tree-sitter + SQLite) |
| **Storage** | Markdown files, gitignored | JSON + HTML, committed to git | SQLite database, gitignored |
| **Auto-refresh** | Yes - every query | Manual or git hook | Yes - OS file events |
| **Strength** | Real-time accuracy, coding agent optimization | Architectural understanding, Obsidian browsing | High-precision call graphs, framework detection |
| **Weakness** | Code only, no docs/media | Requires LLM for ingestion, no auto-refresh | No docs/media support |
| **Language count** | 23 | 33+ | 19+ |
| **LLM key required** | Only for `--deep` summaries | Yes, for ingestion | No |
| **Installation** | npm | pip | npx |

### When to Use Graft

- Your primary concern is **coding agent performance** - you want faster, cheaper sessions with real-time accuracy
- You want **zero infrastructure** - no daemon, no database, just files your agent reads
- Your repo is **pure source code** and you need blast radius, call tracing, or API surface queries
- You want **vendor-neutral** LLM support (OpenAI, Anthropic, OpenRouter, local models)

### When to Use Graphify

- Your repo mixes **code with documentation, PDFs, or design files** and you need to reason across both
- You want to **browse your project as an Obsidian wiki** with backlinked notes
- You need **community detection** to find surprising connections between concepts
- You want the graph **committed to git** for team-wide sharing without per-developer builds

### When to Use Codegraph

- You need **precise impact analysis** - "what breaks if I rename this function?"
- You want **zero LLM dependency** during indexing (fully offline)
- Your project uses specific **web frameworks** and you need route-to-controller mapping
- You prefer **SQLite** over flat files for structured queries

:::tip
These tools are not mutually exclusive. Both Graft and Graphify integrate via MCP, so you can run Graft for real-time coding sessions and Graphify for architectural exploration in parallel. Codegraph pairs well with either if you need framework-aware route detection.
:::

## Verdict

Graft is the most focused tool here: give coding agents a structural map and keep it fresh. The auto-refresh is the real differentiator - the graph is never stale. The trade-off is scope: it is code-only. If you need docs/media reasoning, use Graphify. For framework-aware route detection, use Codegraph. For most teams on Claude Code or Cursor, Graft is the lowest-friction starting point.

## References

- [GitHub Repository - trailhq/Graft](https://github.com/trailhq/Graft)
- [npm Package - @nanonets/graft](https://www.npmjs.com/package/@nanonets/graft)
- [Website - graft.nanonets.ai](https://graft.nanonets.ai)
- [YouTube - Github Top Trending Tool Just Fixed The AI Agent's Biggest Problem](https://www.youtube.com/watch?v=cyIWQHYoUg8)
- [Graphify - Multi-modal Knowledge Graph](./graphify.md)
- [Codegraph - Pre-indexed Semantic Code Graph](./codegraph.md)
