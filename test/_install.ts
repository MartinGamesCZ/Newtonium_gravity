import { $ } from "bun";
import { cpSync, mkdirSync, rmSync } from "fs";

if (process.env.BUILD == "true") {
  console.log("Building package...");

  const r = await $`cd ../package && bun run prepack`.text();

  console.log(r);
}

rmSync("node_modules/@newtonium/gravity", { recursive: true, force: true });

mkdirSync("node_modules/@newtonium/gravity", { recursive: true });

cpSync("../package/dist", "node_modules/@newtonium/gravity/dist", {
  recursive: true,
});

cpSync(
  "../package/package.json",
  "node_modules/@newtonium/gravity/package.json"
);

console.log("Launching...");
