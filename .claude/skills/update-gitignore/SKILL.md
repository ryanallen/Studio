---
name: update-gitignore
description: Explain in plain language what Git is ignoring (.gitignore and .git/info/exclude) and update either file when the user wants to add or remove rules. Use when user says gitignore, what's ignored, update ignore, ignore rules, /update-gitignore.
---

# Update Gitignore

Tell the user in plain English what is being ignored and by which file. Update `.gitignore` or `.git/info/exclude` when they ask to add or remove an ignore rule.

## Inputs

- **Explain** – User asks what's ignored, what's gitignored, how is my work ignored, etc.
- **Update** – User asks to add or remove an ignore rule (e.g. ignore X, stop ignoring Y, add .git.backup to ignore).

## Output

- **Explain:** A short plain-language summary: which file ignores what, and what that means for their repo and for this clone only.
- **Update:** The chosen file edited, plus one sentence stating what was added or removed.

Use [document-voice](../document-voice/SKILL.md): clear, casual, no jargon. No groveling or filler.

## Process

1. **Read both files** – `.gitignore` (committed; applies to everyone who clones) and `.git/info/exclude` (local only; applies to this clone).
2. **Explain (if asked what's ignored):**
   - **.gitignore:** List each pattern or group in plain English (e.g. "Node modules and package-lock.json", "Temp reports in .tmp/"). Say that this file is in the repo so everyone gets these rules. Note: work/paths.md is not in .gitignore; it lives under work/, so it is committed if you commit work/ and ignored if you ignore work/ (e.g. via exclude).
   - **.git/info/exclude:** If present, say what it ignores in plain English (e.g. "This clone only: everything under work/ except work/paths.md.template"). That means paths.md is ignored here too when work/ is excluded. Say that this file is not committed, so it only affects this machine. If the user wants to ignore work/ again after having committed it (e.g. after moving work back from a safe place), they can add `work/*` and `!work/paths.md.template` here or in .gitignore.
3. **Update (if asked to add/remove a rule):**
   - **Committed rule** (affects everyone): Edit `.gitignore`. Add a line (and optional comment) or remove the line. Prefer a short comment so future readers know why.
   - **Local-only rule** (this clone only): Edit `.git/info/exclude`. Add or remove the pattern. Tell the user the change is local and won't be pushed.
   - If the user doesn't specify which, choose: "ignore for everyone" → .gitignore; "ignore only on my machine" or "don't commit this" → .git/info/exclude.
4. **Confirm** – One sentence: what you did or what each file ignores.

## Reference

[document-voice](../document-voice/SKILL.md). [work/paths.md](../../work/paths.md) for work folder layout. [README Paths and Work folder](../../README.md) for how work folder and Git interact.
