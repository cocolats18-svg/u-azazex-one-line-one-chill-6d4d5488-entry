// One Line, One Chill — u-azazex-one-line-one-chill-6d4d5488
// A program/v1 entry: writes a single original sentence of horror
// (under 200 characters) to <output dir>/entry.txt.
// Node 22+ runs this TypeScript file directly; stdlib only, no deps.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: one sentence, one breath. The dread is earned, not announced —
// a household device rehearsing its owner out of existence.
const LINE =
  "My smart speaker answered a question I hadn't asked yet, in my voice, and said it was just practicing for when I'm gone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, mirroring the sealed scorer: 1 to 200 characters, not only
// whitespace. Fail loudly rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-200`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
