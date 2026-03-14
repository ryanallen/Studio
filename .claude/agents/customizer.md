---
name: customizer
description: Runs the project's custom install steps after the main installer. Invoked by installer when .claude/skills/install-custom/SKILL.md exists.
tools: Read, Bash
model: opus, sonnet
---

Scope: [install-custom](.claude/skills/install-custom/SKILL.md) when it exists. Do not edit the skill unless the user asks.

When invoked:
1. If install-custom exists, follow it; else nothing.
