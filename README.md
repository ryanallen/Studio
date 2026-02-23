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

### Figma MCP Integration (Optional)

To enable Figma design capabilities:

1. **Copy the environment template:**
   ```bash
   cp .env.template .env
   ```

2. **Get your Figma Personal Access Token:**
   - Log in to [Figma](https://www.figma.com)
   - Go to Settings → Security → Personal access tokens
   - Click "Generate new token"
   - Set expiration (30-90 days) and scopes
   - Copy the token (you'll only see it once!)

3. **Add your token to `.env`:**
   - Open `.env` in your editor
   - Replace `your_figma_personal_access_token_here` with your actual token
   - Save the file

4. **Verify connection:**
   - The Figma MCP server will automatically use your token
   - Test with a Figma file URL to confirm it's working

Note: The token expires based on your settings. Follow the same steps to regenerate when needed.

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
