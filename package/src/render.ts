// @ts-ignore
import Reconciler from "react-reconciler";

import type { ReactNode } from "react";
import domify from "./dom";
import convert from "./converter";
import formatQml from "./utils/qml_formatter";
import { appSetProperty } from "./handler/ipc/ipcServer";
import Conversions from "./conversion";
import { diff } from "deep-object-diff";
import decircular from "decircular";
import { enquote } from "./utils/conversions";

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

  prepareUpdate: (
    instance: any,
    type: string,
    oldProps: any,
    newProps: any
  ) => {
    return { type, oldProps, newProps };
  },

  commitTextUpdate: (textInstance: any, oldText: string, newText: string) => {},

  commitUpdate: (instance: any, updatePayload: any) => {
    let { type, oldProps, newProps } = updatePayload;

    if (
      oldProps.children.props ||
      newProps.children.props ||
      oldProps.children[0]?.props ||
      newProps.children[0]?.props
    ) {
      oldProps = {
        ...oldProps,
        children: "",
      };

      newProps = {
        ...newProps,
        children: "",
      };
    }

    const difference = diff(decircular(oldProps), decircular(newProps));

    const conversion = Conversions[type as keyof typeof Conversions];

    if (!("reversePropsRemap" in conversion)) return;

    const reversePropsRemap = conversion.reversePropsRemap;

    for (const key of Object.keys(difference)) {
      if (key == "id") continue;
      if (key == "onClicked") continue;
      if (!instance.props.id) continue;

      if (reversePropsRemap[key as keyof typeof reversePropsRemap]) {
        const rp = reversePropsRemap[
          key as keyof typeof reversePropsRemap
        ] as any;
        if (typeof rp == "function") {
          const vals = rp(newProps[key as keyof typeof newProps]);

          for (const val of Object.keys(vals)) {
            console.log(val, vals);

            appSetProperty(
              instance.props.id.replace("__", "_"),
              val,
              typeof vals[val as keyof typeof vals] == "string"
                ? vals[val as keyof typeof vals].replaceAll('"', "")
                : vals[val as keyof typeof vals]
            );
          }

          continue;
        }

        appSetProperty(
          instance.props.id.replace("__", "_"),
          rp,
          newProps[key as keyof typeof newProps]
        );
      } else
        appSetProperty(
          instance.props.id.replace("__", "_"),
          key,
          newProps[key as keyof typeof newProps]
        );
    }
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
