// @qt-global
export function getElementById(id: string): any {
  return existsElementById(id) ? eval(id) : eval(`null`);
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

// @qt-global
export function createElement(str: string, parentId: string): any {
  eval(`Qt.createQmlObject(\`${str}\`, ${parentId})`);
}

// @qt-global
export function createElementAtIndex(
  str: string,
  parent: string,
  index: number
) {
  eval(`
  const e = Qt.createQmlObject(\`${str}\`, ${parent});

  const index = ${index};
  const parent = ${parent};

  if (index < 0) {
    index = 0;
  }

  parent.children.push(e);

  const newArray = [];
  const lastElement = parent.children[parent.children.length - 1];

  for (let i = 0; i < index; i++) {
    newArray.push(parent.children[i]);
  }

  newArray.push(lastElement);

  for (let i = index; i < parent.children.length - 1; i++) {
    newArray.push(parent.children[i]);
  }

  parent.children = newArray;`);
}

// @qt-global
export function getIndexById(id: string, parentId: string): number {
  return eval(`(() => {
    for (var i = 0; i < ${parentId}.children.length; i++) {
      if (${parentId}.children[i] === ${id}) return i;
    }

    return -1;
  })()
  `);
}

// @qt-global
export function destroyElementFromParent(id: string, parentId: string): void {
  eval(`
  const parent = ${parentId};

  for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i].objectName === "${id}") parent.children[i].destroy();
  }`);
}
