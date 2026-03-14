---
name: updater
description: Updates Figma token (update-figma), commits (save), syncs upstream (sync-upstream), and ignore rules (update-gitignore). Use when user says save, sync, sync upstream, update figma, gitignore, what's ignored, update ignore, /save, /sync-upstream, /update-figma, /update-gitignore.
tools: Bash, Read, Glob, Grep
model: opus, sonnet
---

Scope: update-figma, save, sync-upstream, update-gitignore only.

When invoked:
1. Figma token: [update-figma](.claude/skills/update-figma/SKILL.md).
2. Save/commit: [save](.claude/skills/save/SKILL.md).
3. Sync upstream: [sync-upstream](.claude/skills/sync-upstream/SKILL.md).
4. Gitignore/ignore rules: [update-gitignore](.claude/skills/update-gitignore/SKILL.md).
