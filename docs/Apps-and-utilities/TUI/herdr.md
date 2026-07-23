---
title: "Herdr"
description: "A modern terminal multiplexer with built-in AI agent support"
tags:
  - CLI
  - terminal
  - tmux
  - AI agents
  - TUI
---

# Herdr

[Herdr](https://herdr.dev) is a modern terminal multiplexer — a tmux "rewrite" with mouse-first UX, a sidebar dashboard, and built-in detection for AI coding agents like OpenCode, Claude Code, Codex, and more. It keeps your panes alive in a background server, so you can detach and reattach without losing state.

**Docs:** [herdr.dev/docs](https://herdr.dev/docs/) · **GitHub:** [github.com/ogulcancelik/herdr](https://github.com/ogulcancelik/herdr)

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="homebrew" label="Homebrew" default>

```bash
brew install herdr
```

  </TabItem>
  <TabItem value="curl" label="One-liner installer">

```bash
curl -fsSL https://herdr.dev/install.sh | sh
```

  </TabItem>
  <TabItem value="nix" label="Nix">

```bash
nix run github:ogulcancelik/herdr
```

  </TabItem>
</Tabs>

### Updating

If you installed Herdr with the curl installer (not Homebrew or Nix), update with:

```bash
herdr update
```

Herdr checks for new releases and notifies you in the app. If a running session uses an old server version, stop it with `herdr server stop` and run `herdr` again.

## Configuring Agents

Herdr detects agents automatically and tracks their state (idle, working, blocked) in the sidebar. Install integrations for richer state reporting and session restore.

import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

<Tabs>
  <TabItem value="opencode" label="OpenCode" default>

OpenCode gets full lifecycle state via a plugin:

```bash
herdr integration install opencode
```

This writes a plugin to `~/.config/opencode/plugins/herdr-agent-state.js` that reports `idle`, `working`, `blocked` while OpenCode runs. It also enables session restore — after a Herdr server restart, resume with `opencode --session <id>`.

  </TabItem>
  <TabItem value="claude" label="Claude Code">

Claude Code gets session identity via a hook:

```bash
herdr integration install claude
```

This writes `hooks/herdr-agent-state.sh` to `~/.claude/` and updates `settings.json`. The hook reports session identity for restore. Claude Code state still comes from Herdr's screen manifest detection (the integration does not author lifecycle state).

  </TabItem>
</Tabs>

## Using Herdr Skill for Subagents

Herdr ships a reusable agent skill file that teaches coding agents how to control Herdr from inside a pane. Install it and your agent can:

- Inspect workspaces, tabs, panes, and neighboring agents
- Split panes and run commands without stealing focus
- Read pane output and recent logs
- Wait for servers, tests, or another agent to finish
- Start helper agents in sibling panes

### Install

```bash
npx skills add ogulcancelik/herdr --skill herdr -g
```

### Safety

The skill only activates when `HERDR_ENV=1` is set — meaning the agent is running inside a Herdr pane. If that env var is missing, the agent stops and reports it is not in a Herdr-managed pane.

### Usage

After installation, start any agent inside Herdr:

```bash
herdr
claude   # or opencode, codex, etc.
```

The agent picks up the skill and can now coordinate multi-agent workflows across panes.

## Separate Sessions for Work and Personal Projects

Named sessions let you run independent Herdr servers with separate panes, tabs, workspaces, and sockets. Perfect for isolating work and personal projects.

<Steps>
  <Step title="Create and attach to named sessions">

```bash
herdr session attach work
herdr session attach side-project
```

  </Step>
  <Step title="List sessions">

```bash
herdr session list
```

  </Step>
  <Step title="Stop or delete a session">

```bash
herdr session stop work
herdr session delete side-project
```

  </Step>
</Steps>

Each named session is fully independent — they share only the global config file. You can have one session running work agents and another running personal projects, each with their own layout and pane history.

## Customization

Herdr works without a config file. Add one when you want custom keys, themes, sidebar layouts, or notifications.

### Config file location

```
~/.config/herdr/config.toml
```

### Set a theme

```toml
[theme]
name = "solarized"
```

### Custom keybindings

```toml
[keys]
prefix = "ctrl+b"
new_tab = "prefix+c"
split_horizontal = "prefix+minus"
```

### Notifications for background agents

```toml
[ui.toast]
delivery = "system"
```

### Reload config

```bash
herdr server reload-config
```

For every available setting, see the [Config reference](https://herdr.dev/docs/config-reference/).
