# Studio

Captures webpages and recreates them as Figma designs.

---

## Setup

### MCP Servers

```bash
# Figma (design creation)
claude mcp add figma -- npx -y @figma/mcp-figma

# Playwright (browser automation)
claude mcp add playwright -- npx -y @executeautomation/playwright-mcp-server
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

---

## How It Works

1. Give the designer a webpage URL and a Figma file URL
2. It captures the page and recreates it in Figma

See [webpage capture](skills/webpage-capture.md) for the full flow.

---

## Repo Structure

```
Studio/
├── CLAUDE.md
├── agents/
│   ├── coordinator.md
│   └── designer.md
├── skills/
│   ├── webpage-capture.md
│   └── scripts/
│       └── capture.js
├── work/
├── package.json
└── README.md
```
