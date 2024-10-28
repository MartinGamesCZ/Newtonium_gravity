import { runQml } from "../../test/platform/bun/src";

declare var self: Worker;

self.onmessage = (event) => {
  runQml(event.data.qml, event.data.icon);
};
