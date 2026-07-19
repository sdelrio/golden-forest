---
description: list pending jobs
agent: build
---
# /jobs
Display all pending jobs from the agent memory queue.

## Instructions
1. Read `memory/MEMORY.md` and extract all `- [ ]` items from the "Pending Jobs Queue" section.
2. Parse each line for priority (High/Medium/Low tag) and description.
3. Group and display as a table:

```
## Pending Jobs

| # | Priority | Description |
|---|----------|-------------|
| 1 | High     | Extract `withBrowserOnly` HOC |
| 2 | Medium   | Build `CmdRef` component |
| ... | ...    | ... |
```

4. Show total count at the bottom: `X pending jobs (Y High, Z Medium, W Low)`.
5. If no jobs exist, report: "No pending jobs."
