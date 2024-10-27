// @ts-nocheck

import { randomUUID } from "crypto";
import type { ReactNode } from "react";
import type { ElementStyle } from "../styles/types";

interface WindowProps {
  children: ReactNode | ReactNode[];
  width: number;
  height: number;
  title?: string;
  visible?: boolean;
  style?: ElementStyle;
}

export default function Window({
  children,
  width,
  height,
  title,
  visible,
  style,
}: WindowProps) {
  return (
    <gravity-window
      width={width}
      height={height}
      title={title}
      id={"__g_" + randomUUID().replaceAll("-", "")}
      visible={visible}
      style={style}
    >
      {children}
    </gravity-window>
  );
}
