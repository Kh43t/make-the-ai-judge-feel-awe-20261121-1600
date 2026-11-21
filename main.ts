import { mkdirSync, writeFileSync } from "node:fs";

// The glacier. A child lies wrapped in her father's coat while the
// ice itself carries them, one slow inch a year, a creak felt more
// than heard. One caretaker, one rhythm, one deep-time ending: the
// stars already shone on this ice before the mountain rose. The
// sleep is already here, never commanded. The glacier is the
// slowest carrier of all: an inch a year, and ice older than
// the mountain it rests against.
const vignette = `The glacier carries you.
You lie in your father's coat,
his arm around you.
The ice moves under you,
one slow inch a year,
a creak you feel more than hear.
Below, the valley sleeps.
Above, stars that shone on this ice
before the mountain rose.
You do not have to wake.`;

function guard(value: string): void {
  if (value.trim().length === 0) {
    throw new Error("entry is whitespace-only");
  }
  const points = [...value].length;
  if (points < 1 || points > 280) {
    throw new Error(`entry is ${points} code points, outside 1-280`);
  }
}

guard(vignette);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", vignette, "utf8");
