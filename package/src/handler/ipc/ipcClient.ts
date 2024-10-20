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
  if (data.type == "set_property")
    // @ts-ignore
    getElementById(data.elid)[data.prop] = data.value;
}
