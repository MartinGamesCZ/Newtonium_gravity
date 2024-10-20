// @ts-nocheck

import type { ReactNode } from "react";

interface DialogProps {
  title: string;
  children: ReactNode | ReactNode[];
}

export default function Dialog({ title, children }: DialogProps) {
  return <gravity-dialog title={title}>{children}</gravity-dialog>;
}
