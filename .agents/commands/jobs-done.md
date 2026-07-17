---
description: mark a job as done
agent: build
model: opencode/big-pickle
---
# /jobs-done <text-fragment>
Mark a pending job as completed and move it to a Completed Jobs section.

## Instructions
1. Read `$ARGUMENTS` as a text fragment to match against pending job descriptions.
2. Read `memory/MEMORY.md`.
3. Find the `## Pending Jobs Queue` section.
4. Search for a `- [ ]` line whose description contains the text fragment (case-insensitive).
   - If no match found, report: "No matching job found for: `<fragment>`" and list available jobs.
   - If multiple matches found, list all matches with their numbers and ask the user to specify.
5. Remove the matched line from Pending Jobs Queue.
6. Find or create a `## Completed Jobs` section (insert it right after Pending Jobs Queue).
7. Add the job as `- [x] **<priority>**: <description> — done YYYY-MM-DD` (today's date).
8. Write the updated file back.
9. Confirm to user: "Completed: **<priority>**: <description>"
