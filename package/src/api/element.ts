// @qt-global
export function getElementById(id: string): any {
  return existsElementById(id) ? eval(id) : null;
}

// @qt-global
export function existsElementById(id: string): boolean {
  return eval("typeof " + id + " !== 'undefined'");
}

// @qt-global
export function callProperty(id: string, property: string, args: any[]): void {
  console.log(
    "CALL",
    id + "." + property + "(" + args.map((a) => a.toString()).join(", ") + ")"
  );

  eval(
    id + "." + property + "(" + args.map((a) => a.toString()).join(", ") + ")"
  );
}
