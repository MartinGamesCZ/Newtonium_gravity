import Conversions from "./conversion";

interface Tree {
  type: string;
  props: Record<string, any>;
  children: Tree | Tree[] | string | string[] | null;
}

export default function convert(tree: Tree, header: string[] = []) {
  if (typeof tree === "string") {
    return tree;
  }

  const conversion = Conversions[tree.type as keyof typeof Conversions];

  const lines: string[] = [];

  header.push(conversion.imports.map((i) => `import ${i}`).join("\n"));

  const childLines: string[] = [];

  ((tree.children as any[]) ?? []).forEach((child) => {
    const c = convert(child, header);

    if (typeof c === "string") {
      //childLines.push(c);
      return;
    }

    header = c[0] as string[];
    childLines.push(c[1] as string);
  });

  lines.push(`${conversion.name} {
    ${Object.entries(conversion.defaultProps)
      .filter(([k, v]) => !tree.props[k])
      .map(([k, v]) => `${k}: ${v.toString()}`)
      .join("\n")}
    ${Object.entries(
      conversion.propsRemap(
        tree.props,
        (tree.children as any[]).map((c) => convert(c, [])[1])
      )
    )
      .filter(([k]) => k != "children")
      .map(([k, v]) => {
        console.log(k, v);

        if (!v) return;

        return `${k}: ${v.toString()}`;
      })
      .join("\n")}
    ${childLines.join("\n")}
    ${
      "additionalLines" in conversion
        ? conversion.additionalLines.join("\n")
        : ""
    }
}`);

  return [header, lines.join("\n")];
}
