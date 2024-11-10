import { writeFileSync } from "fs";
import { useCallback, useEffect, useRef, useState } from "react";
import path from "path";

import {
  Text,
  Button,
  View,
  GravityRenderer,
  createStyleSheet,
  createRoot,
  Input,
} from "@newtonium/gravity";
import axios from "axios";
import { randomUUID } from "crypto";
import { Window } from "@newtonium/core";
import Element from "@newtonium/core/dist/src/dom/element";

const window_id = randomUUID();

const window = new Window(
  "My App",
  path.join(import.meta.dirname, "assets/icon.png")
);
const root = createRoot(window);
const { document } = window;

// Controlled:

function App() {
  const [v, setV] = useState("");

  const onSubmit = useCallback(() => {
    console.log(v);
  }, [v]);

  return (
    <View dir="horizontal">
      <Input value={v} onChange={setV} />
      <Button onClick={onSubmit}>Submit</Button>
    </View>
  );
}

/*
Uncontrolled:

function App() {
  const ref = useRef<Element | null>(null);

  const onSubmit = useCallback(() => {
    console.log(ref.current?.getAttribute("innerHTML"));
  }, [ref.current]);

  return (
    <View dir="horizontal">
      <Input ref={ref} />
      <Button onClick={onSubmit}>Submit</Button>
    </View>
  );
}
*/

window.on("ready", () => {
  GravityRenderer.render(<App />, root, window);
});

window.run();
