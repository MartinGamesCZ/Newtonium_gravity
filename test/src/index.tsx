import { writeFileSync } from "fs";
import { useEffect, useState } from "react";
import path from "path";

import {
  startIpcServer,
  Window,
  Layout,
  Text,
  Button,
  GravityRenderer,
  useRef,
  Dialog,
  Input,
} from "@newtonium/gravity";
import axios from "axios";

const root = { children: "", type: "gravity-root" };

function App() {
  const [text, setText] = useState("");
  return (
    <Window title="Hello World App" width={700} height={500}>
      <Layout type="column">
        <Input value={text} onChange={(e) => setText(e)} placeholder="Text" />
        <Button onClick={() => setText((t) => t.split("").reverse().join(""))}>
          Reverse
        </Button>
      </Layout>
    </Window>
  );
}

async function fetch(url: string) {
  const { data } = await axios.get(url);

  return data;
}

await GravityRenderer.render(<App />, root);

await startIpcServer();

// Debug
writeFileSync("test.qml", root.children);

const worker = new Worker(path.join(import.meta.dirname, "worker.ts"));

worker.postMessage({
  qml: root.children,
  icon: path.join(import.meta.dirname, "assets/icon.png"),
});
