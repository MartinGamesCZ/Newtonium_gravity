import { writeFileSync } from "fs";
import { useEffect, useState } from "react";
import path from "path";

import {
  Text,
  Button,
  GravityRenderer,
  createStyleSheet,
} from "@newtonium/gravity";
import axios from "axios";
import { randomUUID } from "crypto";
import { Window } from "@newtonium/core";

const window_id = randomUUID();

const window = new Window(
  "My App",
  path.join(import.meta.dirname, "assets/icon.png")
);
const root = { children: "", type: "gravity-root", window: window };
const { document } = window;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text>Clicked {count} times.</Text>
      <Button onClick={() => setCount((c) => c + 1)}>Click</Button>
    </>
  );
}

window.on("ready", () => {
  GravityRenderer.render(<App />, root, window);
});

window.run();
