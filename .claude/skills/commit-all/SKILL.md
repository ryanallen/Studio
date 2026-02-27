---
name: commit-all
description: Stages all changes since last commit and creates one commit with a title and description. Use when user says "commit everything", "commit with title and description", or "git commit". Does not push.
---

# Commit All

Stage everything since the last commit and create a single commit with a title and description. Do not push.

## Inputs

1. **Title** - Short commit subject line
2. **Description** - Optional body paragraph

If either is missing, ask the user before proceeding.

## Command

```bash
git add -A && git commit -m "Title" -m "Description"
```

## Steps

1. Get title and description from the user (or use what they provided).
2. Run `git add -A` to stage all changes.
3. Run `git commit -m "<title>" -m "<description>"`.
4. Report the result. Do not run `git push`.

## Error Handling

- **Nothing to commit (working tree clean):** Tell the user there are no changes to commit.
- **No commit message:** Do not commit; ask for title and description.
