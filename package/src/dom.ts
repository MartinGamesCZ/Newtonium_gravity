import type { Window } from "@newtonium/core";

interface DOMElement {
  type: string;
  props: Record<string, any>;
  children: any[] | any;
}

export default function domify(parent: DOMElement, child: DOMElement) {
  if (parent.type === "gravity-root") {
    parent.children = child;

    return;
  }

  if (typeof child == "string") {
    parent.children = (parent.children ?? []).concat(child);

    return;
  }

  if (Array.isArray(child)) {
    parent.children = (parent.children ?? []).concat(child);

    return;
  }

  parent.children = parent.children ?? [];

  parent.children.push(child);
}

export function createRoot(window: Window) {
  return { children: "", type: "gravity-root", window: window };
}
