---
name: work-paths
description: Update work/paths.md path tree with new paths and remove paths that no longer exist. Then hand off to updater to run save skill.
---

# Work Paths

1. Compare actual paths under `work/` to the tree in `work/paths.md`.
2. Update `work/paths.md`: add any new team/space/project-name paths that exist on disk; remove any tree entries that no longer exist.
3. Keep the same format: "Only:" line unchanged; tree matches existing paths.md style (one level of indent per depth).
4. When done, hand off to the **updater** agent to run the [save](../skills/save/SKILL.md) skill.
