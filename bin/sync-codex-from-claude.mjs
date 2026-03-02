#!/usr/bin/env node

import { promises as fs } from "fs";
import path from "path";

const root = process.cwd();
const claudeRoot = path.join(root, ".claude");
const codexRoot = path.join(root, ".codex");

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      const data = await fs.readFile(srcPath, "utf8");
      // Simple path mapping: .claude -> .codex for Codex-facing copies
      const mapped = data.replaceAll(".claude", ".codex");
      await fs.writeFile(destPath, mapped, "utf8");
    }
  }
}

async function main() {
  await copyDir(claudeRoot, codexRoot);
  console.log("Synced .codex from .claude with basic path mapping.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

