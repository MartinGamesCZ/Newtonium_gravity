import { gravityFunctionHandler } from "../handler/function/gravityFunctionHandler";
import { callSymbol, getCreds } from "../handler/ipc/ipcClient";
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
    stringifyFn(gravityFunctionHandler),
    stringifyFn(getCreds)
      .replaceAll(":port", getIpcPort().toString())
      .replaceAll(":key", getIpcKey()),
    stringifyFn(callSymbol),
  ],
};
