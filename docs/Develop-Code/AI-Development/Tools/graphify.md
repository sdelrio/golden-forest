---
title: "Graphify"
description: "Transform any folder or repository into a navigable knowledge graph with 71.5x token efficiency and MCP support."
tags: [ai, tools, knowledge-graph, obsidian, claude-code, mcp, cursor]
sidebar_position: 50
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
- **Multi-Format Support**: Handles 13+ programming languages, PDFs, Markdown, and images via Claude Vision.
- **Incremental Growth**: Built-in data-loss protection and `build_merge()` functionality allow for safe, incremental graph expansion.

## Advanced Capabilities

Graphify has evolved from a simple folder scanner into a complete repository management tool.

<CardGroup cols={2}>
  <Card title="Direct Repo Ingestion" icon="mdi:github" href="https://github.com/safishamsi/graphify/releases/tag/v0.5.0#user-content-clone-any-github-repo-directly">
    Clone any GitHub repository directly into a local graph structure in one step.
  </Card>
  <Card title="Cross-Repo Merging" icon="mdi:merge" href="https://github.com/safishamsi/graphify/releases/tag/v0.5.0#user-content-cross-repo-knowledge-graphs">
    Merge multiple repositories into a single global map while maintaining origin tags.
  </Card>
</CardGroup>

## Integration with AI Agents

Graphify is a "first-class citizen" in modern AI coding environments.

<Tabs groupId="agent-integration">
  <TabItem value="claude" label="Claude Code" default>
    Used as a built-in slash command for rapid project mapping.
    ```bash
    /graphify [folder_path]
    ```
  </TabItem>
  <TabItem value="cursor" label="Cursor / VS Code">
    Integrate Graphify via the **MCP (Model Context Protocol)** server for real-time hot-reloading.
    ```bash
    graphify mcp --port 8080
    ```
    *Add the URL to your Cursor/VS Code MCP settings.*
  </TabItem>
  <TabItem value="opencode" label="OpenCode">
    Register Graphify as a global capability for OpenCode sessions.
    ```bash
    graphify install --opencode
    ```
  </TabItem>
  <TabItem value="gemini" label="Gemini CLI">
    Automatic hooks for Gemini-based workflows.
    ```bash
    graphify install --gemini
    ```
  </TabItem>
</Tabs>

## Setup & Installation

<AccordionGroup>
  <Accordion title="Install" icon="download">
    Download the core package and initialize environment hooks.
    ```bash
    pip install graphify && graphify install
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
</AccordionGroup>

## Step-by-Step Usage Guide

<Steps>
  <Step title="Initialize">
    Install the tool using `pip install graphify`. Run `graphify install` to set up environment hooks.
  </Step>
  <Step title="Build the Graph">
    Point it at your project: `graphify build ./my-project`. Use `--merge` if adding to an existing graph.
  </Step>
  <Step title="Start MCP Server">
    For live interaction in Cursor, run `graphify mcp`. The server will hot-reload whenever the graph is rebuilt.
  </Step>
  <Step title="Explore in Obsidian">
    Open the generated `.graphify/obsidian` folder to browse your project as a linked wiki.
  </Step>
</Steps>

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
- [Anthropic Claude Code](https://anthropic.com/claude/code)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io)
