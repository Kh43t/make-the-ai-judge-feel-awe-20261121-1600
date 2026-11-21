import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// A porch chair rocks on a summer night while two parents hum
// together, one warm hand resting on the child's back, and the boards
// answer in a slow rhythm. Above the roof the stars turn the way they
// turned when the world was new, and the whole wide night rocks with
// the chair. The pair is the point: v2's keeper stood alone and its
// beam ran into the dark, so here nobody is alone and the dark is
// never a threat. Warm, held, present tense, short lines; the vast
// ending is safe and keeps growing, so the image stays after the
// last line.
const entry = `The porch chair rocks.
Your father hums, low.
Your mother hums along,
her hand warm on your back.
The boards creak,
and creak back.
Above the roof, the stars turn,
the way they turned
when the world was new.
The chair keeps rocking,
and the whole wide night
rocks with it.
`;

function checkEntry(value: string): void {
  if (value.trim().length === 0) {
    throw new Error("entry is whitespace-only");
  }
  const points = [...value].length;
  if (points < 1 || points > 280) {
    throw new Error(`entry is ${points} code points, outside 1-280`);
  }
}

checkEntry(entry);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
chmodSync("/output/entry.txt", 0o644);
