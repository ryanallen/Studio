# Studio

Agent workflows for design capture, research, and strategic analysis.

---

## Setup

Ask AI to install stuff. It will use the [setup agent](.claude/agents/setup.md), which runs the standard steps (show hidden files, MCP servers, config). After that, quit the terminal and relaunch, then run `/mcp` in the chat and complete OAuth for Figma and Atlassian.

Optional: add custom setup steps in `.claude/setup/custom.md`. The setup agent runs the [setup-custom](.claude/agents/setup-custom.md) agent, which runs that file if present. Omit custom.md from commits to keep those steps local.

---

## Agents

| Agent | Capability |
|-------|-----------|
| **designer** | Captures a webpage and recreates it in Figma |
| **researcher** | Learn: gather from any input (ticket, URL(s), text, file(s), image(s)) and follow links up to 5 levels deep |
| **documentor** | Structures findings into enhanced markdown with mermaid diagrams |
| **strategist** | Identifies problems and performs Five Whys root cause analysis |
| **setup** | Runs install steps (MCP servers, config); supports optional custom setup via setup-custom agent |

## Workflows

### Webpage to Figma
Give the designer a webpage URL and a Figma file URL.

### Learn
Give the researcher any input (ticket ID, URL(s), pasted text, file path(s), or image(s)); they gather from it and follow links up to 5 levels deep, then documentor structures the output.

### Document
Give the documentor research findings to structure into a project folder.

### Analyze Problems
Give the strategist findings to perform Five Whys root cause analysis.

### Propose Solutions
The strategist proposes new solutions from root causes and current state, then the documentor writes them up.

### Research, Define, Strategize
Full pipeline: learn (any input), document, analyze, audit, propose, update ticket. See [coordinator](.claude/agents/coordinator.md).

---

## Repo Structure

```
Studio/
├── AGENTS.md
├── CLAUDE.md -> AGENTS.md
├── .claude/
│   ├── settings.json
│   ├── agents/
│   │   ├── coordinator.md
│   │   ├── designer.md
│   │   ├── researcher.md
│   │   ├── documentor.md
│   │   ├── strategist.md
│   │   ├── setup.md
│   │   └── setup-custom.md (runs .claude/setup/custom.md if present)
│   ├── setup/
│   │   └── custom.md (optional; omit from commits to keep local)
│   └── skills/
│       ├── learn/SKILL.md
│       ├── document-findings/SKILL.md
│       ├── root-cause-analysis/SKILL.md
│       ├── setup/SKILL.md
│       ├── commit-all/SKILL.md
│       ├── sync-upstream/SKILL.md
│       ├── update-ticket/SKILL.md
│       └── webpage-capture/
│           ├── SKILL.md
│           └── scripts/capture.js
├── work/
│   ├── config.md
│   └── {team}/{space}/{project}/
│       └── README.md
├── package.json
└── README.md
```

<details>
<summary>Using a working repo with this as upstream</summary>

For a working repo that pulls from this repo (ryanallen/Studio) as upstream.

**Add upstream.** In the working repo:

```bash
git remote add upstream https://github.com/ryanallen/Studio.git
git fetch upstream
```

Pull with `git pull upstream main` (or use the sync-upstream skill: "sync upstream").

**Keep local config from being overwritten.** If you change `work/config.md` in the working repo and don't want pull to overwrite it:

```bash
git update-index --skip-worktree work/config.md
```

To allow upstream to update it again: `git update-index --no-skip-worktree work/config.md`.

</details>
