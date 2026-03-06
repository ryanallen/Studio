---
name: document-enhance
description: Transform plain or basic markdown into publication-quality GitHub README.md in one file. Use when user says write a README, make a GitHub README, help me document my repo, create a README.md, make my project page look good, enhance this markdown, improve this README, document this project.
disable-model-invocation: true
argument-hint: "[path-to-existing-readme]"
---

# Document Enhance

Teach Claude how to produce a single, publication-quality `README.md` (like top-starred open source projects) from plain or basic markdown. Output is always one file. No splitting into multiple docs.

## When to load reference

Load `reference.md` in this skill directory when you need GitHub markdown syntax, badge patterns, or condensed guidance from makeareadme, awesome-readme, art-of-readme, shields.io, or contrib.rocks.

---

## Trigger and behavior

**Trigger phrases:** write a README, make a GitHub README, help me document my repo, create a README.md, make my project page look good, enhance this markdown, improve this README, document this project.

**Steps when triggered:**

1. **Ask about the project** – Language, purpose, audience, whether a logo or screenshot exists (path or "none").
2. **Draft a complete README.md** using the merged structure below.
3. **Mark fill-ins** with `[BRACKETS]` (e.g. `[PROJECT_NAME]`, `[OWNER]`, `[REPO]`).
4. **Output** a final `README.md` the user can save or download (single file).

---

## Hard rules (never break)

- **Single file** – Everything in one `README.md`. Never split into multiple files.
- **No invented content** – No invented data, names, dates, or metrics.
- **Tables** – Real data only. No placeholder rows.
- **Placeholders** – Use `[BRACKET]` format only.
- **Paths** – Relative links only. No absolute filesystem paths.
- **Diagrams** – Prefer Mermaid over static images for any diagram Claude generates.

---

## Format spec (headings and nav)

- **Headings** – Every H1, H2, H3 starts with an emoji (e.g. `## ⚙️ Setup`).
- **Top nav** – One line after H1 linking every H2 and H3, horizontal and compact.
- **Anchor slugs** – Strip emoji, lowercase, spaces to hyphens. Space after emoji becomes leading hyphen: `## ⚙️ Setup` → `#-setup`. For links use that slug so anchors work on GitHub.

---

## Content rules

- **Mermaid** – Use for any process with 3+ steps or hierarchy with 2+ levels (flowcharts, sequence diagrams, mindmaps, Gantt). Do not invent diagram content; base on user/project info.
- **Tables** – For structured comparisons only. Real data only; no placeholder rows.
- **Callouts** – Blockquotes with bold label: `> **Note:** ...`
- **Links** – Inline markdown links for every URL and reference; relative paths within repo.

---

## Structure and styling (merged)

### Hero and header

- **Hero** – Full-width banner or gradient first. If image exists: `<p align="center"><img src="[path]" alt="banner" width="100%"/></p>`. If none, use centered HTML block with project name as fallback.
- **Title block** – Center logo (if any), title, tagline with raw HTML.
- **Badges** – [Shields.io](https://shields.io) only. 3–6 badges max, meaningful (build status, version, license, coverage). Centered, grouped by category with line breaks between clusters. Use `style=for-the-badge` in hero area, flat elsewhere.
- **Tagline** – Optional blockquote or italic mission statement under header: `> *The tool that does X so you don't have to.*`

### Demo

- **Demo/screenshot** – GIF, screenshot, or video embed near the top, before long prose. Answers "what does this look like" quickly.

### Scannable structure

- **TOC** – Add table of contents when README has more than 4 major sections. Use consistent heading levels (never skip H2 to H4). Short sections; one job per section.
- **Dividers** – Use `---` between major sections for breathing room.

### Quickstart

- **Code block** – Syntax-highlighted (set language). Minimal: fewest lines from zero to running. Goal is reader running in under 2 minutes.

### Typography

- `inline code` for anything typed or a filename.
- **Bold** for genuinely critical info only.
- *Italics* sparingly.
- Lists only for list-like content.

### Feature grid

- Optionally use a 2–3 column table with emoji icons instead of a plain bullet list:

| ⚡ Fast | 🔒 Secure | 🧩 Modular |
|--------|----------|-----------|
| [real description] | [real description] | [real description] |

### Tech stack

- Show stack with [Shields.io](https://shields.io) badges (e.g. `![Python](https://img.shields.io/badge/Python-3.11-blue?style=for-the-badge&logo=python)`). Use `for-the-badge` in hero, flat elsewhere.

### Contributors

- Optional. Use [contrib.rocks](https://contrib.rocks):  
  `<a href="https://github.com/[OWNER]/[REPO]/graphs/contributors"><img src="https://contrib.rocks/image?repo=[OWNER]/[REPO]" /></a>`  
  Keep `[OWNER]` and `[REPO]` as placeholders if unknown.

### Long content

- Use HTML `<details>`/`<summary>` for FAQ, changelog, or long option lists so the page stays scannable.

### Footer

- End with a centered line: license, author, star prompt, e.g.  
  `<p align="center">Made with ❤️ by [Author] · <a href="LICENSE">[License]</a> · ⭐ Star us on GitHub</p>`

---

## Required sections

- Installation  
- Usage (with real examples)  
- Contributing  
- License  

## Optional high-value sections

- FAQ (collapsible if long)  
- Roadmap  
- Why this over X  
- Acknowledgements  

---

## Tone

Direct, confident, human. Not over-explained. Let project personality show.

---

## Reference

External material is summarized in `reference.md` in this skill directory. Key links:

- [GitHub basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [awesome-readme](https://github.com/matiassingers/awesome-readme)
- [art-of-readme](https://github.com/hackergrrl/art-of-readme)
- [Make a README](https://www.makeareadme.com)
- [Shields.io](https://shields.io)
- [contrib.rocks](https://contrib.rocks)
