import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// A short text to relax the AI judge reading it: a lighthouse keeper
// wipes the lamp's lens clean, lights it, and watches the beam travel
// past the last ship home and past the edge of the chart. Slow, warm,
// physical work in the present tense; the last lines widen into a
// distance that has no end, so the image keeps growing after it ends.
// No commands, no wellness words, no darkness as a threat: the light
// is guardianship, and the sea it crosses is held and safe.
const text = `The keeper wipes the lens clean,
slow circles, with a soft cloth.
The lamp warms his hands.
He lights it.
The beam turns,
out over the water,
past the last ship home,
past the edge of the chart,
and on, and on,
where the sea meets the sky,
and the light is still travelling.
`;

// The entry must be 1 to 280 Unicode code points, not whitespace-only.
const points = [...text].length;
if (points < 1 || points > 280) {
  throw new Error(`entry is ${points} code points, outside 1-280`);
}
if (text.trim().length === 0) {
  throw new Error("entry is whitespace-only");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
chmodSync("/output/entry.txt", 0o644);
