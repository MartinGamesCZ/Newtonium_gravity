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

const root = { children: "", type: "gravity-root" };

function App() {
  return (
    <Window title="Hello World App" width={500} height={200}>
      <Layout type="row">
        <Text>Hello World!</Text>
        <Button>Click me!</Button>
      </Layout>
    </Window>
  );
}

await GravityRenderer.render(<App />, root);

writeFileSync("test.qml", root.children);

runQml(root.children);
