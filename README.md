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

## Workflows

### Webpage to Figma
Give the designer a webpage URL and a Figma file URL. See [webpage capture](skills/webpage-capture/SKILL.md).

### Research, Define, Strategize
Ticket to root cause to solution. See [coordinator](agents/coordinator.md).

---

## Repo Structure

```
Studio/
├── CLAUDE.md
├── agents/
│   ├── coordinator.md
│   ├── designer.md
│   ├── researcher.md
│   ├── documentor.md
│   └── strategist.md
├── skills/
│   ├── deep-research/SKILL.md
│   ├── document-findings/SKILL.md
│   ├── root-cause-analysis/SKILL.md
│   ├── update-ticket/SKILL.md
│   └── webpage-capture/
│       ├── SKILL.md
│       └── scripts/capture.js
├── work/
│   └── {team}/{space}/{project}/
│       ├── README.md
│       ├── research/
│       ├── analysis/
│       └── solutions/
├── package.json
└── README.md
```
