---
id: rtk
title: RTK (Rust Token Killer)
description: Reducing LLM token consumption by 90% for AI Coding Agents.
tags: [ai-tools, prompt-engineering, token-optimization, rtk, claude-code, opencode]
sidebar_position: 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RTK: Rust Token Killer


When working with AI coding agents like Claude Code, Cursor, or OpenCode integrations, passing raw command line outputs directly to the Large Language Model (LLM) severely inflates your context window with useless noise.

**RTK (Rust Token Killer)** is an open-source, high-performance CLI proxy written in Rust that acts as a middleware between your shell and your AI agent. It compresses command outputs before they hit the context window, resulting in better reasoning, longer chat sessions, and significantly lower API costs.

:::info
Using RTK may reduce Token Consumption for AI Agents by up to 90%
:::

## What is RTK?

RTK intercepts standard developer commands (like `git status`, `ls`, `cargo test`, `npm test` etc.) and filters out verbose boilerplate, redundant whitespace, and irrelevant comments. It then delivers a streamlined summary back to the AI.

By applying heuristic strategies per command type, RTK achieves compression through:

- **Smart Filtering:** Strips comments, ASCII art, and repetitive whitespace.
- **Grouping:** Aggregates error types and collapses file outputs by directory.
- **Truncation:** Cuts out redundancy while keeping the crucial contextual clues.
- **Deduplication:** Groups repeated log lines and appends count summaries.

## Advantages & Token Cost Savings

Every command execution dumps thousands of tokens into your context window. For example, a basic `ls -la` might cost 800 tokens, or a `cargo test` run with passing tests might spam 5,000 tokens of boilerplate. 

**With RTK, the advantages are clear:**

1. **Massive Token Savings:** Real-world metrics indicate a typical saving of **60% to 90%** of tokens over standard API costs. For instance, filtering `cargo test` drops output volume by 90%, leaving only the essential warnings/errors the LLM actually needs.
2. **Extended Context Window:** Removing CLI noise prevents your AI session from hitting rate limits or context overflow early. Instead of the agent constantly restarting or losing the thread, your coding sessions can last significantly longer.
3. **Improved Reasoning:** LLMs get distracted by non-essential text. Providing dense, relevant signals directly improves the AI's ability to navigate your codebase effectively.

## Token Saving Statistics

RTK includes a built-in analytics feature so you can prove the gains for yourself. You can easily visualize how much context pollution you've avoided.

- `rtk gain`: Displays your token savings summary statistics.
- `rtk gain --graph`: Shows an ASCII graph of savings over the last 30 days.
- `rtk gain --history`: Lists your recent command history and individual token reduction performance.
- `rtk discover`: Finds missed saving opportunities by analyzing past projects.

## Setup Guide

Getting RTK up and running across different AI agent ecosystems is straightforward.

### 1. Installation

<Tabs>
  <TabItem value="mac" label="Homebrew (macOS/Linux)" default>
    ```bash
    brew install rtk
    ```
  </TabItem>
  <TabItem value="script" label="Install Script">
    ```bash
    curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh
    ```
    *(Ensure `~/.local/bin` is in your environment `PATH`.)*
  </TabItem>
</Tabs>

### 2. Integration with AI Tools (Claude Code, OpenCode)

RTK uses an initialization command to set up hooks for your preferred platform. This interceptor rewrites native shell commands automatically.

<Tabs>
  <TabItem value="claude" label="Claude Code" default>
    This sets up global `PreToolUse` hooks suitable for Claude Code (which is the default).
    ```bash
    rtk init -g
    ```
  </TabItem>
  <TabItem value="opencode" label="OpenCode">
    For other CLI-based AI tools, OpenCode variants, or custom workflows that execute shell commands on your behalf, you can initialize platform-specific agents:
    ```bash
    rtk init -g --opencode
    ```
  </TabItem>
</Tabs>

Once installed and initialized, the hook transparently intercepts typical Bash tool calls (e.g., converting `git status` under the hood to `rtk git status`). The AI agent continues to execute the command natively but receives the token-optimized response.

:::note Note on Built-in Tools
If your agent (like **Claude Code**) uses internal built-in functions (e.g., internal `Read`, `Grep`, `Glob`) rather than hitting the Bash shell, those run unmodified. To get optimized output, instruct your AI to run shell versions (`cat`, `rg`, `find`) or use RTK explicitly (`rtk read`, `rtk grep`).
:::

## References

Always keep an eye on the official projects to track new supported commands and integrations:

- **RTK App Documentation & Showcase:** [https://www.rtk-ai.app](https://www.rtk-ai.app)
- **GitHub Repository:** [https://github.com/rtk-ai/rtk](https://github.com/rtk-ai/rtk)
