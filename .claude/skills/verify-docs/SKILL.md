---
name: verify-docs
description: Check doc scope and compare skill triggers to coordinator. Part of Clean up studio. Writes report via document-verification.
triggers: "verify docs, /verify-docs"
disable-model-invocation: true
---

# Verify Docs

Collect the doc set (from paths.md and system docs or user choice), compare each coordinator-referenced skill’s triggers to the coordinator table, then run [document-verification](../document-verification/SKILL.md) to write `.tmp/verification-report.md`.

## Inputs

- **Scope** – If `work/paths.md` exists, read it and collect all doc paths from the tree (e.g. README per project). Also collect system docs: `.claude/**/*.md`, `README.md`, `AGENTS.md`, `CLAUDE.md`, root markdown. If user chose specific paths only, use those.
- **Coordinator** – [.claude/agents/coordinator.md](../../agents/coordinator.md) Single flows table and Workflows (for trigger comparison).

## Output

List of files in scope and any trigger phrase mismatches (skill vs coordinator). Pass to document-verification in the same run; it writes `.tmp/verification-report.md`.

## Process

1. **Scope** – Build the file list from paths.md (if present) and system docs, or from user-selected paths.
2. **Trigger phrases vs coordinator** – For each skill referenced in the coordinator (Single flows or Workflows), read the skill frontmatter `triggers`. Compare to the coordinator Trigger phrases column or Input line for that flow. Record: in skill but not coordinator, or in coordinator but not skill.
3. **Report** – Run [document-verification](../document-verification/SKILL.md) with the files list and trigger mismatches (same run; creates `.tmp/verification-report.md`).

## Reference

[document-verification](../document-verification/SKILL.md) – Writes the report. [Coordinator](../../agents/coordinator.md) – Clean up studio workflow.
