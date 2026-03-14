---
name: verify-task
description: Run before any Read, Write, Grep, or Shell. Appends a task section to .tmp/task-checklist.md with the flow steps; after each skill, strikethrough and add a note. Use when starting a task or when coordinator flows say "Verify task".
disable-model-invocation: true
---

# Verify Task

Run the checklist **before** any Read, Write, Grep, or Shell. That writes a new section to `.tmp/task-checklist.md` with the steps for this task. After you run each skill in the flow, strikethrough that step in the current task section and add a short note. Do not run the next skill until the checklist is updated.

## Inputs

- **Task summary** – The user request or a short summary. Passed to the checklist script so it can pick the flow and steps.
- **Steps** – The script always emits `verify-task` first, then `document-voice`, then the flow’s steps (from [scripts/checklist.ts](scripts/checklist.ts), matching [coordinator-flows](../../agents/references/coordinator-flows.md)). One line per skill. Example for Save: `verify-task`, `document-voice`, `verify-paths`, `document-paths` (if needed), `save`. Example for Refine: `verify-task`, `document-voice`, `research`, `document`, `document-github`.

## Output

- **First run:** A new section in `.tmp/task-checklist.md` (create file and `.tmp/` if missing). Section = heading `## YYYY-MM-DD HH:MM — {summary}`, then one line per skill. Do not delete or overwrite earlier sections.
- **During the task:** After each skill you run, strikethrough that skill in the **current task section** (last heading) and add a brief note. Only the current section is updated.

## Process

1. **Run the checklist** – `npm run checklist -- "<user request or summary>"` (or `/checklist`). The script appends a new section with the steps for the matched flow. Same message → same flow and steps (deterministic).
2. **Read the current section** – The last `## …` block in `.tmp/task-checklist.md` is the current task. All steps are listed there.
3. **After each skill** – When you finish a skill in the flow, open the checklist, find that step in the current section, strikethrough it and add a note (e.g. `- ~~document-voice~~ — Applied.`). Do not start the next skill until the checklist is updated.
4. **Scope** – Only edit the current task section. Do not change earlier sections or remove content. Documenter may add a **Files in scope** block to the current section (files touched, then per-file checkoff with notes).

**When to run:** Before any Read, Write, Grep, or Shell. Coordinator flows say "Verify task" at the start of each flow; run the checklist then, and after each step strikethrough + note.

## Reference

Coordinator Step 1 runs this. **Command:** `npm run checklist -- "<summary>"` or `/checklist`. [scripts/checklist.ts](scripts/checklist.ts). [coordinator-flows](../../agents/references/coordinator-flows.md). [deterministic-workflows](../../agents/references/deterministic-workflows.md).
