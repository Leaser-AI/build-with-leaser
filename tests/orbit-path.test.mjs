import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const articlePath = new URL("../insights/decision-intelligence/index.html", import.meta.url);
const stylesPath = new URL("../styles.css", import.meta.url);

test("decision-loop pulse follows the rendered orbital ring", async () => {
  const [article, styles] = await Promise.all([
    readFile(articlePath, "utf8"),
    readFile(stylesPath, "utf8"),
  ]);

  assert.match(
    article,
    /class="orbit-ring ring-one">\s*<span class="orbit-pulse"><\/span>\s*<\/span>/,
    "the pulse must inherit the visible ring's responsive geometry",
  );
  assert.match(styles, /offset-path:\s*ellipse\(50% 50% at 50% 50%\)/);
  assert.match(styles, /@keyframes orbit-path\s*{\s*to\s*{\s*offset-distance:\s*100%/);
  assert.doesNotMatch(styles, /translateX\(12px\)/, "the old 12px circular path must not return");
});
