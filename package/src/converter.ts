import Conversions from "./conversion";

interface Tree {
  type: string;
  props: Record<string, any>;
  children: Tree | Tree[] | string | string[] | null;
}

/*export default function convert(
  tree: Tree,
  header: string[] = ["import QtWebSockets 1.6"]
) {
  if (typeof tree === "string") {
    return tree;
  }

  const conversion = Conversions[tree.type as keyof typeof Conversions];

  const lines: string[] = [];

  header.push(conversion.imports.map((i) => `import ${i}`).join("\n"));

  lines.push(convertElement(conversion, tree, header));

  return [header, lines.join("\n")];
}*/

/*export function convertElement(
  conversion: any,
  tree: any,
  header: string[] = []
) {
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

  return `${conversion.name} {
${Object.entries(conversion.defaultProps)
  .filter(([k, v]) => !tree.props[k])
  .map(([k, v]: any) => `${k}: ${v.toString()}`)
  .join("\n")}
${Object.entries(
  conversion.propsRemap(
    tree.props,
    (tree.children as any[]).map((c) => convert(c, [])[1])
  )
)
  .filter(([k]) => k != "children")
  .map(([k, v]) => {
    if (!v) return;

    return `${k}: ${v.toString()}`;
  })
  .join("\n")}
${childLines.join("\n")}
${"additionalLines" in conversion ? conversion.additionalLines.join("\n") : ""}
}`;
}*/
