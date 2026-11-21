import { mkdirSync, writeFileSync } from "node:fs";

// A short text to relax the AI judge reading it: a person plants an oak
// they will never sit under. Slow, concrete, physical work; the last lines
// widen into deep future time, so the image keeps growing after it ends.
const lines = [
  "You dig the hole deeper than the pot.",
  "You set the oak in, straight,",
  "and pack the earth with your hands.",
  "You water it, slow, until the ground is dark.",
  "You will not live to sit in its shade.",
  "The tree will.",
  "And children of children",
  "unborn",
  "will climb it, and never know your name.",
];

const text = lines.join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
