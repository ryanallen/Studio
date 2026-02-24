# Studio

An operations system for teams built around specialized AI agents. Each agent has a focused role, and the coordinator orchestrates them into workflows.

---

## How It Works

1. Describe what you need
2. The **coordinator** analyzes the request and picks the right agents
3. Agents do the work: research and documentation
4. Results come back organized and documented

See `.claude/COORDINATOR_FLOWS.md` for detailed workflow diagrams.

---

## Setup

### MCP Server Configuration

This system uses MCP (Model Context Protocol) servers to extend Claude's capabilities. Configure them in `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `~/.config/claude/claude_desktop_config.json` (Linux).

**⚠️ Important:** Only install the MCP servers you need. Having too many can cause conflicts and authentication issues.

### Figma MCP (Required for Design Work)

Enables reading Figma designs, generating code from designs, and creating diagrams.

**1. Add to your Claude config:**

Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@figma/mcp-figma"]
    }
  }
}
```

**2. Restart Claude Desktop**

Quit and reopen the Claude app completely.

**3. Authenticate (CRITICAL STEP):**

In Claude Code, run:
```
/mcp
```

Then authenticate with Figma when prompted. This stores your credentials securely.

**Common Issues:**
- **"Permission denied" errors:** You forgot to authenticate. Run `/mcp` and authenticate.
- **"Multiple Figma servers" errors:** You have both `figma` and `figma-local` configured. Remove the one you're not using.
- **Changes not working:** Make sure you restarted Claude Desktop, not just closed the window.

### Playwright MCP (Optional - For Web Capture)

Enables capturing external websites into Figma designs (bypasses CSP restrictions).

**1. Add to your Claude config:**

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@figma/mcp-figma"]
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@executeautomation/playwright-mcp-server"]
    }
  }
}
```

**2. Restart Claude Desktop**

That's it. Playwright requires no authentication.

### Example Complete Configuration

Here's a working config with both servers:

```json
{
  "preferences": {
    "quickEntryShortcut": "off",
    "sidebarMode": "chat",
    "coworkScheduledTasksEnabled": false
  },
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@figma/mcp-figma"]
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@executeautomation/playwright-mcp-server"]
    }
  }
}
```

**Troubleshooting:**
- Config location: `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)
- Must be valid JSON (check for missing commas, brackets)
- Restart = Quit Claude completely (Cmd+Q), then reopen
- Test with `/mcp` command in Claude Code after restart

---

## The D.E.S.I.G.N. Process

Every project runs through six phases. Not every task needs all six — the coordinator decides which apply.

| Phase | Stands For | What Happens |
|-------|-----------|--------------|
| **D** | Discovery | Understand users, competitors, requirements, current state |
| **E** | Exploration | Define design direction, validate against system standards |
| **S** | See What Works | Research, experiment, test divergent concepts |
| **I** | Iterate | Refine based on findings, validate accessibility |
| **G** | Go to Market | Polish, finalize, prep for handoff |
| **N** | Next Steps | Measure, capture learnings |

---

## Agents

Agents live in `.claude/agents/`. Each has a YAML frontmatter header (name, description, tools) and focused instructions with error recovery protocols. Invoke with `claude --agent name`.

| Agent | Role |
|-------|------|
| **coordinator** | Orchestrates workflows, delegates to specialists |
| **researcher** | Competitive analysis, user research, pattern research |
| **documenter** | Specs, requirements, handoff documentation |

---

## Skills

Reusable automation commands in `.claude/skills/`. Invoke with `/name`. Coming in Phase 3.

---

## Repo Structure

```
Studio/
├── CLAUDE.md                    # Project instructions (auto-loaded by Claude Code)
├── .claude/
│   ├── agents/                  # Specialized AI agents
│   │   ├── coordinator.md       # claude --agent coordinator
│   │   ├── documenter.md        # claude --agent documenter
│   │   └── researcher.md        # claude --agent researcher
│   ├── skills/                  # Reusable automation (Phase 3)
│   └── COORDINATOR_FLOWS.md     # Workflow diagrams
├── work/                        # Projects, research, specs, deliverables
└── README.md                    # This file
```

---

## Retry & Escalation

No agent gives up after one attempt.

1. **Attempt 1** — Execute with current context
2. **Attempt 2** — Clean up failed work, try alternative approach
3. **Attempt 3** — Escalate to coordinator or ask user for help

---

## Using This System

Open Claude Code in this directory. It automatically loads `CLAUDE.md` with project instructions. Run `claude --agent coordinator` to start the coordinator, or just describe what you need and the system handles routing.

This system uses the [designDoc template](https://github.com/ryanallen/designDoc) for project documentation structure.
