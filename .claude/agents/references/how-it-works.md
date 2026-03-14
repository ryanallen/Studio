# How it works (plain language)

Technical bits in simple terms. Optional read.

## What is npm?

Node Package Manager (comes with Node.js). Installs packages and runs **scripts** (commands you define in package.json). `npm run checklist` runs the script named `checklist`; it does not install anything.

## What does `npm run checklist -- "something"` do?

1. **`npm run checklist`** – Runs the script in [package.json](package.json), which runs [checklist script](.claude/skills/verify-task/scripts/checklist.ts).
2. **`--`** – Everything after `--` is passed to the script, not npm.
3. **`"something"`** – Task summary. The script matches it to a **flow** (e.g. refine, save, research). Same words → same flow (deterministic).

One line: you give a short description; the program writes the step list for that flow into the task checklist file.

## What does the checklist program do?

Matches your message to trigger phrases, picks the flow, appends a section to `.tmp/task-checklist.md`: date/time, summary, steps for that flow, Notes. The agent checks off steps as it goes. Flow details: [coordinator-flows](.claude/agents/references/coordinator-flows.md).

## Why a script instead of the AI deciding?

Same phrase → same steps every time. Single source of truth. Principles and script list: [deterministic-workflows](.claude/agents/references/deterministic-workflows.md).

## Other npm scripts

| Script | Runs | Purpose |
|--------|------|---------|
| `checklist` | checklist.ts | Append task section + steps to `.tmp/task-checklist.md` |
| `doc:pick-subagent` | document-agents script | Pick doc subagent from message |
| `doc:structure` | document script | Section outline for doc type |
| `clean` | Node script | Empty `.tmp/` |
| `sync:codex`, `setup:figma-bridge` | Helpers | See script files |

Same idea: `npm run <name> -- <args>`, deterministic.

## Where the logic lives

- **Flow steps, triggers:** [checklist script](.claude/skills/verify-task/scripts/checklist.ts) (FLOWS and TRIGGERS at top).
- **What coordinator does with that:** [coordinator-flows](.claude/agents/references/coordinator-flows.md).
- **Why scripts:** [deterministic-workflows](.claude/agents/references/deterministic-workflows.md).

Keep TypeScript and flows doc in sync when you change triggers or add flows.
