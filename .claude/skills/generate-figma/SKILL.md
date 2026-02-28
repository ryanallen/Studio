---
name: generate-figma
description: Generate a Figma design by calling Figma MCP's generate_figma_design with target file details. Use when user says "generate Figma", "generate design", or /generate-figma. In Claude Code and Cursor, /skills lists all.
---

# Generate Figma

Call Figma MCP's `generate_figma_design` with the target Figma file details to start a design generation or obtain a capture ID and endpoint for a capture flow.

## Inputs

**Figma file details** (required): Target file, e.g. file key or Figma file URL such as `https://www.figma.com/file/abc123/...`. Optionally: parent node ID if the design should be added under a specific node.

If missing, ask the user before proceeding.

## Process

1. Resolve file key (and optional node id) from the user's Figma file URL or details.
2. Call Figma MCP's `generate_figma_design` with those parameters.
3. Use the response (e.g. capture ID and endpoint) as required: either report them to the user, or hand off to another flow (e.g. capture-webpage for live page capture).

## Requirements

- Figma MCP server configured and authenticated.
