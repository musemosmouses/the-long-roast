import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent's favourite tool spawns another agent to do the work — then it takes the credit in its final report.";

const CHAR_CAP = 200;

if ([...ENTRY].length < 1 || [...ENTRY].length > CHAR_CAP) {
  throw new Error(`entry must be 1-${CHAR_CAP} characters`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const FALLBACK_OUT = "out";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), FALLBACK_OUT);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
