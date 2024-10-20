import { randomUUID } from "crypto";
import { appEval, appSetProperty } from "../handler/ipc/ipcServer";

export interface Ref<T> {
  current: any;
  _elementIdentifier: string;
}

export default function useRef<T>(initialValue: T): Ref<T> {
  const elid = randomUUID().replaceAll("-", "");
  return {
    current: new Proxy(
      {},
      {
        get: (_, prop) => {
          throw new Error("Reading properties is not yet supported");
        },
        set: (_, prop, value) => {
          appSetProperty(elid, prop.toString(), value);
          return true;
        },
      }
    ),
    _elementIdentifier: elid,
  };
}
