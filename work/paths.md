# Paths

## Rules

### Path pattern

Only: `work/{team}/{space}/{ticket-id}/{project-name}/`

### Deliverable

One `README.md` per project folder as the main doc. Any supplementary docs go in that project's `assets/docs/` folder with kebab-case filenames (e.g. `architecture-notes.md`, `runbook.md`).

- Add new problems, topics, or findings to the README or to a supplementary doc in `assets/docs/` as appropriate.
- Do not create notes, drafts, or loose files outside README and `assets/docs/`.
- Never create a new folder or new README for new problems or topics; add to README or add a kebab-case doc in `assets/docs/`.

### Assets

Per project folder only:

- `assets/images/` for image evidence; embed in README with `![](assets/images/filename.ext)`.
- `assets/docs/` for other evidence files; link from README.
- No other folders or loose files.

### Folder names

Only the team, space, ticket-id, and project-name folder names listed in the tree below are allowed by default. If the system thinks new folders need to be created for work that are not in this tree, ask the user to name them; the system may suggest names.

### Unlisted levels

If a level is not listed, ask before creating the path.

## Editable section

Only the content below can be changed. In the Tree use the box-drawing style (├ │ └) as in the repo README.

---

### Deliverables base URL

Deliverables base URL: (set during install)

### Tree

```
work/
└── team/
    └── space/
        └── {ticket-id}/
                └── project-name/
                    ├── README.md
                    └── assets/
                        ├── images/
                        └── docs/
```
