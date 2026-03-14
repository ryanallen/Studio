# Coordinator Flows

Fixed sequences. Each step is "run /command" or "delegate to agent". Coordinator Step 1 is verify task (run `/checklist`) before picking a flow.

**Verify task** — Before any Read, Write, Grep, or Shell: run `npm run checklist -- "<user request or summary>"`. The checklist step list is fixed by [scripts/checklist.ts](../../../skills/verify-task/scripts/checklist.ts). After each skill you run, strikethrough it in the current task section and add a note. [verify-task](../../../skills/verify-task/SKILL.md)

**Real commands (run in shell):**
- `/checklist` = `npm run checklist -- "<request or summary>"`
- `/clean` = `npm run clean` (empties `.tmp/`)

---

## Clean

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. Run `/clean` (or delegate cleaner → clean skill).

---

## Clean up studio

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. Ask user: clean everything or pick paths to verify.
2. verifier → verify-docs then document-verification (report to `.tmp/verification-report.md`).
3. Optionally cleaner → clean (delete `.tmp/` contents).

---

## Design / Figma

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. designer → designer-figma. Update checklist.

---

## Dev / TypeScript

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. developer → developer-typescript (and developer-check-types when the user wants type checking run). Developer may use developer-electrobun for Electrobun apps, developer-virtualization when it needs VM context (e.g. document flow). Update checklist after each skill.

---

## Electron

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. developer → developer-electron. Update checklist.

---

## Electrobun

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. developer → developer-electrobun. Update checklist.

---

## Discover

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. researcher → research.
2. documenter → document.
3. analyst → analyst-diagnostics.
4. documenter → document (add problems).
5. researcher → research (audit).
6. documenter → document (current state).
7. analyst → analyst-diagnostics (propose solutions).
8. documenter → document (final pass).
9. documenter → document-ticket (comment on ticket).

---

## Install

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. installer → full install (config, choices, MCP, handoff, customizer if present).

---

## Learn

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. researcher → research.
2. documenter → document (structure findings).

---

## Propose solutions

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. analyst → analyst-diagnostics.
2. documenter → document (add problems to README).

---

## Refine / document

1. **When the user shared links or context that needs learning:** researcher → research (learn those links/context). Update checklist. Otherwise skip to step 2.
2. documenter → document. The documenter is the document subagent; it follows [document-agents](../../../skills/document-agents/SKILL.md) for when to use which skills. It uses [document](../../../skills/document/SKILL.md), [document-github](../../../skills/document-github/SKILL.md) when the deliverable is a README, and [document-voice](../../../skills/document-voice/SKILL.md). Update checklist after each skill. When doc work is done, documenter runs its end-of-job file review: research files in scope, add **Files in scope** to the checklist (name, location, content summary), review each file for needed updates, check off with notes.

---

## Research

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. researcher → research. Update checklist.

---

## Research Figma

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. researcher → research-figma. Update checklist.

---

## Save

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. verifier → verify-paths (compare paths.md Editable section Tree to disk; flag both directions).
2. If disk has paths not in tree: documenter → document-paths (add to tree only).
3. updater → save (stage and commit). No push.

---

## Analyst

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. analyst → analyst-diagnostics. Update checklist.

---

## Sync upstream

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. updater → sync-upstream. Update checklist.

---

## Uninstall

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. uninstaller → uninstall. Update checklist.

---

## Update Figma token

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. updater → update-figma. Update checklist.

---

## Update gitignore

**Before each step:** Verify task. **After each step:** Strikethrough + note.

1. updater → update-gitignore (explain in plain language what's ignored, or update .gitignore / .git/info/exclude). Update checklist.

---

## Reference

[Coordinator](../coordinator.md) – Step 1 verify task (run `/checklist`), Step 2 match request to flow above, Step 3 execute that flow's steps in order.
