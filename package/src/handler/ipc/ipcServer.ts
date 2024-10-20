import express from "express";
import { getIpcKey, getIpcPort } from "./ipcShared";
import { symbols } from "../function/gravityFunctionHandler";

export default function startIpcServer() {
  const server = express();

  server.get("/&/:symbol", (req, res) => {
    const symbol = req.params.symbol;

    if (req.headers.authorization !== getIpcKey()) {
      res.send(false);

      return;
    }

    const func = symbols[symbol];

    if (!func) {
      res.send(false);

      return;
    }

    func();

    res.send(true);
  });

  server.listen(getIpcPort(), () => {
    console.log("IPC server started");
  });
}
