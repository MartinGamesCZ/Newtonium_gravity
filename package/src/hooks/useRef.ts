import { randomUUID } from "crypto";
import {
  appEval,
  appGetProperty,
  appSetProperty,
} from "../handler/ipc/ipcServer";
import { loopWhile } from "deasync";

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
          return appGetProperty(elid, prop.toString());
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
