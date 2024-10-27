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
} from "@newtonium/gravity";
import axios from "axios";

const root = { children: "", type: "gravity-root" };

const colors = ["red", "green", "blue", "yellow", "purple", "orange"];

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <Window title="Hello World App" width={700} height={500} visible={visible}>
      <Dialog title="Hello World App" visible={visible}>
        <Text style={{}}>Holla</Text>
      </Dialog>
      <Layout type="column">
        <Text style={{}}>Test</Text>
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          click
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
