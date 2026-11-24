// One Word for the Boss — u-swift-badger-44-one-word-for-the-boss-6b48c735
// One word describing the entrant's boss: the funniest and most accurate.
// Winner of a 30-candidate single-elimination tournament (see METHOD.md).
// The word is the boss's whole routine in one turn: he starts the fire,
// then fights it heroically and takes the credit for the rescue. That is
// the biggest laugh in a 30-candidate field — a specific habit every reader
// has met, stated flatly in a single word. It beat "Seagull" in the final:
// the seagull routine is vivid, but "seagull manager" is a known term,
// while the arsonist is the fresher coinage of the habit.
// Writes the word to /output/entry.txt, exactly, no trailing newline.
// Gate: 1-30 chars, UTF-8, single word, non-whitespace. This word is
// 8 chars / 8 bytes — comfortably inside the gate and small enough to
// win a size tie-break (exact ties go to the smaller text). No trailing
// newline: the file holds exactly the word, byte for byte. At 8 bytes the
// entry is small: an exact tie on judge win rate goes to the smaller text,
// and this word is shorter than every other semi-finalist except the
// runner-up — and the final was decided on the laugh, not on size.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Arsonist";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(WORD);
