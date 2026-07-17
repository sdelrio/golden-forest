---
description: scan feature status across all feature files
agent: build
model: opencode/big-pickle
---
# /feature-status
Scan all feature files and display a consolidated status summary.

## Instructions
1. Read all three feature files:
   - `memory/features/non-content-features.md`
   - `memory/features/non-dnd-features.md`
   - `memory/features/dnd-features.md`
2. For each file, count lines containing `DONE` vs `NOT STARTED` (or any other status tags).
3. Display a consolidated summary:

```
## Feature Status Summary

| Area | Done | Not Started | Total | % Complete |
|------|------|-------------|-------|------------|
| Infrastructure | 14 | 12 | 26 | 54% |
| Non-DnD | 1 | 4 | 5 | 20% |
| DnD | 0 | 5 | 5 | 0% |
| **Total** | **15** | **21** | **36** | **42%** |
```

4. Below the table, list any features that changed status since last check (optional: compare against previous run or MEMORY.md).
5. Identify the top 3 "quick wins": NOT STARTED features with Low complexity.
