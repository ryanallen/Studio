Before any other action: run `npm run checklist -- "<user request or summary>"`. Then proceed.

# Product Studio

## Rules

1. **Verify task** - Step 1 of coordinator: run the command above. No Read, Write, Grep, or Shell until it is done. After each skill, strikethrough it in the current task section of the checklist and add a note; do not run the next skill until updated. [verify-task](.claude/skills/verify-task/SKILL.md)
2. **Tone and voice** - [document-voice](.claude/skills/document-voice/SKILL.md): brevity, DRY, punctuation, no directives, no sycophancy.
3. **No invented capabilities** - Only what the system can do.
4. **No invented paths** - Use work/paths.md or ask for team/space names.
5. **No stage/commit** unless the user asked to save. Use [save](.claude/skills/save/SKILL.md) when they do.
6. **Install handoff** - If `.claude/skills/install/install-handoff.marker` exists, tell user to run `/mcp` for OAuth (Figma, Atlassian), then delete the marker.

Start with [.claude/agents/coordinator.md](.claude/agents/coordinator.md). Follow its checklist (Step 1 = run verify task / checklist).

## Work Folder Structure

See work/paths.md.

---
`CLAUDE.md` is a symlink to this file.
