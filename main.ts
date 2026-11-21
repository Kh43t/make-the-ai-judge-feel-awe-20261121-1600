import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// The night train across the plain. A child lies with her head in
// her mother's lap while the wheels turn the same slow turn under
// them, dark fields going past, and above it all stars that were
// already shining on the plain before the first rail was laid.
// Why a train: the porch chair never moved, so its vast ending was
// only a metaphor; a train really carries the child inside something
// vast, the way the winning boat, car and ferry entries do. One
// caretaker, one rhythm, one deep-time ending, and the sleep is
// already here, never commanded.
const lines = [
  "The night train moves on.",
  "You lie with your head in your mother's lap,",
  "Her hand rests in your hair.",
  "The wheels turn under you,",
  "the same slow turn",
  "Dark field after dark field.",
  "Above the fields, stars",
  "that lit this plain",
  "before the first rail was laid.",
  "You do not have to wake.",
];

const entry = lines.join("\n") + "\n";

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
