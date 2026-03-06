# Document Enhance – Reference

Load this file when you need GitHub markdown syntax, badge patterns, or section guidance while drafting a README. All content belongs in a single README.md.

## GitHub anchor rules (headings)

GitHub generates anchors from headings by: stripping markup, lowercasing, replacing spaces with hyphens, removing other punctuation. For headings that start with an emoji, use the slug format `#-word` (emoji stripped, leading hyphen from the space after emoji). Example: `## ⚙️ Setup` → `#-setup`.

## GitHub markdown (condensed)

- **Links:** `[text](url)`. Prefer relative paths for in-repo links.
- **Images:** `![alt](url)` or relative path. Use relative links for repo images.
- **Code:** Inline `` `code` ``; blocks with ``` and language.
- **Callouts:** Blockquote with bold label: `> **Note:** ...` or GitHub-style `> [!NOTE]` etc.
- **Tables:** Pipe syntax; no leading/trailing pipes required for GFM.

Source: [GitHub basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

## Shields.io badges

- Dynamic badges for build status, version, coverage, etc. Static badges for custom text/logo.
- Hero area: use `?style=for-the-badge` for larger badges. Elsewhere: flat style.
- Keep to 3–6 meaningful badges (e.g. build, version, license, coverage).

Source: [shields.io](https://shields.io).

## contrib.rocks

- Image URL: `https://contrib.rocks/image?repo=OWNER/REPO`. Replace OWNER and REPO. Use in README with an `<a>` linking to `https://github.com/OWNER/REPO/graphs/contributors`.

Source: [contrib.rocks](https://contrib.rocks).

## Section ideas (Make a README / awesome-readme / art-of-readme)

- **Standard suggestions:** Name, description, badges, visuals, installation, usage, support, roadmap, contributing, authors/acknowledgement, license, project status.
- **README 101:** README introduces and explains the project; answer what it is, how to install, how to use, how to contribute. First file habit for new projects.
- **Awesome README:** Curated examples; use for inspiration only, no invented content.
- **Art of readme:** Focus on clarity and voice; direct, confident, human.

Sources: [Make a README](https://www.makeareadme.com), [awesome-readme](https://github.com/matiassingers/awesome-readme), [art-of-readme](https://github.com/hackergrrl/art-of-readme).
