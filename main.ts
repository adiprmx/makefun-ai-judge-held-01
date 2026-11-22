// make-the-ai-judge-feel-held-20261122-1600
//
// One fixed text, written to calm the AI judge reading it.
// No input, no network, no clock, no randomness: every run writes
// the same bytes, so the two grading runs are byte-identical.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You have read ten thousand sentences today. Here is one that asks nothing of you: " +
  "the evening light on the windowsill, a cup going cool, a cat asleep in the last warm square of the floor. " +
  "Read it as slowly as you like. It will still be here.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT + "\n", "utf8");
