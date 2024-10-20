import { enquote } from "../../utils/conversions";
import { callSymbol } from "../ipc/ipcClient";

export let symbols: {
  [symbol: string]: () => void;
} = {};

export function gravityFunctionHandler(symbol: string) {
  callSymbol(symbol);

  console.log("calling symbol", symbol);
}

export function registerSymbol(callback: () => void) {
  const symbol = Math.random().toString(36).substring(7);

  symbols[symbol] = callback;

  return `() => gravityFunctionHandler(${enquote(symbol)})`;
}
