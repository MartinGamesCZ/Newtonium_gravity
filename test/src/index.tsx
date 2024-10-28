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

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) return;

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [visible]);

  return (
    <Window title="Hello World App" width={700} height={500}>
      <Layout type="column">
        {visible ? <Text style={{}}>Hello</Text> : null}
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

worker.postMessage({
  qml: root.children,
  icon: path.join(import.meta.dirname, "assets/icon.png"),
});
