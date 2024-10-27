// Prototype function @qt-window
export function getCreds() {
  return {
    port: ":port",
    key: ":key",
  };
}

export function callSymbol(symbol: string) {
  // @ts-ignore
  ipc.sendTextMessage(JSON.stringify({ symbol, _key: getCreds().key }));
}

export function gotIpcMessage(message: string) {
  const data = JSON.parse(message);

  if (data.type == "eval") eval(data.code);
  if (data.type == "set_property") {
    // @ts-ignore
    let element = getElementById(data.elid);

    let prop = element;

    if (data.prop.includes(".")) {
      const props = data.prop.split(".");

      for (let i = 0; i < props.length - 1; i++) {
        prop = prop[props[i]];
      }

      prop[props[props.length - 1]] = data.value;
    } else prop[data.prop] = data.value;
  }

  if (data.type == "get_property")
    // @ts-ignore
    ipc.sendTextMessage(
      JSON.stringify({
        _key: getCreds().key,
        // @ts-ignore
        value: getElementById(data.elid)[data.prop],
        dkey: data.dkey,
      })
    );
}
