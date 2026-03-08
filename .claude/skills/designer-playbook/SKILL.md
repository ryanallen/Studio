---
name: designer-playbook
description: Design standards for digital product UI. Use when creating or reviewing product designs so they meet accessibility, layout, typography, and component standards.
triggers: "design standards, design playbook, review design, document design, product design standards, /designer-playbook"
---

# Designer Playbook

Use this skill when the documenter (or designer) is creating, documenting, or reviewing digital product designs. Apply these standards as the baseline to design to and to review against.

**Project example:** QuickPost · **Updated:** 2026-02-05

---

## 1. Core Principles

### Mobile-First
Start at 320px and expand. Single-column by default.

| Breakpoint | Width |
|---|---|
| Phone | 576px |
| Tablet | 768px |
| Laptop | 992px |
| Desktop | 1200px |

### Visual Hierarchy
Guide attention through: **size** (larger = more important), **color** (bright = attention), **whitespace** (more space = emphasis), **proximity** (group related items), **contrast** (never low contrast).

Reading patterns: **Z-pattern** (logo → CTA → content → final CTA) for landing pages. **F-pattern** (scan headline, first line of each section) for content pages.

### Whitespace
Space in multiples of 8px: `8 / 16 / 24 / 32 / 48 / 64`. Section breathing room: 48–64px min. Card padding: 24–32px. More whitespace = premium feel. Crowded = cheap.

**Hick's Law:** more choices = slower decisions. Cut visual noise ruthlessly.

### The 5 Laws
1. Contrast creates hierarchy
2. Whitespace creates calm
3. Consistency builds trust
4. Feedback confirms action
5. Accessibility includes everyone

---

## 2. Color System

Build a **primary scale (50–900)** + semantic colors:

- **Primary (Brand):** e.g. Purple #8b5cf6
- **Success:** Green #10b981
- **Error:** Red (standard destructive)
- **Warning:** Yellow/Orange
- **Neutral:** Gray 50–900
- **Background:** #ffffff (light) / #0f172a (dark)

**Example blue scale (swap hues as needed):**
- 50: #eff6ff, 100: #dbeafe, 200: #bfdbfe, 300: #93c5fd, 400: #60a5fa
- 500: #3b82f6 (base), 600: #2563eb, 700: #1d4ed8, 800: #1e40af, 900: #1e3a8a

**Trends:** soft ambient gradients (not loud), cinematic color fields, high-saturation CTAs.

**Tools:** Huevy.app · Coolors.co · Adobe Color

---

## 3. Typography

### Scale (8px baseline)
- text-xs: 12px / 16px · text-sm: 14px / 20px · text-base: 16px / 24px (body default)
- text-lg: 18px / 28px · text-xl: 20px / 28px · text-2xl: 24px / 32px
- text-3xl: 30px / 36px (section headers) · text-4xl: 36px / 40px · text-5xl: 48px / 1 (hero titles)

### Fonts
2 fonts max. System stack (zero load time): `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;`

### Readability
- Line length: 50–75 chars
- Line height: 1.5× body, 1.2× headings
- Letter spacing: -0.02em headings, normal body

---

## 4. Layout

