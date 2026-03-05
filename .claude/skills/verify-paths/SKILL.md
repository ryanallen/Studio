---
name: verify-paths
description: Compare work/paths.md to actual paths under work/ and verify they match. If not, hand off to documenter agent for work-paths.
---

# Verify Paths

1. Read `work/paths.md` and infer the allowed tree (work → team → space → project-name).
2. List actual folders under `work/` (e.g. `work/TeamName/`, `work/TeamName/SpaceName/`, `work/TeamName/SpaceName/project-name/`).
3. Verify every path under `work/` matches the pattern and appears in or is consistent with the tree in paths.md; verify paths.md tree includes every existing path.
4. If there is any mismatch (extra paths not in paths.md, or paths.md lists paths that no longer exist), hand off to the **documenter** agent with the [work-paths](.claude/skills/work-paths/SKILL.md) skill to update paths.md.
5. When paths match (or after documenter has updated paths.md), continue to the next step in the Save flow (updater runs save skill).
