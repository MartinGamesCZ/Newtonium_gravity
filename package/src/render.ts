// @ts-ignore
import Reconciler from "react-reconciler";

import type { ReactNode } from "react";
import domify from "./dom";
import convert from "./converter";
import formatQml from "./utils/qml_formatter";

const Renderer = Reconciler({
  createInstance: (type: string, props: Record<string, any>) => {
    return { type, props };
  },

  createTextInstance: (text: string) => {
    return text;
  },

  appendInitialChild: (parent: any, child: any) => {
    domify(parent, child);
  },

  finalizeInitialChildren: () => {
    return false;
  },

  // @ts-ignore
  prepareForCommit: () => {},

  resetAfterCommit: () => {},

  getRootHostContext: () => {
    return {};
  },

  getChildHostContext: () => {
    return {};
  },

  shouldSetTextContent: () => {
    return false;
  },

  now: Date.now,

  supportsMutation: true,

  appendChildToContainer: (parent: any, child: any) => {
    parent.children = formatQml(
      convert(child)
        .map((a) => (typeof a == "string" ? a : a.join("\n") + "\n"))
        .join("\n")
    );
  },

  appendChild: (parent: any, child: any) => {
    domify(parent, child);
  },

  clearContainer(container: any) {
    container.children = "";
  },
});

const GravityRenderer = {
  render: async (
    node: ReactNode,
    container: {
      children: string;
    }
  ) => {
    // @ts-ignore
    const root = Renderer.createContainer(container, false, false);
    await new Promise<void>((r) =>
      Renderer.updateContainer(node, root, null, () => {
        r();
      })
    );
  },
};

export default GravityRenderer;
