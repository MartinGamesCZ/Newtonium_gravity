import { writeFileSync } from "fs";
import {
  Button,
  Dialog,
  GravityRenderer,
  Layout,
  Text,
  Window,
} from "../../package/src/index";
import { runQml } from "../platform/bun/src";
import createStyleSheet from "../../package/src/styles/StyleSheet";
import { useState } from "react";
import startIpcServer from "../../package/src/handler/ipc/ipcServer";
import path from "path";
import { $ } from "bun";
import axios from "axios";
import { getIpcKey } from "../../package/src/handler/ipc/ipcShared";
import useRef from "../../package/src/hooks/useRef";

const root = { children: "", type: "gravity-root" };

const styles = createStyleSheet({
  text1: {
    color: "#31aa13",
    fontSize: 24,
    fontWeight: "light",
    fontFamily: "Ubuntu",
    textDecoration: "line-through",
    padding: 50,
    paddingLeft: 10,
  },
});

function App() {
  let x = 0;

  const buttonRef = useRef(null);

  return (
    <Window title="Hello World App" width={500} height={500}>
      <Layout type="column">
        <Text style={styles.text1}>Hello</Text>
        <Button
          reference={buttonRef}
          onClick={() => {
            x++;
            buttonRef.current.text = `Clicked ${x} times!`;
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

  console.log(data);
}

await GravityRenderer.render(<App />, root);

await startIpcServer();

// Debug
writeFileSync("test.qml", root.children);

const worker = new Worker(path.join(import.meta.dirname, "worker.ts"));

worker.postMessage(root.children);
