---
description: archive old completed jobs
agent: build
model: opencode/big-pickle
---
# /jobs-archive
Move completed jobs older than 30 days from MEMORY.md to an archive file.

## Instructions
1. Read `memory/MEMORY.md`.
2. Find the `## Completed Jobs` section.
3. Parse each `- [x]` line for the completion date (after `— done YYYY-MM-DD`).
4. Calculate the age of each completed job in days.
5. If any jobs are older than 30 days:
   a. Create `memory/logs/completed.md` if it doesn't exist (append if it does).
   b. Move the old jobs to `memory/logs/completed.md` under a `## Archived YYYY-MM` heading (group by month).
   c. Remove them from MEMORY.md.
   d. Report: "Archived X jobs to memory/logs/completed.md"
6. If no jobs are older than 30 days, report: "No jobs ready for archival (all < 30 days old)."
7. Write the updated MEMORY.md back.
