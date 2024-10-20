// Prototype function @qt-window
export function getCreds() {
  return {
    port: ":port",
    key: ":key",
  };
}

export function callSymbol(symbol: string) {
  const creds = getCreds();

  console.log("IPC::symbol::" + creds.port + "::" + creds.key + "::" + symbol);

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://localhost:${creds.port}/&/${symbol}`, true);
  xhr.setRequestHeader("Authorization", creds.key);
  xhr.send();
}
