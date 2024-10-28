import {
  callProperty,
  createElementAtIndex,
  destroyElementFromParent,
  existsElementById,
  getElementById,
  getIndexById,
} from "../api/element";
import { gravityFunctionHandler } from "../handler/function/gravityFunctionHandler";
import { callSymbol, getCreds, gotIpcMessage } from "../handler/ipc/ipcClient";
import { getIpcKey, getIpcPort } from "../handler/ipc/ipcShared";
import { remapStyles } from "../styles/StyleSheet";
import { enquote, stringifyFn } from "../utils/conversions";

export const WindowConversion = {
  imports: ["QtQuick.Window 2.13"],
  name: "Window",
  defaultProps: {
    visible: true,
  },
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
    title: `"${p.title}"`,
    style: undefined,
    objectName: enquote(p.id),
    ...remapStyles(p.style ?? {}),
  }),
  reversePropsRemap: {
    width: "width",
    height: "height",
    visible: "visible",
  },
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
    stringifyFn(getElementById).replace("Id2", "Id"),
    stringifyFn(existsElementById),
    stringifyFn(callProperty).replace("ty2", "ty"),
    stringifyFn(createElementAtIndex).replace("ex2", "ex"),
    stringifyFn(getIndexById).replace("Id2", "Id"),
    stringifyFn(destroyElementFromParent).replace("nt2", "nt"),
    stringifyFn(gotIpcMessage),
  ],
};