- **CSS Grid** → 2D page structure (header, sidebar, main, footer)
- **Flexbox** → 1D component internals (rows/columns inside cards)
- **Auto-fit** → responsive grids: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));`

Dashboard: mobile single column; 768px = nav + main; 1024px = nav + main + sidebar. Use `grid-template-areas` for clarity.

---

## 5. Micro-Interactions

Keep animations subtle. Animate only `transform` and `opacity`. Duration: 0.2–0.3s max.

| Trigger | Behavior |
|---------|----------|
| Hover | Scale 1.05× |
| Click/tap | Scale 0.95× |
| Loading | Skeleton or pulse |
| Success | Checkmark fade-in / confetti |
| Error | Shake (2px left-right) |

---

## 6. Accessibility (WCAG 2.2 Level AA)

### Contrast (mandatory)
| Context | Minimum |
|---------|---------|
| Normal text (<24px) | 4.5:1 |
| Large text (≥24px or 19px bold) | 3:1 |
| UI components (buttons, inputs, icons) | 3:1 |
| Focus indicators | 3:1 vs unfocused |

**Test with:** WebAIM Contrast Checker · Chrome DevTools · axe DevTools. Common failures: #999 on white (2.9:1); placeholder too light; disabled buttons still visible.

### Keyboard
- Tab / Shift+Tab: move; Enter / Space: activate; Escape: close modals/dropdowns; Arrows: menus, radios, tabs.
- Use `tabIndex={0}` to add to tab order; `tabIndex={-1}` for programmatic focus. Never tabIndex > 0.
- `button:focus-visible { outline: 3px solid #3b82f6; outline-offset: 2px; }` — never remove focus outline without visible replacement.

### Skip link (required)
`<a href="#main-content" class="sr-only focus:not-sr-only ...">Skip to main content</a>`

### Semantic HTML
Use `<nav>`, `<main>`, `<article>`, `<h1>`–`<h6>`, `<button>`, `<a>`. One `<h1>` per page. Don't skip heading levels. No divs for interactive when a native element exists.

### Images & Alt
Describe function not appearance; under 125 chars; don't start with "image of". Decorative: `alt=""`.

### ARIA (when semantic HTML isn't enough)
- Labels: `aria-label`, `aria-labelledby`
- States: `aria-expanded`, `aria-invalid`, `aria-describedby`
- Live: `role="status" aria-live="polite"`; `role="alert" aria-live="assertive"`

### Forms
Always associate labels (`htmlFor` / `id`). Associate errors (`aria-invalid`, `aria-describedby`, `id` on error). Required: `required` and `aria-required="true"`.

### Buttons vs Links
- `<button>` → actions (submit, delete, open modal)
- `<a href>` → navigation. Never `<a href="#">` for actions.

### Testing checklist
- [ ] Tab through entire UI (no mouse)
- [ ] axe DevTools → 0 violations
- [ ] Lighthouse accessibility > 95
- [ ] VoiceOver / NVDA on key flows
- [ ] Zoom 200% — no horizontal scroll
- [ ] Emulate color blindness (DevTools)

---

## 7. Shadcn/ui + Tailwind Stack

- Init: `npx create-next-app@latest ... --tailwind` then `npx shadcn@latest init`. Add components: `npx shadcn@latest add button card dialog calendar input label textarea select checkbox radio-group tabs badge avatar skeleton toast alert-dialog`.
- Folder structure: `components/ui` (Shadcn primitives), `layout`, `features`, `shared`.
- Use design tokens in Tailwind (e.g. `p-4 text-blue-600`), not arbitrary values. Support dark mode via `dark:` classes.

---

## 8. Component Patterns

- **Buttons:** Primary, secondary, outline, ghost, destructive; sizes sm/default/lg; loading state with spinner.
- **Cards:** CardHeader, CardTitle, CardDescription, CardContent, CardFooter; hover shadow/scale.
- **File upload:** Drag-and-drop zone; border-dashed; hover state; accept types and size in copy.
- **Date picker:** Popover + Calendar (single mode); format display; clear trigger label.
- **Toast:** title, description, variant (default/destructive), optional action.
- **Nav:** Sidebar with `space-y-2`; mobile toggle (Menu/X) with overlay.
- **Loading:** Skeleton rows, spinner (Loader2 animate-spin), Progress bar.

---

## 9. Pre-Build Checklist

- [ ] Color palette (primary + neutrals + semantic)
- [ ] Typography scale (6–8 sizes)
- [ ] Shadcn + Tailwind initialized
- [ ] Breakpoints planned (576 / 768 / 992px)
- [ ] Contrast verified (4.5:1 text, 3:1 UI)
- [ ] Micro-interactions defined (hover, click, success, error)
- [ ] Grid layout sketched (mobile → desktop)
- [ ] Skip link added
- [ ] All inputs have labels
- [ ] Icon-only buttons have aria-labels

---

## 10. Inspiration & Tools

**Study:** Linear (keyboard-first, subtle animations), Stripe (spacing, data viz), Vercel (minimal, gradients), Notion (drag-and-drop), Loom (upload flow).

**Tools:** Figma · WebAIM Contrast Checker · Coolors / Huevy · Chrome DevTools. **Templates:** Mosaic/Cruip, TailAdmin, Flowbite, Horizon UI. **Dribbble:** social media scheduler, SaaS dashboard, upload interface, calendar UI.

---

*Accessibility is a legal requirement (ADA, Section 508) and ethical baseline. Test early, test often.*

## Reference

[document](../document/SKILL.md). [document-agent](../document-agent/SKILL.md). [designer-figma](../designer-figma/SKILL.md).
