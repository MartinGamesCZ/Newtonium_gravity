import { getElementById } from "../api/element";
import { gravityFunctionHandler } from "../handler/function/gravityFunctionHandler";
import { callSymbol, getCreds, gotIpcMessage } from "../handler/ipc/ipcClient";
import { getIpcKey, getIpcPort } from "../handler/ipc/ipcShared";
import { stringifyFn } from "../utils/conversions";

export const WindowConversion = {
  imports: ["QtQuick.Window 2.13"],
  name: "Window",
  defaultProps: {
    visible: true,
  },
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
    title: `"${p.title}"`,
  }),
  additionalLines: [
    `WebSocket {
id: ipc
url: "ws://localhost:${getIpcPort()}"
onTextMessageReceived: {
  gotIpcMessage(message)
}
onStatusChanged: () => {}
active: true
}`,
    stringifyFn(gravityFunctionHandler),
    stringifyFn(getCreds)
      .replaceAll(":port", getIpcPort().toString())
      .replaceAll(":key", getIpcKey()),
    stringifyFn(callSymbol),
    stringifyFn(getElementById),
    stringifyFn(gotIpcMessage),
  ],
};
