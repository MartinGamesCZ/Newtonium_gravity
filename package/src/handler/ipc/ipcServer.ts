import express from "express";
import { getIpcKey, getIpcPort } from "./ipcShared";
import { symbols } from "../function/gravityFunctionHandler";
import { WebSocket, WebSocketServer } from "ws";

let ws: WebSocketServer;
let sockets: WebSocket[] = [];

let listeners: {
  key: string;
  func: (data: any) => void;
}[] = [];

export default function startIpcServer() {
  ws = new WebSocketServer({
    port: getIpcPort(),
  });

  ws.on("connection", (socket) => {
    sockets.push(socket);

    socket.on("message", (msg: string) => {
      const data = JSON.parse(msg);

      if (data._key !== getIpcKey()) {
        return;
      }

      if (!data.symbol) {
        listeners
          .filter((l) => l.key == data.dkey)
          .forEach((listener) => listener.func(data));
        return;
      }

      const func = symbols[data.symbol];

      if (!func) {
        return;
      }

      func();
    });
  });
}

// DANGEROUS
export function appEval(code: string) {
  for (const socket of sockets) {
    socket.send(JSON.stringify({ type: "eval", code }));
  }
}

export function appSetProperty(elid: string, prop: string, value: any) {
  console.log("set", elid, prop, value);
  for (const socket of sockets) {
    socket.send(
      JSON.stringify({ type: "set_property", elid: "_" + elid, prop, value })
    );
  }
}

export function appGetProperty(elid: string, prop: string) {
  const key = Math.random().toString(36).substring(7);

  let r: any = null;

  listeners.push({
    key,
    func: (data) => {
      if (data.dkey !== key) {
        return;
      }

      if (r) r(data.value);
    },
  });

  for (const socket of sockets) {
    socket.send(
      JSON.stringify({
        type: "get_property",
        elid: "_" + elid,
        prop,
        dkey: key,
      })
    );
  }

  return new Promise((resolve) => {
    r = resolve;
  });
}
