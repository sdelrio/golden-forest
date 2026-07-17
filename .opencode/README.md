# .opencode/

OpenCode configuration for The Golden Forest. Contains the **Ponytail** plugin — a "lazy senior dev" mode that enforces minimal, YAGNI-first code.

## Quick start

```
/ponytail          # activate full mode (default)
/ponytail lite     # light mode — build what's asked, name lazier alternative
/ponytail ultra    # extremist — deletion before addition
/ponytail off      # deactivate
```

Deactivate anytime with `stop ponytail` or `normal mode`.

## Directory structure

```
.opencode/
├── opencode.json              # Plugin registration
├── plugins/
│   ├── ponytail.mjs           # Main plugin entry point
│   ├── ponytail-frontmatter.cjs  # Command .md frontmatter parser
│   ├── graphify.js            # Knowledge graph plugin (unrelated)
│   ├── command/               # Slash command definitions
│   │   ├── ponytail.md
│   │   ├── ponytail-audit.md
│   │   ├── ponytail-debt.md
│   │   ├── ponytail-gain.md
│   │   ├── ponytail-help.md
│   │   └── ponytail-review.md
│   ├── hooks/                 # Shared hooks (used by Claude Code, Codex, pi too)
│   │   ├── ponytail-config.js      # Mode resolution (env → config → default)
│   │   ├── ponytail-instructions.js # System prompt builder
│   │   ├── ponytail-activate.js
│   │   ├── ponytail-mode-tracker.js
│   │   ├── ponytail-runtime.js
│   │   ├── ponytail-statusline.sh  # Bash status line indicator
│   │   ├── ponytail-statusline.ps1 # PowerShell status line indicator
│   │   └── ponytail-subagent.js
│   └── skills/                # Detailed mode/command documentation
│       ├── ponytail/SKILL.md
│       ├── ponytail-audit/SKILL.md
│       ├── ponytail-debt/SKILL.md
│       ├── ponytail-gain/SKILL.md
│       ├── ponytail-help/SKILL.md
│       └── ponytail-review/SKILL.md
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
| `/ponytail-review` | Over-engineering review of current changes |
| `/ponytail-audit` | Whole-repo over-engineering audit |
| `/ponytail-debt` | Harvest `ponytail:` comments into a tracked debt ledger |
| `/ponytail-gain` | Measured-impact scoreboard from benchmarks |
| `/ponytail-help` | Quick reference card |

## Configuration

**Default mode resolution** (first match wins):

1. `PONYTAIL_DEFAULT_MODE` environment variable
2. Config file at `~/.config/ponytail/config.json` — `{"defaultMode": "lite"}`
3. Falls back to `full`

**State persistence**: Active mode is stored at `~/.config/opencode/.ponytail-active`.

**Other env vars**:
- `PONYTAIL_QUIET_STARTUP=1` — Suppress startup toast
- `PONYTAIL_HIDE_STATUS=1` — Hide status bar indicator

## How it works

1. `opencode.json` loads `plugins/ponytail.mjs` as a server plugin
2. On each chat turn, `experimental.chat.system.transform` reads the persisted mode and appends Ponytail instructions to the system prompt
3. `/ponytail <level>` writes the new mode to the state file (takes effect next turn)
4. Commands in `plugins/command/` are registered via the `config` hook and parsed by `ponytail-frontmatter.cjs`
5. Skills in `plugins/skills/` provide the detailed behavioral definitions for each mode

The `hooks/` directory contains shared code used across Claude Code, Codex, Pi, and OpenCode — all read from one source of truth.

## The `ponytail:` comment convention

When Ponytail takes a deliberate shortcut with a known ceiling, it leaves a marker:

```python
# ponytail: global lock, per-account locks if throughput matters
```

Format: `ponytail: <ceiling>, <upgrade path>`

Track these with `/ponytail-debt`. Check what's still cuttable with `/ponytail-audit`.
