---
title: "Interactive Agents"
description: "Terminal-first AI coding agents designed for real-time, human-directed engineering tasks. Covers Claude Code and OpenCode."
tags:
  - ai
  - agents
  - interactive
  - coding
  - claude-code
  - opencode
sidebar_position: 10
---

import Card from '@site/src/components/Card/Card';
import CardGroup from '@site/src/components/Card/CardGroup';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Interactive Agents 💻

Interactive agents are AI coding assistants designed for real-time, human-directed engineering tasks. Unlike autonomous agents that run in the background on schedules, interactive agents require a human present to guide their work — reading, editing, testing, and refactoring code in collaboration with the developer.

## What Makes an Agent Interactive?

The key distinction between interactive and autonomous agents is **user presence and control**:

| Aspect | Interactive Agents | Autonomous Agents |
|---|---|---|
| **User Presence** | Required (human-in-the-loop) | Optional (background operation) |
| **Execution Model** | Prompt → Response → Review | Scheduled triggers, continuous monitoring |
| **Memory** | Session-level or project-level (CLAUDE.md) | Persistent, structured, self-improving |
| **Interfaces** | Terminal, IDE, Chat | Messaging platforms, APIs, dashboards |
| **Best For** | Writing/refactoring code, debugging | 24/7 operations, team workflows, personal automation |

## Claude Code: Anthropic's Agentic CLI

Claude Code is a command-line interface and terminal agent developed by Anthropic. It allows developers to interact with Claude directly from their terminal, enabling agentic coding workflows with direct access to local files, shell commands, and git state.

### Core Advantages

- **Terminal Integration**: Run commands, interpret output, and fix errors directly in your shell
- **File System Access**: Read and write code with full project context
- **Git Awareness**: Understand branch state, commit history, and staged changes
- **Skill Discovery**: Automatically detects skills in `.claude/skills` directory
- **MCP Compatibility**: Supports Model Context Protocol for third-party tools
- **Project Memory**: `CLAUDE.md` provides persistent project-level context

### When to Use Claude Code

- Daily coding tasks and feature development
- Refactoring and debugging with full repo context
- Running tests and fixing errors in real-time
- Exploring unfamiliar codebases with AI guidance
- Teams already using Anthropic's ecosystem

## OpenCode: Provider-Agnostic AI Coding CLI

OpenCode is an open-source command-line interface built for AI-assisted development. It abstracts over 75+ LLM providers behind a single command, letting you bring your own credentials, switch models on demand, and extend behavior through plugins and Agent Skills.

### Core Advantages

- **Provider-Agnostic**: 75+ models across OpenAI, Anthropic, Gemini, Ollama, OpenRouter
- **Plan & Build Modes**: Agent proposes changes for review before executing
- **LSP Integration**: Native Language Server Protocol support in the TUI
- **Security-First**: Granular permission system (read/write/tool access)
- **Skill Discovery**: Scans `.agents/skills` and `.opencode/skills` for reusable workflows
- **MCP Support**: Acts as both MCP client and server
- **Free Model Access**: Google Gemini OAuth plugin for free tier usage

### Agent Modes

| Mode | Flag | Behaviour |
|---|---|---|
| Ask | `-ask` | Read-only — answers questions only |
| Edit | `-edit` | File modifications, no shell commands |
| Safe | `-safe` | Files + restricted shell |
| Agent | `-agent` | Full access — files, shell, and tools |

### When to Use OpenCode

- Teams wanting flexibility across multiple LLM providers
- Budget-conscious developers using free tiers or local models
- Projects requiring LSP integration for code intelligence
- Workflows that benefit from plan-then-execute patterns
- Cross-agent skill sharing via `.agents/skills`

## Comparison: Claude Code vs OpenCode

| Aspect | Claude Code | OpenCode |
|---|---|---|
| **Provider** | Anthropic (Claude only) | 75+ providers (OpenAI, Anthropic, Gemini, etc.) |
| **Cost Model** | Anthropic subscription/API | Bring your own credentials, free tiers available |
| **Agent Modes** | Single mode with permissions | 4 modes: Ask, Edit, Safe, Agent |
| **LSP Integration** | No | Yes (native in TUI) |
| **Skill System** | `.claude/skills` | `.agents/skills` + `.opencode/skills` |
| **MCP Support** | Client only | Client + Server |
| **Free Model Access** | No | Yes (Gemini OAuth plugin) |
| **Best For** | Teams invested in Anthropic ecosystem | Multi-provider flexibility, budget control |

### How They Complement Each Other

Both tools share the same terminal-first philosophy and support the `.agents/skills` convention for cross-agent skill sharing. The most effective setup often uses **Claude Code** for deep Anthropic-specific workflows and **OpenCode** for provider flexibility and free model access. Many teams symlink their skills directories so both agents share the same reusable workflows:

```bash
# Share skills between Claude Code and OpenCode
ln -s "$(pwd)/.agents/skills" .claude/skills
ln -s "$(pwd)/.agents/skills" .opencode/skills
```

## Related Tools

<CardGroup cols={2}>
  <Card title="Claude Code" icon="mdi:console" href="Skills-and-Agents/claude-code">
    Anthropic's terminal-first AI coding assistant with git awareness.
  </Card>
  <Card title="OpenCode" icon="mdi:code-braces" href="Skills-and-Agents/opencode">
    Provider-agnostic AI coding CLI with 75+ models and LSP integration.
  </Card>
</CardGroup>

## References

- [Claude Code Official](https://claude.ai/code) — Anthropic's CLI documentation.
- [OpenCode Official Site](https://opencode.ai) — Documentation and install guides.
- [OpenCode GitHub](https://github.com/sst/opencode) — Source code and issue tracker.
- [ClaudeKit Workflow](./Workflows/ClaudeKit-Workflow.md): Spec-driven AI development methodology.
- [Autonomous Agents](./autonomous-agents.md): OpenFang and OpenSandbox for background operations.
- [Model Context Protocol](https://modelcontextprotocol.io) — MCP specification and server registry.
