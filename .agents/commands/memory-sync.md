---
description: sync MEMORY.md counts with feature files
agent: build
model: opencode/big-pickle
---
# /memory-sync
Recalibrate MEMORY.md status table and overall count to match actual feature files.

## Instructions
1. Read all three feature files:
   - `memory/features/non-content-features.md` — count `DONE` and `NOT STARTED` in status columns
   - `memory/features/non-dnd-features.md` — same
   - `memory/features/dnd-features.md` — same
2. For each file, calculate: `Done / Total` and percentage.
3. Read `memory/MEMORY.md`.
4. Find the `## Active Projects & Status` table.
5. Update each row's status emoji based on completion:
   - 🟢 On Track: ≥ 80% done
   - 🟡 In Progress: 1%–79% done
   - 🔴 Not Started: 0% done
6. Update the "Current Phase" column based on progress:
   - 0%: "Not Started"
   - 1–30%: "Early Stage"
   - 31–70%: "In Progress"
   - 71–99%: "Nearing Completion"
   - 100%: "Complete"
7. Update the overall count line: `**Overall: X/36 features implemented (Y%)**`
8. Write the updated MEMORY.md back.
9. Report changes: "Updated MEMORY.md: infra 14→14, overall 15/36 (42%) — no changes" or list what changed.
