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

### Atlassian MCP

After adding, authenticate:
```bash
/mcp
```
Follow the Atlassian OAuth 2.1 flow when prompted.

---

## Workflows

### Webpage to Figma
Give the designer a webpage URL and a Figma file URL. See [webpage capture](skills/webpage-capture.md).

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
│   ├── webpage-capture.md
│   ├── deep-research.md
│   ├── document-findings.md
│   ├── root-cause-analysis.md
│   └── scripts/
│       └── capture.js
├── work/
│   └── {team}/{space}/{project}/
│       ├── README.md
│       ├── research/
│       ├── analysis/
│       └── solutions/
├── package.json
└── README.md
```
