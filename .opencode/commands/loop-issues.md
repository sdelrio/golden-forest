---
description: loop over open GitHub issues, addressing each in a subagent with a PR
agent: build
---
# /loop-issues [--label <label>] [--limit <n>]
Loop over open GitHub issues (optional `--label` filter and `--limit`), addressing each in a subagent with a PR, waiting for manual review before merging.

## Instructions
1. Read `.agents/issue-tracker.md` and `.agents/triage-labels.md` for conventions.
2. Parse `$ARGUMENTS`:
   - `--label <label>`: only process issues with this label (e.g. `ready-for-agent`).
   - `--limit <n>`: max issues to process per run (default: 3).
3. List matching open issues (omit the `--label` flag entirely if not provided):
   ```
   gh issue list --state open [--label "<label>"] --limit <n> \
     --json number,title,labels,assignees --jq '[.[] | {number, title}]'
   ```
   - Skip issues that already have an assignee other than you.
   - If none match, report and stop.
4. For each issue, one at a time and in order:
   a. Claim it: `gh issue edit <n> --add-assignee @me`.
   b. Launch a **subagent** (`task` tool, `general`) with a prompt containing:
      - The issue number, title, body and comments (`gh issue view <n> --comments` output).
      - Instruction to follow the repo `AGENTS.md` conventions.
      - Steps: plan → branch `fix/issue-<n>` from master → implement → run `task check` and `task build` → commit (Conventional Commits) → push → `gh pr create` with `closes #<n>` in the body.
      - Tell the subagent to return the PR number/URL, files changed, and validation results. It must NOT merge.
   c. Present the PR to the user: link, summary of changes, checks status (`gh pr checks <pr>`).
   d. **Review gate**: STOP and wait for explicit user approval. Do not continue to the next issue until the user says how to proceed (merge, request changes, or skip).
   e. On approval to merge: ask whether to `gh pr merge --squash` (never merge without confirmation). After merge, verify issue `<n>` auto-closed; otherwise close it manually with a comment.
5. After the loop ends (or is interrupted), print a session summary:

```
| Issue | PR | Status (merged / pending-review / skipped) |
```
