import express from "express";
import { getIpcKey, getIpcPort } from "./ipcShared";
import { symbols } from "../function/gravityFunctionHandler";
import { WebSocket, WebSocketServer } from "ws";

let ws: WebSocketServer;
let sockets: WebSocket[] = [];

export default function startIpcServer() {
  ws = new WebSocketServer({
    port: getIpcPort(),
  });

  ws.on("connection", (socket) => {
    sockets.push(socket);

    socket.on("message", (msg: string) => {
      const { symbol, _key } = JSON.parse(msg);

      if (_key !== getIpcKey()) {
        return;
      }

      const func = symbols[symbol];

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
  for (const socket of sockets) {
    socket.send(
      JSON.stringify({ type: "set_property", elid: "_" + elid, prop, value })
    );
  }
}
