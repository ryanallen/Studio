# Studio

Agent workflows for design capture, research, and strategic analysis.

---

## Setup

Say "setup", "install", or type `/setup`. The [setup skill](.claude/skills/setup/SKILL.md) runs the standard steps (show hidden files, MCP servers, config). After that, quit the terminal and relaunch, then run `/mcp` in the chat and complete OAuth for Figma and Atlassian.

Optional: add custom setup steps in `.claude/skills/setup/custom.md`. The Installer runs the [Customizer](.claude/agents/Customizer.md) agent, which runs that file if present. The file is gitignored so syncing upstream won't overwrite it.

---

## Agents and their skills

Call a skill by saying its trigger phrase or typing /skill-name. In Claude Code and Cursor, /skills lists all. In both Claude Code and Cursor, skills are discovered from `.claude/skills/`: each skill must live in a kebab-case folder with a file named `SKILL.md` (e.g. `.claude/skills/commit-all/SKILL.md`).

### Designer
- **capture-webpage**: Capture a live webpage as a Figma design. "capture page", "to Figma", /capture-webpage. Give webpage URL and Figma file URL.
- **generate-figma**: Generate a Figma design by calling Figma MCP's generate_figma_design with target file details. "generate Figma", "generate design", /generate-figma.

### Researcher
- **learn**: Gather from any input (ticket, URL(s), text, file(s), image(s)) and follow links up to 5 levels deep; Documentor then structures the output. "learn about this", "look at this", /learn.
- **analyze-figma**: Analyze a Figma link and produce a structured report. General link = full file; specific link (with node-id) = deep analysis from that node. "analyze Figma", "Figma audit", /analyze-figma. Give Figma design URL.

### Documentor
- **document-findings**: Take research output and produce structured markdown with mermaid diagrams. "write up", "document", /document-findings.
- **update-ticket**: Post a comment on a Jira ticket with link to project deliverables. "update ticket", "Jira", /update-ticket.

### Strategist
- **analyze-root-cause**: Analyze findings with Five Whys, identify root causes and propose solutions. "why broken", "find cause", /analyze-root-cause.

### Installer
- **setup**: Run the standard Studio setup steps (show hidden files, MCP servers, config). "setup", "install", /setup. Then quit terminal, relaunch, run /mcp and complete OAuth for Figma and Atlassian. Optional: `.claude/skills/setup/custom.md` (gitignored; Customizer runs it if present).

### Coordinator
Orchestrates Researcher, Documentor, and Strategist for the full pipeline: learn, document, analyze, audit, propose, update ticket. No skill of its own. See [Coordinator](.claude/agents/Coordinator.md).

### Syncer
- **commit-all**: Stage all and create a commit with derived message. "commit", "commit all", /commit-all. Does not push.
- **sync-upstream**: Sync from upstream main, push to origin. "sync", "pull", /sync-upstream.

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
│   │   ├── Syncer.md
│   │   ├── Installer.md
│   │   └── Customizer.md (runs .claude/skills/setup/custom.md if present)
│   └── skills/
│       ├── learn/SKILL.md
│       ├── document-findings/SKILL.md
│       ├── analyze-root-cause/SKILL.md
│       ├── analyze-figma/SKILL.md
│       ├── setup/
│       │   ├── SKILL.md
│       │   └── custom.md (optional; gitignored, sync won't overwrite)
│       ├── commit-all/SKILL.md
│       ├── sync-upstream/SKILL.md
│       ├── update-ticket/SKILL.md
│       ├── generate-figma/SKILL.md
│       └── capture-webpage/
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
