---
title: "Graphify"
description: "Transform any folder or repository into a navigable knowledge graph with 71.5x token efficiency and MCP support."
tags: [ai, tools, knowledge-graph, obsidian, claude-code, mcp, cursor]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Card from '@site/src/components/Card/Card';
import CardGroup from '@site/src/components/Card/CardGroup';
import Accordion from '@site/src/components/Accordion/Accordion';
import AccordionGroup from '@site/src/components/Accordion/AccordionGroup';
import Steps from '@site/src/components/Steps/Steps';
import CodeGroup from '@site/src/components/CodeGroup/CodeGroup';

# Graphify: The Project Knowledge Graph

Graphify transforms any directory—codebases, research folders, or SQL schemas—into a high-density knowledge graph. It is designed to solve the "context window overflow" problem by mapping concept clusters and relationships, allowing AI agents to reason over massive data without reading every file.

## Summary

Graphify acts as an architectural index for your project. By mapping the "brain" of your codebase into a structured graph, it provides a navigation layer for both humans and AI. It generates a navigable knowledge graph, an Obsidian vault with backlinked articles, and supports real-time querying via MCP.

## Core Advantages & Efficiency

The primary benefit of Graphify is its **extreme token efficiency**, offering a structural alternative to the "brute force" method of feeding entire files into an LLM.

:::info
**71.5x fewer tokens** per query compared to reading raw files, with near-zero loss in architectural understanding.
:::

- **Zero Config**: No vector database or complex setup required. Just point and graph.
- **Noise Reduction (v0.8+)**: Advanced filtering suppresses "surprising connections" (e.g., cross-language symbol matches) and excludes generic "god nodes" (like `id` or `name`) to keep the graph clean.
- **Multi-Format Support**: Handles 33+ programming languages, PDFs, Markdown, images, and video/audio transcription.
- **Incremental Growth**: Built-in data-loss protection and `build_merge()` functionality allow for safe, incremental graph expansion.

## Advanced Capabilities

Graphify has evolved from a simple folder scanner into a complete repository management tool.

<CardGroup cols={2}>
  <Card title="Direct Repo Ingestion" icon="mdi:github" href="https://github.com/safishamsi/graphify#full-command-reference">
    Clone any GitHub repository directly into a local graph structure in one step.
  </Card>
  <Card title="Cross-Repo Merging" icon="mdi:merge" href="https://github.com/safishamsi/graphify#full-command-reference">
    Merge multiple repositories into a single global map while maintaining origin tags.
  </Card>
</CardGroup>

## Integration with AI Agents

Graphify is a "first-class citizen" in modern AI coding environments. After installing the package, register it with your preferred agent:

<Tabs groupId="agent-integration">
  <TabItem value="claude" label="Claude Code" default>
    ```bash
    graphify install
    ```
    On Windows: `graphify install --platform windows`
  </TabItem>
  <TabItem value="codex" label="Codex">
    ```bash
    graphify install --platform codex
    ```
    Also add `multi_agent = true` under `[features]` in `~/.codex/config.toml`.
  </TabItem>
  <TabItem value="opencode" label="OpenCode">
    ```bash
    graphify install --platform opencode
    ```
  </TabItem>
  <TabItem value="cursor" label="Cursor">
    ```bash
    graphify cursor install
    ```
  </TabItem>
  <TabItem value="gemini" label="Gemini CLI">
    ```bash
    graphify install --platform gemini
    ```
  </TabItem>
</Tabs>

Once registered, type `/graphify .` in your agent to map the current folder.

## Setup & Installation

<AccordionGroup>
  <Accordion title="Install" icon="download">
    Download the core package. The PyPI package is `graphifyy` (double-y).

    **Recommended (global install):**
    ```bash
    uv tool install graphifyy
    ```
    **Alternatives:**
    ```bash
    pipx install graphifyy
    pip install graphifyy
    ```
  </Accordion>
  <Accordion title="Verify" icon="check">
    Check the installation and ensure the CLI is in your path.
    ```bash
    graphify --version
    ```
  </Accordion>
  <Accordion title="Cloud Clone (Optional)" icon="github">
    Directly ingest any public GitHub repository.
    ```bash
    graphify clone https://github.com/user/repo
    ```
  </Accordion>
  <Accordion title="Pick Your Platform" icon="account-group">
    Register Graphify with your AI assistant. Run the command for your platform:

    | Platform | Command |
    |----------|---------|
    | Claude Code (Linux/Mac) | `graphify install` |
    | Claude Code (Windows) | `graphify install --platform windows` |
    | Codex | `graphify install --platform codex` |
    | OpenCode | `graphify install --platform opencode` |
    | GitHub Copilot CLI | `graphify install --platform copilot` |
    | VS Code Copilot Chat | `graphify vscode install` |
    | Cursor | `graphify cursor install` |
    | Gemini CLI | `graphify install --platform gemini` |
    | Aider | `graphify install --platform aider` |
    | OpenClaw | `graphify install --platform claw` |
    | Factory Droid | `graphify install --platform droid` |
    | Trae | `graphify install --platform trae` |
    | Hermes | `graphify install --platform hermes` |
    | Kimi Code | `graphify install --platform kimi` |
    | Amp | `graphify amp install` |
    | Kiro IDE/CLI | `graphify kiro install` |
    | Pi coding agent | `graphify install --platform pi` |
    | Devin CLI | `graphify devin install` |
    | Google Antigravity | `graphify antigravity install` |

    After registration, type `/graphify .` in your agent to map the current folder.
  </Accordion>
