---
name: install
description: Run standard Product Studio install (config, choices, MCP, Figma bridge if chosen, handoff, customizer if present). Use when user says install, setup, /install.
disable-model-invocation: true
---

# Install

Run the Install workflow in [coordinator](.claude/agents/coordinator.md). The installer runs the full flow (config, choices, MCP, Figma bridge if chosen, handoff, then customizer if present).

## Inputs

None. User invokes with setup, install, or /install.

## Output

Install complete. User may need to restart the app and run `/mcp` for OAuth (see handoff).

## Process

1. Run the Install workflow in Coordinator; the installer runs the full flow (config, choices, MCP, Figma bridge if chosen, handoff, then customizer if present).

## Reference

[coordinator](.claude/agents/coordinator.md). [installer](.claude/agents/installer.md) runs the flow.
