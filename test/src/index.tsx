import { writeFileSync } from "fs";
import { useEffect, useState } from "react";
import path from "path";

import {
  Layout,
  Text,
  Button,
  GravityRenderer,
  Dialog,
  Input,
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

const styles = createStyleSheet({
  btn: {
    border: "1px solid #ff00ff",
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount((c) => c + 1)} style={styles.btn}>
      Clicked {count.toString()} times.
    </Button>
  );
}

window.on("ready", () => {
  GravityRenderer.render(<App />, root, window);
});

window.run();
