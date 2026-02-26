# Studio

An operations system for teams built around specialized AI agents. Each agent has a focused role, and the coordinator orchestrates them into workflows.

---

## How It Works

1. Describe what you need
2. The **coordinator** analyzes the request and picks the right agents
3. Agents do the work: research and documentation
4. Results come back organized and documented

The coordinator agent includes workflow diagrams and interaction patterns.

---

## Setup

### MCP Servers

**Install only what you need:**

```bash
# Figma (design-to-code, diagrams)
claude mcp add figma -- npx -y @figma/mcp-figma

# Playwright (web capture for Figma)
claude mcp add playwright -- npx -y @executeautomation/playwright-mcp-server

# Slack (team communication)
claude mcp add slack -- npx -y slack-mcp-server@latest --transport stdio
```

**Verify:**
```bash
/mcp
```

### Figma MCP

After adding, authenticate:
```bash
/mcp
```
Follow the Figma OAuth flow when prompted.

### Slack MCP

**Get tokens from browser (easiest):**

1. Open Slack in browser, press F12 → Console tab
2. Type `allow pasting`, press Enter
3. Run:
   ```javascript
   JSON.parse(localStorage.localConfig_v2).teams[document.location.pathname.match(/^\/client\/([A-Z0-9]+)/)[1]].token
   ```
4. Copy the `xoxc-...` token
5. Switch to Application tab → Cookies → copy the `d` cookie value (starts with `xoxd-`)

**Set environment variables:**

Add to `~/.zshrc` or `~/.bashrc`:
```bash
export SLACK_MCP_XOXC_TOKEN="xoxc-your-token"
export SLACK_MCP_XOXD_TOKEN="xoxd-your-cookie"

# Optional: Enable message posting
export SLACK_MCP_ADD_MESSAGE_TOOL="true"
```

**Reload:**
```bash
source ~/.zshrc
/mcp
```

### Atlassian MCP

Use the web interface at claude.ai - the desktop/CLI version requires proxy setup that isn't documented yet.

---

**List installed servers:**
```bash
claude mcp list
```

**Remove a server:**
```bash
claude mcp remove <name>
```

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

Agents live in `agents/`. Each has a YAML frontmatter header (name, description, tools) and focused instructions with error recovery protocols.

| Agent | Role |
|-------|------|
| **coordinator** | Orchestrates workflows, delegates to specialists |
| **researcher** | Competitive analysis, user research, pattern research |
| **documenter** | Specs, requirements, handoff documentation |

---

## Skills

Reusable procedures and automation in `skills/`. Agents reference these instead of embedding procedural knowledge.

| Skill | Used By |
|-------|---------|
| [Webpage capture](skills/webpage-capture.md) | designer |
| [Competitive analysis](skills/competitive-analysis.md) | researcher |
| [Current state audit](skills/current-state-audit.md) | researcher |
| [Pattern research](skills/pattern-research.md) | researcher |
| [User research synthesis](skills/user-research-synthesis.md) | researcher |
| [Design spec](skills/design-spec.md) | documenter |
| [Component documentation](skills/component-documentation.md) | documenter |
| [Research summary](skills/research-summary.md) | researcher, documenter |

Automation scripts live in `skills/scripts/` (e.g., `capture.js` for webpage-to-Figma).

---

## Repo Structure

```
Studio/
├── CLAUDE.md                    # Project instructions
├── agents/                      # Specialized AI agents
│   ├── coordinator.md
│   ├── designer.md
│   ├── documenter.md
│   └── researcher.md
├── skills/                      # Reusable procedures and templates
│   ├── webpage-capture.md
│   ├── competitive-analysis.md
│   ├── current-state-audit.md
│   ├── pattern-research.md
│   ├── user-research-synthesis.md
│   ├── design-spec.md
│   ├── component-documentation.md
│   ├── research-summary.md
│   └── scripts/                 # Automation scripts
│       └── capture.js
├── work/                        # Projects, research, specs, deliverables
├── package.json                 # Playwright dependency
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

The system loads `CLAUDE.md` with project instructions. Start the coordinator agent to orchestrate multi-step workflows, or work with agents directly.

This system uses the [designDoc template](https://github.com/ryanallen/designDoc) for project documentation structure.
