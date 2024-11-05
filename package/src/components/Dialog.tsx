// @ts-nocheck

import { useEffect, useMemo, type ReactNode } from "react";
import { randomUUID } from "crypto";

interface DialogProps {
  title: string;
  children: ReactNode | ReactNode[];
  visible?: boolean;
}

export default function Dialog({ title, children, visible }: DialogProps) {
  const id = useMemo(() => "__g_" + randomUUID().replaceAll("-", ""), []);

  return (
    <gravity-dialog id={id} title={title}>
      {children}
    </gravity-dialog>
  );
}
