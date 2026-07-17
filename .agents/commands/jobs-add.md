---
description: add a job to the pending queue
agent: build
model: opencode/big-pickle
---
# /jobs-add <priority> <description>
Add a new job to the Pending Jobs Queue in MEMORY.md.

## Instructions
1. Parse `$ARGUMENTS` for priority and description. First word is priority (`high`, `medium`, `low`), rest is description.
   - Example: `/jobs-add high Fix broken image links in blog posts`
   - Priority: `high`, Description: `Fix broken image links in blog posts`
2. If no priority given, default to `medium`.
3. Read `memory/MEMORY.md`.
4. Find the `## Pending Jobs Queue` section.
5. Insert a new `- [ ] **<priority>**: <description>` line at the end of the list (before the next `##` section).
6. Write the updated file back.
7. Confirm to user: "Added job: **<priority>**: <description>"
