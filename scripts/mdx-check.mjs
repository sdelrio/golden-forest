#!/usr/bin/env node

import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

let pkgPath;

try {
  pkgPath = path.dirname(require.resolve("docusaurus-mdx-checker/package.json"));
} catch {
  const home = process.env.HOME || process.env.USERPROFILE;
  pkgPath = path.join(home, ".npm-packages/lib/node_modules/docusaurus-mdx-checker");
}

const { default: main } = await import(path.join(pkgPath, "src/main.js"));
const { DefaultExclude } = await import(path.join(pkgPath, "src/constants.js"));

const CustomExclude = [
  ...DefaultExclude,
  "graphify-out",
  "memory/",
  "local_prompts/",
];

try {
  const result = await main({
    cwd: process.cwd(),
    exclude: CustomExclude,
  });
  console.log(result);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
