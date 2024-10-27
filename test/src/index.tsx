import { writeFileSync } from "fs";
import { useState } from "react";
import path from "path";

import {
  startIpcServer,
  Window,
  Layout,
  Text,
  Button,
  GravityRenderer,
  useRef,
} from "@newtonium/gravity";
import axios from "axios";

const root = { children: "", type: "gravity-root" };

const colors = ["red", "green", "blue", "yellow", "purple", "orange"];

function App() {
  const [size, setSize] = useState(0);

  return (
    <Window title="Hello World App" width={500} height={500}>
      <Layout type="column">
        <Text
          style={{
            fontSize: size,
          }}
        >
          Hello, World!
        </Text>
        <Button
          onClick={() => {
            setSize((s) => s + 2);
          }}
        >
          Click me!
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

worker.postMessage(root.children);
