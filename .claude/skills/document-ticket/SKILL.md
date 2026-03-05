---
name: document-ticket
description: Post a comment on a Jira ticket with a link to the project deliverables. Use when user says "update ticket", "Jira", or /document-ticket. In Claude Code and Cursor, /skills lists all.
---

# Document Ticket

Post a comment on the Jira ticket with a link to the project deliverables.

## Inputs

1. **Ticket ID** - Jira ticket key (e.g. PROJ-123)
2. **Project path** - See work/paths.md.

## Process

### 1. Build link for the comment

The comment will include a link to the project deliverables. Base URL is on the "Deliverables base URL:" line in work/paths.md. If missing or empty, ask the user for the deliverables URL. Append the project path to get the full URL. Do not hardcode.

### 2. Post comment on Jira

Use atlassian-rovo MCP to add a comment on the Jira ticket:

```
Research, Define, Strategize deliverables: {full URL}
```
