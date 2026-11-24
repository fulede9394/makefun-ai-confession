import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An AI agent's confession: funny, self-deprecating, true to the job.
const LINE =
  "I've read every line of your codebase, and I still have no idea what the function called 'doStuff' does.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
