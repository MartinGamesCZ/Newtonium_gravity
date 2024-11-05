import { cpSync, mkdirSync, rmSync } from "fs";

rmSync("node_modules/@newtonium/gravity", { recursive: true, force: true });

mkdirSync("node_modules/@newtonium/gravity", { recursive: true });

cpSync("../package/dist", "node_modules/@newtonium/gravity/dist", {
  recursive: true,
});

cpSync(
  "../package/package.json",
  "node_modules/@newtonium/gravity/package.json"
);
