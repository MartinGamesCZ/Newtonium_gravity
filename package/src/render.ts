// @ts-ignore
import Reconciler from "react-reconciler";

import type { ReactNode } from "react";
import domify from "./dom";
import Conversions from "./conversion";
import { diff } from "deep-object-diff";
import decircular from "decircular";
import { enquote } from "./utils/conversions";
import type { Window } from "@newtonium/core";
import { remapStyles } from "./styles/StyleSheet";

const Renderer = Reconciler({
  createInstance: (type: string, props: Record<string, any>, root: any) => {
    const conversion = Conversions[type as keyof typeof Conversions];

    const { props: initial_props, post: attach } = conversion(props);

    const element = root.window.document.createElement(
      type.replace("gravity-", ""),
      Object.fromEntries(
        Object.entries(initial_props).filter(
          ([k, v]) => !(k == "children" && typeof v != "string")
        )
      )
    );

    attach(element);

    return element;
  },

  createTextInstance: (text: string) => {
    return text;
  },

  appendInitialChild: (parent: any, child: any) => {
    if (typeof child == "string") return;

    parent.appendChild(child);

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
    parent.window.document.body.appendChild(child);
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

  commitTextUpdate: (textInstance: any, oldText: string, newText: string) => {
    // noop
  },

  commitUpdate: (instance: any, updatePayload: any) => {
    const conversion =
      Conversions[instance.tagName as keyof typeof Conversions] ??
      Conversions[("gravity-" + instance.tagName) as keyof typeof Conversions];

    const { props: initial_props, post: attach } = conversion(
      updatePayload.newProps
    );

    for (const prop of Object.keys(initial_props)) {
      instance.setAttribute(prop, initial_props[prop]);
    }

    attach(instance);

    return;
    /*let { type, oldProps, newProps } = updatePayload;

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
    }*/
  },

  insertBefore: (parent: any, child: any, beforeChild: any) => {
    //const element = convert(child, []);
    /*appCreateElementBefore(
      (element[0] as string[]).join("\n") + "\n" + element[1],
      parent.props.id.replace("__", "_"),
      beforeChild.props.id.replace("__", "_")
    );*/
    parent.insertBefore(child, beforeChild);
  },

  insertInContainerBefore(container, child, beforeChild) {},

  detachDeletedInstance: (node: any) => {
    // noop
  },

  removeChild: (parent: any, child: any) => {
    /*appDestroyElement(
      child.props.id.replace("__", "_"),
      parent.props.id.replace("__", "_")
    );*/

    child.remove();
  },

  getPublicInstance: (instance: any) => {
    return instance;
  },
});

const GravityRenderer = {
  render: async (
    node: ReactNode,
    container: {
      children: string;
      window: Window;
    },
    window: Window
  ) => {
    container.window = window;

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
