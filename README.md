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

# Slack (notifications)
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

---

## How It Works

1. Give the designer a webpage URL and a Figma file URL
2. It captures the page and recreates it in Figma
3. You get a Slack notification when it's done

See [webpage capture](skills/webpage-capture.md) for the full flow.

---

## Repo Structure

```
Studio/
├── CLAUDE.md
├── agents/
│   └── designer.md
├── skills/
│   ├── webpage-capture.md
│   └── scripts/
│       └── capture.js
├── work/
├── package.json
└── README.md
```
