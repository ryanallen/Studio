---
name: clean
description: Empty .tmp/. Use after verifying reports or to clear temp files.
triggers: "clean, wipe .tmp, /clean"
---

# Clean

Delete all contents of `.tmp/`. Repo root and everything outside `.tmp/` are untouched.

## Inputs

None.

## Output

`.tmp/` empty. If missing, do nothing. Nothing outside `.tmp/` is modified.

## Process

1. If `.tmp/` exists, delete all contents (files and subdirectories).
2. If `.tmp/` does not exist, do nothing.

## Reference

[document-verification](../document-verification/SKILL.md) writes to `.tmp/`. README documents .tmp and cleanup.
