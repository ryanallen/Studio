# Studio

Agent workflows for design capture, research, and strategic analysis.

---

## Setup

Say "setup", "install", or type `/setup`. The [setup skill](.claude/skills/setup/SKILL.md) runs the standard steps (show hidden files, MCP servers, config). After that, quit the terminal and relaunch, then run `/mcp` in the chat and complete OAuth for Figma and Atlassian.

Optional: add custom setup steps in `.claude/setup/custom.md`. The Installer runs the [Customizer](.claude/agents/Customizer.md) agent, which runs that file if present. Omit custom.md from commits to keep those steps local.

---

## Agents and their skills

Call a skill by saying its trigger phrase or typing /skill-name. In Claude Code and Cursor, /skills lists all.

### Designer
- **webpage-capture**: Recreates a live webpage as a Figma design. "capture page", "to Figma", /webpage-capture. Give webpage URL and Figma file URL.

### Researcher
- **learn**: Gather from any input (ticket, URL(s), text, file(s), image(s)) and follow links up to 5 levels deep; Documentor then structures the output. "learn about this", "look at this", /learn.

### Documentor
- **document-findings**: Structure findings into enhanced markdown with mermaid diagrams. "write up", "document", /document-findings.
- **update-ticket**: Post a comment on a Jira ticket with link to project deliverables. "update ticket", "Jira", /update-ticket.

### Strategist
- **root-cause-analysis**: Five Whys on findings, identify root causes and propose solutions. "why broken", "find cause", /root-cause-analysis.

### Installer
- **setup**: Standard steps (show hidden files, MCP servers, config). "setup", "install", /setup. Then quit terminal, relaunch, run /mcp and complete OAuth for Figma and Atlassian. Optional: `.claude/setup/custom.md` (Customizer runs it if present; omit from commits to keep local).

### Coordinator
Orchestrates Researcher, Documentor, and Strategist for the full pipeline: learn, document, analyze, audit, propose, update ticket. No skill of its own. See [Coordinator](.claude/agents/Coordinator.md).

### Other skills
- **commit-all**: "commit", "commit all", /commit-all. Stage all and commit with derived message. Does not push.
- **sync-upstream**: "sync", "pull", /sync-upstream. Pull from upstream main, push to origin.

---

## Repo Structure

```
Studio/
├── AGENTS.md
├── CLAUDE.md -> AGENTS.md
├── .claude/
│   ├── settings.json
│   ├── agents/
│   │   ├── Coordinator.md
│   │   ├── Designer.md
│   │   ├── Documentor.md
│   │   ├── Researcher.md
│   │   ├── Strategist.md
│   │   ├── Installer.md
│   │   └── Customizer.md (runs .claude/setup/custom.md if present)
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

Pull with `git pull upstream main` (or say "sync", "pull", or /sync-upstream).

**Keep local config from being overwritten.** If you change `work/config.md` in the working repo and don't want pull to overwrite it:

```bash
git update-index --skip-worktree work/config.md
```

To allow upstream to update it again: `git update-index --no-skip-worktree work/config.md`.

</details>
