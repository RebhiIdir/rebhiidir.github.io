import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const astroBin = resolve(root, "node_modules", "astro", "bin", "astro.mjs");

process.env.ASTRO_TELEMETRY_DISABLED = "1";
process.env.TELEMETRY_DISABLED = "1";

const result = spawnSync(process.execPath, [astroBin, ...process.argv.slice(2)], {
  cwd: root,
  env: process.env,
  stdio: "inherit",
});

process.exit(result.status ?? 1);
