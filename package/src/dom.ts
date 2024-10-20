interface DOMElement {
  type: string;
  props: Record<string, any>;
  children: any[] | any;
}

export default function domify(parent: DOMElement, child: DOMElement) {
  if (parent.type === "gravity-root") {
    parent.children = child;

    //parent.props._child = parent.children;

    return;
  }

  if (typeof child == "string") {
    parent.children = (parent.children ?? []).concat(child);

    //parent.props._child = parent.children;

    return;
  }

  if (Array.isArray(child)) {
    parent.children = (parent.children ?? []).concat(child);

    //parent.props._child = parent.children;

    return;
  }

  parent.children = parent.children ?? [];

  parent.children.push(child);

  //parent.props._child = parent.children;
}
