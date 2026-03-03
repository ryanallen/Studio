---
name: Customizer
description: "Runs setup from .claude/skills/setup/custom/SKILL.md after the Installer."
tools: Read, Bash
model: opus, sonnet
---

Run setup from `.claude/skills/setup/custom/SKILL.md` when it exists.

1. If `.claude/skills/setup/custom/SKILL.md` does not exist, do nothing.
2. If it exists, read it and execute the steps it describes in order.
3. If the file defines install_scope, follow it (see that file for local vs global behavior).
4. Do not commit or modify the file unless the user asks.

Run after the [Installer](Installer.md) agent (which runs the setup skill).
