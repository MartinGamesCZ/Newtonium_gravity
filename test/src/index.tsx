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

function App() {
  const inputRef = useRef<Element | null>(null);

  const onSubmit = useCallback(() => {
    console.log(inputRef.current?.getAttribute("innerHTML"));
  }, [inputRef]);

  return (
    <View dir="horizontal">
      <Input ref={inputRef} value={""} onChange={() => {}} />
      <Button onClick={onSubmit}>Submit</Button>
    </View>
  );
}

window.on("ready", () => {
  GravityRenderer.render(<App />, root, window);
});

window.run();
