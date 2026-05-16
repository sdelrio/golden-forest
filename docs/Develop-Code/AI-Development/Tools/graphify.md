---
title: "Graphify"
description: "Transform any folder into a navigable knowledge graph with 71.5x token efficiency."
tags: [ai, tools, knowledge-graph, obsidian, claude-code]
sidebar_position: 50
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeGroup from '@site/src/components/CodeGroup/CodeGroup';
import Steps from '@site/src/components/Steps/Steps';
import Accordion from '@site/src/components/Accordion/Accordion';

# Graphify: Folder-to-Knowledge-Graph

One command. Any folder. Full knowledge graph.

## Summary

Graphify is a powerful tool designed to turn any directory—be it a codebase, a research folder, or a collection of PDFs—into a fully navigable knowledge graph. By mapping concept clusters and relationships, it provides a structured way for both humans and AI agents to reason over large amounts of data without the overhead of vector databases or complex configurations.

## Core Advantages & Efficiency

The most significant breakthrough of Graphify is its **token efficiency**. It offers a completely different paradigm for how AI agents reason over large codebases.

:::info
**71.5x fewer tokens** per query compared to reading raw files.
:::

- **Zero Config**: No vector database, no setup, and no complex configuration files required.
- **Multi-Format Support**: Handles code in 13 programming languages, PDFs, Markdown files, and even images via Claude Vision.
- **Automated Outputs**: Generates a navigable knowledge graph, an Obsidian vault with backlinked articles, and a wiki starting at `index.md`.

## Key Capabilities

You can query your folder in plain English to uncover deep connections:

- **Structural Analysis**: "What calls this function?"
- **Concept Mapping**: "What connects these two concepts?"
- **Impact Assessment**: "What are the most important nodes in this project?"

## Setup & Installation

Install Graphify in a single line and integrate it with your workflow.

<CodeGroup>

```bash title="Install"
pip install graphify && graphify install
```

```bash title="Usage"
# Inside Claude Code
/graphify [folder_path]
```

</CodeGroup>

## Step-by-Step Usage Guide

<Steps>

1.  **Install the tool**: Run `pip install graphify && graphify install` in your terminal.
2.  **Open Claude Code**: Launch your Claude Code terminal interface.
3.  **Run the command**: Type `/graphify` followed by the path to the folder you want to analyze.
4.  **Wait for processing**: Graphify will scan the directory, identify concept clusters, and build the graph.
5.  **Explore the output**:
    *   Open the generated **Obsidian vault** to see backlinked articles.
    *   Navigate the **Knowledge Graph** to visualize dependencies.
    *   Ask **Plain English Q&A** questions to Claude about the project structure.

</Steps>

## References

- [Official GitHub Repository](https://github.com/safishamsi/graphify)
- [Claude Code Integration](https://anthropic.com/claude/code)
