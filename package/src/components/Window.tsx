// @ts-nocheck

import { randomUUID } from "crypto";
import type { ReactNode } from "react";

interface WindowProps {
  children: ReactNode | ReactNode[];
  width?: number;
  height?: number;
  title?: string;
  visible?: boolean;
}

export default function Window({
  children,
  width,
  height,
  title,
  visible,
}: WindowProps) {
  return (
    <gravity-window
      width={width}
      height={height}
      title={title}
      id={"__g_" + randomUUID().replaceAll("-", "")}
      visible={visible}
    >
      {children}
    </gravity-window>
  );
}
