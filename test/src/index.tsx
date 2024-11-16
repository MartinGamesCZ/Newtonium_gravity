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
  Event,
  Image,
} from "@newtonium/gravity";
import axios from "axios";
import { randomUUID } from "crypto";
import { Window } from "@newtonium/core";
import Element from "@newtonium/core/dist/src/dom/element";
import { TbWifi, TbX } from "react-icons/tb";

const window_id = randomUUID();

const window = new Window(
  "My App",
  path.join(import.meta.dirname, "assets/icon.png")
);
const root = createRoot(window, {
  button: {
    border: "none",
    padding: "4px 8px",
    background: "#0056b3",
    textShadow: "none",
    color: "#ffffff",
  },
});

const styles = createStyleSheet({
  submit_button: {
    background: "#1667ff",
    transition: "0.5s",
    width: 100,

    [Event.hover]: {
      background: "#1046aa",
    },
  },
  root_view: {
    flexDirection: "column",
  },
});

function App() {
  const [width, setWidth] = useState(0);

  return (
    <View
      style={{
        gap: 5,
        padding: 5,
      }}
    >
      <Input placeholder="Testík" />
      <Button
        onClick={() => {
          setWidth((width) => width + 100);
        }}
        style={{
          width: width,
        }}
      >
        Click me
      </Button>
      <Image>
        <TbWifi color={"#ffffff"} size={64} />
      </Image>
    </View>
  );
}

window.on("ready", () => {
  GravityRenderer.render(<App />, root, window);
});

window.run();

/*
Controlled:

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
}*/

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
