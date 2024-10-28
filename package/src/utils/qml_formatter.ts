export default function formatQml(qml: string) {
  const lines = qml.split("\n");

  const out: string[] = [];

  let openBrackets = 0;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.includes("}") && !trimmed.includes("{")) openBrackets--;

    if (line.length == 0) continue;

    if (
      trimmed.includes("{") &&
      !(
        trimmed.startsWith("function") &&
        !(
          out[out.length - 1].includes("}") &&
          !out[out.length - 1].includes("{")
        )
      )
    ) {
      out.push("");
    }

    out.push(new Array(openBrackets).fill("\t").join("") + line);

    if (trimmed.includes("{") && !trimmed.includes("}")) openBrackets++;
  }

  return cleanImports(out.join("\n"));
}

export function cleanImports(qml: string) {
  const lines = qml.split("\n");

  const out: string[] = [];

  const imports: string[] = [];

  for (const line of lines) {
    if (!line.startsWith("import")) {
      out.push(line);

      continue;
    }

    const trimmed = line.trim();

    const [, name, version] = trimmed.split(" ");

    if (imports.some((i) => i.split(" ")[1] == name)) continue;

    imports.push(trimmed);
  }

  return imports.join("\n") + "\n" + out.join("\n");
}

export function formatQmlInline(qml: string) {
  const nfmt = formatQml(qml);

  const lines = nfmt.split("\n");

  const out: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    out.push(trimmed);

    if (!trimmed.endsWith("{") && !trimmed.endsWith("}")) out.push("; ");
  }

  return out.join("");
}
