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
  const data = "test";

  return (
    <Window title="Hello World App" width={500} height={500}>
      <Layout type="column">
        <Text style={styles.text1}>{data}</Text>
        <Button>Click me!</Button>
      </Layout>
    </Window>
  );
}

await GravityRenderer.render(<App />, root);

writeFileSync("test.qml", root.children);

runQml(root.children);
