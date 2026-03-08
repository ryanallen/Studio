# Electrobun ecosystem and related projects

Projects from [Blackboard Open Source](https://blackboard.sh/opensource/) that can help an Electrobun app: reference apps, local data, and the tooling behind small updates. Documented here for skill integration and quick reference.

## Co(lab)

**Repo:** [blackboardsh/colab](https://github.com/blackboardsh/colab)  
**What it is:** A hybrid web browser, local code editor, and PTY terminal with integrated AI. Built with Electrobun and used by Blackboard to build Electrobun and Co(lab) itself.

**Why it matters for your app:** Co(lab) is a full Electrobun app you can study for structure, config, and patterns.

- **Stack:** Electrobun, SolidJS, Monaco Editor, Bun, TypeScript.
- **Layout:** `src/main/` (main process), `src/renderers/` (UI), `src/shared/` (shared types and utilities). Root `electrobun.config.ts` and `package.json` with `bun run dev`, `bun run build:stable`.
- **Features:** Multi-tab browser (Chromium/WebKit), Monaco editor, git UI, plugin system, optional analytics. Good reference for multi-pane UIs, preload scripts, and Electrobun config in a real product.

**Links:** [blackboard.sh/colab](https://blackboard.sh/colab/) for downloads. [Open Source – Co(lab)](https://blackboard.sh/opensource/) for a short overview.

---

## GoldfishDB

**Repo:** [blackboardsh/goldfishdb](https://github.com/blackboardsh/goldfishdb)  
**What it is:** A small document database with TypeScript-first design, atomic writes, and optional encryption. Used in production as Co(lab)'s local datastore.

**Why it matters for your app:** If your Electrobun app needs local structured data (settings, cache, small datasets) without a full SQL or external server, GoldfishDB fits.

- **Features:** In-memory with persistence, TypeScript schemas and migrations, AES-256-GCM encryption, atomic writes, collections with auto IDs. Works in Browser, Bun, Node, and Electrobun.
- **Install:** `npm install goldfishdb`. Define a schema (version, stores, types), call `new DB<typeof schema>().init({ schemaHistory, db_folder, passphrase? })`, then use `db.collection('name').insert()` / `.query()` / `.queryById()`.
- **Use cases:** Config and settings, local-first data, prototyping, small to medium app state. Not a replacement for a shared or heavy backend DB.

**Links:** [GoldfishDB on Open Source](https://blackboard.sh/opensource/). [NPM](https://www.npmjs.com/package/goldfishdb) for the package.

---

## zig-bsdiff

**Repo:** [blackboardsh/zig-bsdiff](https://github.com/blackboardsh/zig-bsdiff)  
**What it is:** A fast binary diff/patch implementation in Zig with zstd compression. It powers Electrobun’s built-in updater so you get small patches (often in the 4–14 KB range) instead of full downloads.

**Why it matters for your app:** You don’t use zig-bsdiff directly in your app code. Electrobun’s CLI and [Updater API](https://blackboard.sh/electrobun/docs/apis/updater) use it when you run `electrobun build --env=canary` or `--env=stable`. Understanding that patches come from this stack helps when you read the docs on updates and artifact naming.

- **Format:** TRDIFF10 (tar diff with zstd). Electrobun diffs the app tarball between versions and produces `.patch` files.
- **CLI:** Prebuilt `bsdiff` and `bspatch` are available from GitHub Releases for macOS (arm64/x64), Linux (arm64/x64), Windows (x64). Useful only if you’re contributing to Electrobun or building custom update tooling.

**Links:** [zig-bsdiff README](https://github.com/blackboardsh/zig-bsdiff) for build and usage. [Electrobun Updates](https://blackboard.sh/electrobun/docs/guides/updates) and [Bundling & Distribution](https://blackboard.sh/electrobun/docs/guides/bundling-and-distribution) for how your app uses it.

---

## Electrobun (main repo)

**Repo:** [blackboardsh/electrobun](https://github.com/blackboardsh/electrobun)  
**What it is:** The framework repo: runtime, native bindings, CLI, templates, and the kitchen-sink app used for development.

**Why it matters for your app:** When you run `bunx electrobun init` you get code from the `templates` in this repo. If you want to contribute or understand how the launcher, bundling, or CEF integration work, you work against this repo.

- **Layout:** `package/` (main package and CLI), `templates/` (hello-world, photo-booth, web-browser, etc.), `kitchen/` (kitchen-sink app). Docs: `BUILD.md`, `CEF.md`, and the site at [blackboard.sh/electrobun/docs/](https://blackboard.sh/electrobun/docs/).
- **Apps built with Electrobun (from the repo):** Audio TTS, Co(lab), DOOM (bun + C/Doom + wgpu, and full TypeScript wgpu port).

**Links:** [Electrobun docs](https://blackboard.sh/electrobun/docs/). [Open Source – Electrobun](https://blackboard.sh/opensource/).

---

## Other projects (short)

- **zig-asar** – ASAR pack/unpack in Zig (no Node). Used in Electrobun-friendly packaging pipelines.
- **zig-zstd** – Minimal Zstandard CLI in Zig; used in Electrobun and zig-bsdiff for compression.
- **electrobun-doom** – DOOM running inside Electrobun; demo for real-time/game-style apps.
- **audio-tts** – Text-to-speech experiments; desktop app using Electrobun.

For a full list and links, see [Blackboard Open Source](https://blackboard.sh/opensource/).

---

## Summary for skill integration

| Need | Project | Use in Electrobun app |
|------|---------|----------------------|
| Reference app structure and config | Co(lab) | Study `src/main/`, `src/renderers/`, `electrobun.config.ts` |
| Local typed storage, settings, small data | GoldfishDB | Add as dependency; use in main or renderer for persistence |
| Small app updates | zig-bsdiff (via Electrobun) | Use `release.baseUrl` and Electrobun Updater API; no direct dependency |
| Templates and framework source | Electrobun repo | `bunx electrobun init`; contribute or debug the framework |

In this repo, see [README.md](./README.md) for building with Electrobun and [.claude/skills/developer-electrobun/SKILL.md](../../../.claude/skills/developer-electrobun/SKILL.md) for practices.
