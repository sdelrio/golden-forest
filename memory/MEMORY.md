# Agent Memory Index

> The Golden Forest (lorien.cloud) — Docusaurus 3.x digital garden + D&D toolkit.
> Load every session. Follow links for detail. Keep under 50 lines.

## Active Projects & Status

| Project | Status | Current Phase | Next Action | File |
|---------|--------|---------------|-------------|------|
| Infra Refactoring | 🟢 On Track | Nearing Completion (85%) | Build CategoryFilter or DndSkeleton wrapper | [features/non-content-features.md](features/non-content-features.md) |
| Non-DnD Features | 🟡 In Progress | In Progress (60%) | Build Personal Reading List or Tech Radar | [features/non-dnd-features.md](features/non-dnd-features.md) |
| DnD Features | 🔴 Not Started | Not Started (0%) | Define campaign data schema (`sessions.json`) | [features/dnd-features.md](features/dnd-features.md) |

**Overall: 26/37 features implemented (70%)**

## Completed Jobs

- [x] **Medium**: Convert StatDiceRoller inline styles to CSS module — done 2026-07-18, PR #165
- [x] **Low**: Create `.cursorrules` for Cursor users — done 2026-07-18
- [x] **Low**: Document Ponytail system (`.opencode/` README) — done 2026-07-18, PR #167
- [x] **Low**: Add `SECURITY.md` vulnerability reporting policy — done 2026-07-18
- [x] **Medium**: Copy button icon on AiDashboard doesn't indicate success (no color change or "Copied" message) after clicking — done 2026-07-18, PR #172
- [x] **Medium**: CmdRef uses a card, it looks like duplicated form Card component, Can make the card compoment more generic so I don't have duplicated definitions of card — done 2026-07-18, PR #174
- [x] **Medium**: Configure docusaurus-mdx-checker to ignore paths via config instead of output via make check. Paths to ignore: graphify-out/, memory/, node_modules/, local_prompts/ — done 2026-07-18, PR #173
- [x] **Medium**: Build `FreshnessBadge` for stale content detection — done 2026-07-18
- [x] **Low**: Archive stale plan files (5.6) — done 2026-07-18
- [x] **Medium**: Disable (by commenting if possible) the blog top menu option — done 2026-07-18, PR #175

## Recent Decisions

- **2024-02**: Boneyard-js for skeleton loading + XML for char data — [details](decisions/2024-02-dnd-tooling.md)
- **2024-01**: Docusaurus 3.x over Next.js/Astro — [details](decisions/2024-01-architecture-choice.md)

## Memory File Map

- `projects/golden-forest.md` — Stack, conventions, component catalog, build commands
- `features/dnd-features.md` — 5 DnD features (Campaign Journal, Party Dashboard, Achievements, Battle Log, Death Certs)
- `features/non-content-features.md` — 27 infra items (security, CSS, code dedup, AI tooling)
- `features/non-dnd-features.md` — 5 general features (CmdRef, Freshness, Reading List, Tech Radar, Mermaid Playground)
- `decisions/` — Architectural and strategic choices
- `logs/` — Daily session journals

## Available Commands

| Command | Purpose |
|---------|---------|
| `/jobs` | List all pending jobs |
| `/jobs-add <priority> <desc>` | Add a new job to the queue |
| `/jobs-done <text>` | Mark a job as completed |
| `/jobs-archive` | Archive completed jobs > 14 days old |
| `/job-prepare <#>` | **Must execute ALL steps in order**: 1) Plan 2) `git checkout -b feat/<scope>` 3) Implement 4) `make check` 5) Commit 6) confirm manual test 7) update memory/ 8) `git push -u origin <branch>` 9) `gh pr create` |
| `/feature-status` | Scan all feature files, show consolidated table |
| `/memory-sync` | Sync MEMORY.md counts with actual feature file status |

## Session Notes

*Last updated: 2026-07-19*
- /memory-sync: Recalibrated counts. non-content 23/27 (85%), overall 26/37 (70%).
- CopyButton icon variant feedback fix (PR #172): icon swaps to checkmark + green color + tooltip on copy. Initially tooltip was clipped by parent overflow; fixed with `position: fixed` + `getBoundingClientRect()`.
- Blockers: None
