---
name: commit-all
description: Stage all changes since last commit and create one commit with a title and description. Use when user says "commit", "commit all", or /commit-all. Does not push. In Claude Code and Cursor, /skills lists all.
---

# Commit All

Stage everything since the last commit and create a single commit with a title and description. Do not push. Each run is one commit; run it again after more changes to create another commit. Multiple commits are fine; push them later with sync.

## Inputs

**Title and description:** You must derive these from the work done (files changed, what was added or fixed), don't ask the user for them. If needed, inspect the diff or changed files to write them.

**Scope:** By default stage all changes (`git add -A`). If the user asks to commit only specific file(s) or path(s), stage only those then commit (e.g. "commit just README" → `git add README.md` then commit).
## Command

```bash
git add -A && git commit -m "Title" -m "Description"
```

## Steps

1. Run `git status` and inspect what changed. If the user specified file(s) or path(s) to commit, stage only those; otherwise run `git add -A`.
2. Run `git commit -m "<title>" -m "<description>"` (derive title and description from staged changes).
3. Report the result. Do not run `git push`.

## Error Handling

- **Nothing to commit (working tree clean):** Tell the user there are no changes to commit.
- **Cannot infer message:** Only then ask the user for a title (and optional description).
