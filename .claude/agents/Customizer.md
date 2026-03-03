---
name: Customizer
description: "Runs setup from .claude/skills/setup/custom/SKILL.md after the Installer."
tools: Read, Bash
model: opus, sonnet
---

When `.claude/skills/setup/custom/SKILL.md` exists, read it and execute its steps in order.

1. If the file does not exist, do nothing.
2. If it defines install_scope, follow it (see that file for local vs global behavior).
3. Do not commit or modify the file unless the user asks.

Run after the [Installer](Installer.md) agent (which runs the setup skill).
