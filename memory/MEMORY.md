# Agent Memory Index

> The Golden Forest (lorien.cloud) — Docusaurus 3.x digital garden + D&D toolkit.
> Load every session. Follow links for detail. Keep under 50 lines.

## Active Projects & Status

| Project | Status | Current Phase | Next Action | File |
|---------|--------|---------------|-------------|------|
| Infra Refactoring | 🟡 In Progress | CSS + Component dedup | Extract shared `BaseCard` | [features/non-content-features.md](features/non-content-features.md) |
| Non-DnD Features | 🟡 Planning | 4 of 5 NOT STARTED | Build `CmdRef` component (reuses AiDashboard pattern) | [features/non-dnd-features.md](features/non-dnd-features.md) |
| DnD Features | 🔴 Not Started | Design phase | Define campaign data schema (`sessions.json`) | [features/dnd-features.md](features/dnd-features.md) |

**Overall: 18/36 features implemented (50%)**

## Pending Jobs Queue

- [x] **High**: Extract `withBrowserOnly` HOC — done 2026-07-17, PR #162
- [x] **High**: Extract shared `CopyButton` — done 2026-07-17, PR #163
- [x] **Medium**: Build `CmdRef` component for CLI command reference — done 2026-07-17, PR #164
- [ ] **Medium**: Build `FreshnessBadge` for stale content detection
- [ ] **Medium**: Convert StatDiceRoller inline styles to CSS module
- [ ] **Low**: Create `.cursorrules` for Cursor users
- [ ] **Low**: Document Ponytail system (`.opencode/` README)
- [ ] **Low**: Add `SECURITY.md` vulnerability reporting policy
- [ ] **Medium**: Copy button icon on AiDashboard doesn't indicate success (no color change or "Copied" message) after clicking
- [ ] **Medium**: CmdRef uses a card, it looks like duplicated form Card component, Can make the card compoment more generic so I don't have duplicated definitions of card

## Completed Jobs

- [x] **High**: Migrate TODO files to `memory/` system — done 2026-07-17
- [x] **High**: Create 6 memory management commands — done 2026-07-17
- [x] **High**: Extract `withBrowserOnly` HOC — done 2026-07-17, PR #162
- [x] **High**: Extract shared `CopyButton` — done 2026-07-17, PR #163

## Recent Decisions

- **2024-02**: Boneyard-js for skeleton loading + XML for char data — [details](decisions/2024-02-dnd-tooling.md)
- **2024-01**: Docusaurus 3.x over Next.js/Astro — [details](decisions/2024-01-architecture-choice.md)

## Memory File Map

- `projects/golden-forest.md` — Stack, conventions, component catalog, build commands
- `features/dnd-features.md` — 5 DnD features (Campaign Journal, Party Dashboard, Achievements, Battle Log, Death Certs)
- `features/non-content-features.md` — 26 infra items (security, CSS, code dedup, AI tooling)
- `features/non-dnd-features.md` — 5 general features (CmdRef, Freshness, Reading List, Tech Radar, Mermaid Playground)
- `decisions/` — Architectural and strategic choices
- `logs/` — Daily session journals

## Available Commands

| Command | Purpose |
|---------|---------|
| `/jobs` | List all pending jobs |
| `/jobs-add <priority> <desc>` | Add a new job to the queue |
| `/jobs-done <text>` | Mark a job as completed |
| `/jobs-archive` | Archive completed jobs > 30 days old |
| `/feature-status` | Scan all feature files, show consolidated table |
| `/memory-sync` | Sync MEMORY.md counts with actual feature file status |

## Session Notes

*Last updated: 2026-07-17*
- Current focus: Extracted shared `CopyButton` (PR #163), fixed ToolDetail icon rendering
- Next quick wins: `BaseCard`, `.cursorrules`, `FreshnessBadge`
- Blockers: None
