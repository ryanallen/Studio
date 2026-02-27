---
name: commit-all
description: Stages all changes since last commit and creates one commit with a title and description. Use when user says "commit everything", "commit with title and description", or "git commit". Does not push.
---

# Commit All

Stage everything since the last commit and create a single commit with a title and description. Do not push.

## Inputs

**Title and description:** You must derive these from the work done (files changed, what was added or fixed). Do not ask the user for a title or description unless they have already given one or the changes are too ambiguous to summarize. Inspect the diff or changed files to write a concise subject line and an optional body.

## Command

```bash
git add -A && git commit -m "Title" -m "Description"
```

## Steps

1. Run `git status` and inspect what changed. Derive a short title and optional description from the changes.
2. Run `git add -A` to stage all changes.
3. Run `git commit -m "<title>" -m "<description>"`.
4. Report the result. Do not run `git push`.

## Error Handling

- **Nothing to commit (working tree clean):** Tell the user there are no changes to commit.
- **Cannot infer message:** Only then ask the user for a title (and optional description).
