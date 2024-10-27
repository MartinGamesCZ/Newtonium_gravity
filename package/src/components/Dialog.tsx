// @ts-nocheck

import { useEffect, useMemo, type ReactNode } from "react";
import { appCallProperty, appSetProperty } from "../handler/ipc/ipcServer";
import { randomUUID } from "crypto";

interface DialogProps {
  title: string;
  children: ReactNode | ReactNode[];
  visible?: boolean;
}

export default function Dialog({ title, children, visible }: DialogProps) {
  const id = useMemo(() => "__g_" + randomUUID().replaceAll("-", ""), []);

  useEffect(() => {
    if (visible) appCallProperty(id.replace("__", "_"), "open", []);
    else appCallProperty(id.replace("__", "_"), "close", []);
  }, [visible]);

  return (
    <gravity-dialog id={id} title={title}>
      {children}
    </gravity-dialog>
  );
}
