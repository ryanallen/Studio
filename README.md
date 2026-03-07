<div align="center">
<pre>
██████╗ ██████╗ ██████╗ ██████╗ ██╗  ██╗██████╗ ████████╗
██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║  ██║██╔════╝╚══██╔══╝
██████╔╝██████╔╝██║  ██║██║  ██║██║  ██║██║        ██║   
██╔═══╝ ██╔══██╗██║  ██║██║  ██║██║  ██║██║        ██║   
██║     ██║  ██║╚█████╔╝██████╔╝╚█████╔╝╚█████╗    ██║   
╚═╝     ╚═╝  ╚═╝ ╚════╝ ╚═════╝  ╚════╝  ╚════╝    ╚═╝   
███████╗████████╗██╗  ██╗██████╗ ██╗██████╗ 
██╔════╝╚══██╔══╝██║  ██║██╔══██╗██║██╔══██╗
███████╗   ██║   ██║  ██║██║  ██║██║██║  ██║
╚════██║   ██║   ██║  ██║██║  ██║██║██║  ██║
███████║   ██║   ╚█████╔╝██████╔╝██║╚█████╔╝
╚══════╝   ╚═╝    ╚════╝ ╚═════╝ ╚═╝ ╚════╝ 
</pre>

</div>

![Product Studio](https://raw.githubusercontent.com/ryanallen/product-studio/main/assets/hero.gif)

<div align="center">

Agent workflows for design capture, research, and strategic analysis.

<img src="https://img.shields.io/badge/Product%20Studio-Agent%20workflows-6366f1?style=flat" alt="Product Studio" />
<img src="https://img.shields.io/badge/Agents-SKILLS-0ea5e9?style=flat&labelColor=4b5563" alt="Agents SKILLS" />
<img src="https://img.shields.io/badge/license-MIT-green?style=flat" alt="License" />
<a href="https://github.com/ryanallen/product-studio/generate"><img src="https://img.shields.io/badge/Use%20this%20template-%E2%86%92-10b981?style=flat&labelColor=4b5563" alt="Use this template" /></a>

<a href=".claude/agents">.claude/agents</a> · <a href="LICENSE">LICENSE</a> · <a href="https://github.com/ryanallen/product-studio/generate">Use this template</a>

</div>

---

**Source**: [https://github.com/ryanallen/product-studio](https://github.com/ryanallen/product-studio)

---

> Say "install" or "research" or "document". Skills and agents do the rest.

Product Studio wires researcher, documenter, strategist, verifier, and other agents to workflows: install, discover, clean up studio, save. Skills live under `.claude/skills/`; call them by trigger phrase or `/skill-name`. In Claude Code and Cursor, `/skills` lists all.

## Contents

<details>
<summary>On this page</summary>

- [Setup](#-setup)
- [Agents and skills](#-agents-and-their-skills)
- [Repo structure](#-repo-structure)
- [.tmp and cleanup](#-tmp-and-cleanup)

</details>

---

## Setup

Say "setup", "install", or `/install`. The [install skill](.claude/skills/install/SKILL.md) runs the standard steps (config, repo link, show hidden files, MCPs, handoff). After that, quit the terminal and relaunch, then run `/mcp` in the chat and complete OAuth for Figma and Atlassian.

Custom setup: Add your own steps or notes to the bottom of `.claude/skills/install-custom/SKILL.md.template`. During install that template is copied to `SKILL.md` (gitignored); the [installer](.claude/agents/installer.md) then runs that file when the skill exists.

---

## Agents and their skills

Call a skill by saying its trigger phrase or typing `/skill-name`. Skills live in `.claude/skills/` in a kebab-case folder with `SKILL.md`.

| **[Coordinator](.claude/agents/coordinator.md)** — Agent workflow |
|:--:|
| ![Skills](https://img.shields.io/badge/Skills-%E2%80%94-0ea5e9?style=flat&labelColor=4b5563) |
| Orchestrates researcher, documenter, strategist, verifier, cleaner, updater. Discover: research, document, strategize, audit, propose, update ticket. Clean up studio: say "clean up studio" or "verify docs"; verifier checks heading hierarchy, nav, emojis and writes report to .tmp; optionally run cleaner to wipe .tmp. No skill of its own. |

| **[Installer](.claude/agents/installer.md)** — Agent workflow |
|:--:|
| [![install](https://img.shields.io/badge/install-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/install/SKILL.md) [![install-custom](https://img.shields.io/badge/install--custom-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/install-custom/) |
| Run the standard Product Studio install steps: config (paths.md), choices, MCP, Figma bridge if chosen, handoff. When `.claude/skills/install-custom/SKILL.md` exists (created from `SKILL.md.template` during install, gitignored), runs it after main steps. "setup", "install", /install. Then quit terminal, relaunch, run /mcp and complete OAuth for Figma and Atlassian. |

| **[Designer](.claude/agents/designer.md)** — Agent workflow |
|:--:|
| [![generate-figma](https://img.shields.io/badge/generate--figma-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/generate-figma/SKILL.md) |
| Generate or update a Figma design by calling the Figma Console MCP with target file details. "generate Figma", "generate design", /generate-figma. |

| **[Documenter](.claude/agents/documenter.md)** — Agent workflow |
|:--:|
| [![document](https://img.shields.io/badge/document-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/document/SKILL.md) [![document-paths](https://img.shields.io/badge/document--paths-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/document-paths/SKILL.md) [![document-ticket](https://img.shields.io/badge/document--ticket-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/document-ticket/SKILL.md) [![document-github](https://img.shields.io/badge/document--github-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/document-github/SKILL.md) [![document-agent](https://img.shields.io/badge/document--agent-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/document-agent/SKILL.md) [![document-skills](https://img.shields.io/badge/document--skills-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/document-skills/SKILL.md) |
| **document**: Take research output and produce structured markdown with mermaid diagrams. "write up", "document", /document. **document-paths**: Sync work/paths.md tree with actual paths under work/. Handoff from verifier (verify-paths). **document-ticket**: Post a comment on a Jira ticket with link to project deliverables. "update ticket", "Jira", /document-ticket. **document-github**: GitHub README rules (animated GIFs, raw URLs, shields.io badges, anchors). **document-agent**: Use subagents when documenting or writing/updating agent files. "write an agent", "update agent", /document-agent. **document-skills**: Produce or update a skill (SKILL.md) per Claude Code best practices. "document a skill", "update skill docs", /document-skills. |

| **[Researcher](.claude/agents/researcher.md)** — Agent workflow |
|:--:|
| [![research](https://img.shields.io/badge/research-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/research/SKILL.md) [![analyze-figma](https://img.shields.io/badge/analyze--figma-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/analyze-figma/SKILL.md) |
| **research**: Gather from any input (ticket, URL(s), text, file(s), image(s)) and follow links up to 5 levels deep; documenter then structures the output. "research", "learn about this", /research. **analyze-figma**: Analyze a Figma link and produce a structured report. "analyze Figma", "Figma audit", /analyze-figma. Give Figma design URL. |

| **[Strategist](.claude/agents/strategist.md)** — Agent workflow |
|:--:|
| [![strategize](https://img.shields.io/badge/strategize-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/strategize/SKILL.md) |
| Analyze findings with Five Whys, identify root causes and propose solutions. "why broken", "find cause", /strategize. |

| **[Verifier](.claude/agents/verifier.md)** — Agent workflow |
|:--:|
| [![verify-paths](https://img.shields.io/badge/verify--paths-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/verify-paths/SKILL.md) [![verify-docs](https://img.shields.io/badge/verify--docs-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/verify-docs/SKILL.md) [![document-verification](https://img.shields.io/badge/document--verification-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/document-verification/SKILL.md) |
| **verify-paths**: Compare work/paths.md to actual paths under work/. If mismatch, hand off to documenter (document-paths). Used in Save flow. **verify-docs**: Check all documents for proper h1/h2/h3 hierarchy, horizontal top nav, emojis at start of every headline. **document-verification**: After verify-docs, track files processed, compare to README and paths.md, write `.tmp/verification-report.md`. Used in Clean up studio flow. |

| **[Cleaner](.claude/agents/cleaner.md)** — Agent workflow |
|:--:|
| [![clean](https://img.shields.io/badge/clean-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/clean/SKILL.md) |
| Delete everything in `.tmp/`. "clean", "wipe .tmp", /clean. Use after verifying the report. |

| **[Updater](.claude/agents/updater.md)** — Agent workflow |
|:--:|
| [![update-figma](https://img.shields.io/badge/update--figma-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/update-figma/SKILL.md) [![save](https://img.shields.io/badge/save-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/save/SKILL.md) [![sync-upstream](https://img.shields.io/badge/sync--upstream-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/sync-upstream/SKILL.md) |
| **update-figma**: Update the Figma token in figma-console MCP config. "update Figma token", /update-figma. **save**: Stage all and create a commit with derived message. "save", "stage", /save. Does not push. **sync-upstream**: Sync from upstream main, push to origin. "sync", "pull", /sync-upstream. |

| **[Uninstaller](.claude/agents/uninstaller.md)** — Agent workflow |
|:--:|
| [![uninstall](https://img.shields.io/badge/uninstall-SKILL-0ea5e9?style=flat&labelColor=4b5563)](.claude/skills/uninstall/SKILL.md) |
| Remove Product Studio MCP entries from the user's global config. "uninstall", "remove MCP", /uninstall. Then restart terminal. |

---
<details>
<summary>Using a working repo with this as upstream</summary>

For a working repo that pulls from Product Studio as upstream (e.g. ryanallen/product-studio).

**Add upstream.** In the working repo:

```bash
git remote add upstream https://github.com/ryanallen/product-studio.git
git fetch upstream
```

Pull with `git pull upstream main` (or say "sync", "pull", or /sync-upstream).

**Local paths config.** `work/paths.md` is gitignored. Copy from `work/paths.md.template` once and edit the tree; sync never overwrites it.

</details>

---

## Repo structure

```
Product Studio/
├── AGENTS.md
├── CLAUDE.md -> AGENTS.md
├── .claude/
│   ├── agents/
│   │   ├── coordinator.md
│   │   ├── designer.md
│   │   ├── documenter.md
│   │   ├── researcher.md
│   │   ├── strategist.md
│   │   ├── verifier.md
│   │   ├── verification-documentor.md
│   │   ├── cleaner.md
│   │   ├── installer.md
│   │   ├── uninstaller.md
│   │   ├── updater.md
│   │   └── customizer.md
│   └── skills/
│       ├── research/SKILL.md
│       ├── document/SKILL.md
│       ├── strategize/SKILL.md
│       ├── analyze-figma/SKILL.md
│       ├── install/
│       │   └── SKILL.md
│       ├── install-custom/
│       │   └── SKILL.md.template
│       ├── save/
│       │   ├── SKILL.md
│       │   └── scripts/
│       │       └── sync-codex-from-claude.mjs
│       ├── sync-upstream/SKILL.md
│       ├── verify-paths/SKILL.md
│       ├── verify-docs/SKILL.md
│       ├── document-verification/SKILL.md
│       ├── clean/SKILL.md
│       ├── uninstall/SKILL.md
│       ├── update-figma/SKILL.md
│       ├── document-paths/SKILL.md
│       ├── document-ticket/SKILL.md
│       ├── document-github/SKILL.md
│       ├── generate-figma/
│       │   ├── SKILL.md
│       │   └── scripts/
│       │       ├── setup-figma-bridge.mjs
│       │       └── figma-desktop-bridge/
├── .tmp/
├── work/
│   ├── paths.md.template
│   └── {team}/{space}/{ticket-id}/{project}/
│       └── README.md
├── package.json
└── README.md
```

### .tmp and cleanup

**`.tmp/`** holds agent-generated reports and temp files. It is gitignored and never committed. The **Clean up studio** flow writes a verification report to `.tmp/verification-report.md` (after verify-docs and document-verification). After you verify the report, optionally run the **clean** skill ("clean", "wipe .tmp", /clean) to delete all contents of `.tmp/`. The clean skill only removes files inside `.tmp/`; it does not touch the rest of the repo.

---

## License

[MIT](LICENSE)

<p align="center">
  <sub>If this helped you, consider <a href="https://github.com/ryanallen/product-studio">giving it a star</a>.</sub>
</p>
