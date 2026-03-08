---
name: document-paths
description: Sync work/paths.md tree with actual paths under work/. Add new paths, remove missing ones, then run Save step 3.
triggers: "sync paths, update paths, document paths, /document-paths"
disable-model-invocation: true
---

# Document Paths

Sync the path tree in `work/paths.md` to match disk under `work/`, then run the Save workflow commit step.

## Inputs

- **Scope** – Paths under `work/`. Paths file: `work/paths.md`. If paths.md is omitted, use repo root and existing paths file.

## Output

`work/paths.md` updated; then [Coordinator](../../agents/coordinator.md) Save step 3: updater runs [save](../save/SKILL.md) (stage and commit).

## Process

1. **Compare** – Paths under `work/` on disk vs the tree in `work/paths.md`.
2. **Update** – Add entries for new paths; remove entries for paths that no longer exist.
3. **Format** – Match existing structure (see `work/paths.md` or `work/paths.md.template`).
4. **Save** – Run Save step 3 (updater → save) so changes are committed.

## Reference

[Coordinator](../../agents/coordinator.md) – Save workflow.