</AccordionGroup>

## Outputs

Running `/graphify .` produces three files in `graphify-out/`:

```
graphify-out/
├── graph.html       open in any browser — click nodes, filter, search
├── GRAPH_REPORT.md  the highlights: key concepts, surprising connections, suggested questions
└── graph.json       the full graph — query it anytime without re-reading your files
```

## Key Commands

Once registered, use these commands inside your AI assistant:

| Command | Description |
|---------|-------------|
| `/graphify .` | Build graph for current directory |
| `/graphify ./docs --mode deep` | Thorough extraction with richer inferred edges |
| `/graphify ./docs --update` | Re-extract only changed files (saves tokens) |
| `/graphify ./docs --cluster-only` | Rerun community detection on existing graph |
| `/graphify ./docs --no-viz` | Skip HTML, just report + JSON |
| `/graphify ./docs --svg` | Also export `graph.svg` for Notion/GitHub |
| `/graphify ./docs --graphml` | Export for Gephi, yEd |
| `/graphify ./docs --neo4j` | Generate Cypher file for Neo4j |
| `/graphify ./docs --mcp` | Start MCP stdio server for agent access |
| `/graphify ./docs --watch` | Watch folder, auto-rebuild on code changes |
| `/graphify query "question"` | BFS traversal — broad context |
| `/graphify query "question" --dfs` | DFS — trace a specific path |
| `/graphify query "question" --budget 1500` | Cap answer at N tokens |
| `/graphify path "A" "B"` | Shortest path between two concepts |
| `/graphify explain "Concept"` | Explain a single node and its connections |
| `/graphify add <url>` | Fetch a URL (paper, video, tweet) and add to graph |
| `/graphify add <url> --author "Name"` | Tag who wrote it |
| `/graphify add <url> --contributor "Name"` | Tag who added it to the corpus |

## MCP Server

Expose the graph as an MCP server for repeated tool-call access by other agents:

```bash
python3 -m graphify.serve graphify-out/graph.json
```

This exposes tools: `query_graph`, `get_node`, `get_neighbors`, `get_community`, `god_nodes`, `graph_stats`, `shortest_path`.

To configure in Claude Desktop, add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "graphify": {
      "command": "python3",
      "args": ["-m", "graphify.serve", "/absolute/path/to/graphify-out/graph.json"]
    }
  }
}
```

## Git Hook (Auto-Rebuild)

Install a post-commit hook that auto-rebuilds the graph after every commit:

```bash
graphify hook install    # install
graphify hook uninstall  # remove
graphify hook status     # check
```

After every `git commit`, the hook detects which code files changed (via `git diff HEAD~1`), re-runs AST extraction on those files, and rebuilds `graph.json` and `GRAPH_REPORT.md`. Doc/image changes are ignored by the hook — run `/graphify --update` manually for those.

## Honesty Rules

Graphify follows strict transparency principles:

- Never invents an edge. If unsure, uses `AMBIGUOUS`.
- Always shows token cost in the report.
- Never hides cohesion scores — raw numbers are always visible.
- Never runs HTML viz on a graph with more than 5,000 nodes without warning.
- Every edge is tagged `EXTRACTED`, `INFERRED`, or `AMBIGUOUS` with a confidence score.

## Team Collaboration & Git Integration

Graphify is designed for multi-developer workflows where the project graph needs to stay synchronized across parallel branches.

### Storage Location
By default, Graphify stores its persistent data in the `graphify-out/` directory at the root of your project:
- **`graph.json`**: The core structural data (should be committed to Git).
- **`GRAPH_REPORT.md`**: Human-readable summary of architectural insights.
- **`obsidian/`**: The linked wiki vault.

### Handling Merge Conflicts
When multiple developers update the graph in separate PRs, Git normally triggers a conflict on `graph.json`. Graphify solves this with an automated **Git Merge Driver**.

:::tip
Run `graphify hook install` to register the custom merge driver.
:::

The driver ensures that when a merge occurs:
1.  **Union Merging**: It performs a semantic union of the two graph states instead of a line-by-line comparison.
2.  **No Conflict Markers**: It prevents the insertion of `<<<< HEAD` markers that would break the JSON schema.
3.  **Deduplication**: A post-merge pass automatically deduplicates any nodes or edges created by both branches.

## References

- [Official GitHub Repository](https://github.com/safishamsi/graphify)
- [Graphify Labs](https://graphifylabs.ai)
- [Anthropic Claude Code](https://anthropic.com/claude/code)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io)
