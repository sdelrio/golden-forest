# .opencode/

OpenCode configuration for The Golden Forest. The **Ponytail** plugin ("lazy senior dev" mode, minimal YAGNI-first code) is installed globally from npm as `@dietrichgebert/ponytail`, not vendored here.

## Quick start

```
/ponytail          # activate full mode (default)
/ponytail lite     # light mode — build what's asked, name lazier alternative
/ponytail ultra    # extremist — deletion before addition
/ponytail off      # deactivate
```

Deactivate with `/ponytail off`. The `stop ponytail` and `normal mode` phrases only work under the Claude Code hooks.

These commands come from the global npm plugin - see [How it works](#how-it-works).

## Directory structure

```
.opencode/
├── opencode.json              # Project plugin config
├── plugins/
│   └── graphify.js            # Knowledge graph reminder plugin
├── commands/                  # Project slash commands (check-mdx, jobs, issues, ...)
├── skills/                    # Project-specific skills (non-ponytail)
│   ├── find-skills/
│   └── write-article/
└── plans/                     # Design plans
```

## Modes

| Level | Behavior |
|-------|----------|
| **lite** | Build what's asked, name the lazier alternative in one line |
| **full** | Full ladder: YAGNI → stdlib → native → one line → minimum. Default |
| **ultra** | Deletion before addition, challenges the requirement before building |

## Commands

| Command | What it does |
|---------|-------------|
| `/ponytail [level]` | Switch intensity (lite/full/ultra/off) |
| `/ponytail-review` | Quality review of a change: logic, safety, load, tests, speed, bloat |
| `/ponytail-audit` | Ranked quality audit of the whole repo |
| `/ponytail-debt` | Harvest `shortcut:` comments into a tracked debt ledger |
| `/ponytail-gain` | Measured-impact scoreboard from benchmarks |
| `/ponytail-help` | Quick reference card |

## Configuration

**Default mode resolution** (first match wins):

1. `PONYTAIL_DEFAULT_MODE` environment variable
2. Config file at `~/.config/ponytail/config.json` — `{"defaultMode": "lite"}`
3. Falls back to `full`

**State persistence**: Active mode is stored at `~/.config/opencode/.ponytail-active`.

**Other env vars** (Claude Code hooks only - OpenCode has no toast or status line):
- `PONYTAIL_QUIET_STARTUP=1` - Suppress startup toast
- `PONYTAIL_HIDE_STATUS=1` - Hide status bar indicator

## How it works

Ponytail is a **global npm plugin**, installed once for every project:

```sh
opencode plugin add @dietrichgebert/ponytail@5.2.0
opencode plugin update @dietrichgebert/ponytail
```

It registers its own commands and skills, and hooks `session.hook('context')` / `session.hook('compaction')` to append the active mode's ruleset to the system prompt every turn. `/ponytail <level>` persists the new mode to the state file (it takes effect next turn).

Plugins under `.opencode/plugins/` and `~/.config/opencode/plugins/` are auto-discovered, but only loose `.js`/`.ts` files and directories are picked up (not `.mjs`). Configured entries in `opencode.json` must be npm package names, or local paths starting with `./`, `../`, `/` or `file://`. A bare `plugins/x.js` is read as a package spec and fails to install.

## The `shortcut:` comment convention

When Ponytail takes a deliberate shortcut with a known ceiling, it leaves a marker:

```python
# shortcut: global lock, per-account locks if throughput matters
```

Format: `shortcut: <ceiling>, <upgrade path>`. Older `ponytail:` markers are still recognised.

Track these with `/ponytail-debt`. Check what's still cuttable with `/ponytail-audit`.
