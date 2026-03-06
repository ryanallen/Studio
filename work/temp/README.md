# 📋 Skill heading structure comparison

[🔍 Summary](#-summary) | [📐 Canonical order](#-canonical-order) | [📑 Per-skill headings](#-per-skill-headings) | [⚠️ Differences](#-differences) | [🔧 Recommended fixes](#-recommended-fixes)

---

## 🔍 Summary

Every `.claude/skills/*/SKILL.md` in this project was read. H2 (and key H3) order was compared to a single canonical order. **22 skills** match the canonical order. **6 skills** differ in section names or order; recommended fixes are below.

---

## 📐 Canonical order

| Order | H2 section | Notes |
|-------|-------------|--------|
| 1 | Inputs | Required or "None" |
| 2 | Output | What the skill produces or delivers |
| 3 | Process | Steps; may have ### subsections |
| 4 | Error Handling | Optional; only when the skill defines error cases |
| 5 | Reference | Links to Coordinator, related skills, docs |

**H1** = skill title (e.g. `# Save`). Reference-style content (tables, conventions) can live under Process as subsections or in Reference.

---

## 📑 Per-skill headings

H2 sequence only (no ###). Skills are under `.claude/skills/<name>/`.

| Skill | H2 order | Matches canonical? |
|-------|---------|--------------------|
| analyze-figma | Inputs → Output → Process → Reference | Yes |
| clean | Inputs → Output → Process → Reference | Yes |
| document | Inputs → Output → Required on every README → Markdown standards → Process → (template H2s) → Rules → Reference | No |
| document-agent | Inputs → Output → Process → Reference | Yes |
| document-paths | Inputs → Output → Process → Reference | Yes |
| document-skills | Inputs → Output → Skill structure → SKILL.md format → Checklist → Process → Reference | No |
| document-ticket | Inputs → Output → Process → Reference | Yes |
| document-verification | Inputs → Output → Process → Reference | Yes |
| generate-figma | Inputs → Output → Process → Reference | Yes |
| install | Inputs → Output → Process → Reference | Yes |
| install-choices | Inputs → Output → **Process (custom path)** → Reference | No (heading name) |
| install-config | Inputs → Output → Process → Reference | Yes |
| install-express | Inputs → Output → Process → Reference | Yes |
| install-handoff | Inputs → Output → Process → Reference | Yes |
| install-mcp | Inputs → Output → Process → Reference | Yes |
| install-mcp-setup | Inputs → Output → Process → Reference | Yes |
| research | Inputs → Output → Process → Level-0 (input) → Sources → Findings → Link Tree → Rules → Reference | No |
| save | Inputs → Output → **Command** → **Steps** → Error Handling → Reference | No |
| strategize | Inputs → Output → Process → Summary → Detailed Analysis → Rules → Reference | No |
| sync-upstream | Inputs → Output → Process → Error Handling → Reference | Yes |
| uninstall | Inputs → Output → Process → Reference | Yes |
| update-figma | Inputs → Output → Process → Reference | Yes |
| verify-docs | Inputs → Output → Process → Reference | Yes |
| verify-paths | Inputs → Output → Process → Reference | Yes |

---

## ⚠️ Differences

| Skill | Difference |
|-------|------------|
| **document** | Extra H2s between Output and Process (Required on every README, Markdown standards). Template block (Discovery, Exploration, Go to market) uses H2; Rules before Reference. |
| **document-skills** | Extra H2s between Output and Process (Skill structure, SKILL.md format, Checklist). Reference content; order is Inputs → Output → reference sections → Process → Reference. |
| **install-choices** | Section named "Process (custom path)" instead of "Process". |
| **research** | After Process, output template uses top-level H2 (Level-0 (input), Sources, Findings, Link Tree). Then Rules → Reference. |
| **save** | "Command" and "Steps" are separate H2s instead of under a single Process (with ### Command and ### Steps). |
| **strategize** | After Process, template/output H2s (Summary, Detailed Analysis) and Rules before Reference. |

---

## 🔧 Recommended fixes

1. ~~**install-choices** – Rename `## Process (custom path)` to `## Process`. Optionally add a first line or ###: "Custom path (when user did not choose express)."~~

2. ~~**save** – Fold Command and Steps under Process. Use `## Process` with `### Command` and `### Steps` (or one subsection "Command and steps") so the top-level order is Inputs → Output → Process → Error Handling → Reference.~~

3. ~~**document** – No structural change required if you want to keep "Required on every README" and "Markdown standards" as reference between Output and Process. If you want strict canonical order, move those under `## Process` as subsections (e.g. ### Required on every README, ### Markdown standards) or under a single `## Reference` and keep Process for the four steps only. Recommendation: leave as-is; document is reference-heavy and the current order is readable.~~

4. ~~**document-skills** – Same as document: either leave as-is (reference sections between Output and Process) or move "Skill structure", "SKILL.md format", and "Checklist" under `## Process` as ### subsections. Recommendation: leave as-is; add only an explicit `## Output` if missing (already present).~~

5. ~~**research** – The sections "Level-0 (input)", "Sources", "Findings", "Link Tree" are output templates (what to write in the README). Options: (a) Move them under `## Process` as ### 5. Output with ### subsections for each template, or (b) Keep as top-level H2 but add a short `## Output` right after Inputs (e.g. "Project README at path from work/paths.md with Level-0, Sources, Findings, Link Tree. Handoff to documenter.") and leave the template H2s as the detailed shape of that output. Recommendation: (b); research already has Output; the template H2s are the spec for that output, so either make them ### under Process step 5, or leave and note in this README that research is an exception.~~

6. **strategize** – "Summary" and "Detailed Analysis" are the shape of the output (problem analysis). Options: (a) Add `## Output` after Inputs describing that output, then `## Process` with steps; move Summary and Detailed Analysis under Process as subsections or under Output. (b) Leave as-is and treat as a special case (output template as H2). Recommendation: (a) Add Output; keep Process; move Summary and Detailed Analysis under `## Process` as ### subsections (e.g. ### 5. Write problem analysis with Summary and Detailed Analysis).

---

## 📎 Reference

- Source: all `.claude/skills/*/SKILL.md` in this project.
- Canonical order: Inputs → Output → Process → optional Error Handling → Reference (same as document-skills convention).
