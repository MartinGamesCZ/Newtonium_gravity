import { randomUUID } from "crypto";

let port = -1;
let key = "";

export function getIpcPort(): number {
  if (port === -1)
    port = Math.max(1000, Math.min(Math.floor(Math.random() * 65536), 65535));

  return port;
}

export function getIpcKey(): string {
  if (key === "")
    key = randomUUID().replaceAll("-", "") + randomUUID().replaceAll("-", "");

  return key;
}
