---
name: install-config
description: Set deliverables base URL in work/paths.md when present. Part of Install. No longer creates or copies paths; work/ is committed.
disable-model-invocation: true
---

# Install Config

Set deliverables URL in paths when work folder is present.

## Inputs

None. Reads repo (git remote) and optional user input if git fails.

## Output

If `work/paths.md` exists: Deliverables base URL set. If install-custom template exists, `SKILL.md` created from it.

## Process

1. **Deliverables base URL** – From repo root run `git remote get-url origin`. If it succeeds, convert to a deliverables base URL (e.g. `https://example.com/org/repo/tree/main/`). If git fails or no origin, ask the user for the deliverables link. If `work/paths.md` exists, update it and set the "Deliverables base URL:" line. If `work/paths.md` is missing, skip (work folder may be added later).

2. **Install-custom** – If `.claude/skills/install-custom/SKILL.md` is missing and `.claude/skills/install-custom/SKILL.md.template` exists, copy the template to `SKILL.md`.

## Reference

[Coordinator](../../agents/coordinator.md) – Install workflow.
