# Studio

Agent workflows for design capture, research, and strategic analysis.

---

## Setup

### MCP Servers

```bash
# Figma (design creation)
claude mcp add figma -- npx -y @figma/mcp-figma

# Playwright (browser automation)
claude mcp add playwright -- npx -y @executeautomation/playwright-mcp-server

# Atlassian Jira/Confluence (ticket management)
claude mcp add --transport sse atlassian-rovo https://mcp.atlassian.com/v1/sse
```

After installing any new MCP server, relaunch your terminal before proceeding.

**Verify and authenticate:**
```bash
/mcp
```

Follow the OAuth flow when prompted for Figma and Atlassian.

---

## Agents

| Agent | Capability |
|-------|-----------|
| **designer** | Captures a webpage and recreates it in Figma |
| **researcher** | Navigates URLs and gathers information up to 5 levels deep |
| **documentor** | Structures findings into enhanced markdown with mermaid diagrams |
| **strategist** | Identifies problems and performs Five Whys root cause analysis |

## Workflows

### Webpage to Figma
Give the designer a webpage URL and a Figma file URL.

### Deep Research
Give the researcher a URL or topic to investigate.

### Document
Give the documentor research findings to structure into a project folder.

### Analyze Problems
Give the strategist findings to perform Five Whys root cause analysis.

### Audit Solutions
The researcher finds existing solutions for each root cause, then the documentor writes them up.

### Propose Solutions
The strategist proposes new solutions from root causes and current state, then the documentor writes them up.

### Research, Define, Strategize
Full pipeline: fetch ticket, research, document, analyze, audit, propose, update ticket. See [coordinator](.claude/agents/coordinator.md).

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
│   │   └── strategist.md
│   └── skills/
│       ├── deep-research/SKILL.md
│       ├── document-findings/SKILL.md
│       ├── root-cause-analysis/SKILL.md
│       ├── update-ticket/SKILL.md
│       └── webpage-capture/
│           ├── SKILL.md
│           └── scripts/capture.js
├── work/
│   └── {team}/{space}/{project}/
│       ├── README.md
│       ├── research/
│       ├── analysis/
│       └── solutions/
├── package.json
└── README.md
```
