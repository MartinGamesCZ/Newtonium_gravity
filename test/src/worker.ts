import { runQml } from "../platform/bun/src";

declare var self: Worker;

self.onmessage = (event) => {
  runQml(event.data);
};
