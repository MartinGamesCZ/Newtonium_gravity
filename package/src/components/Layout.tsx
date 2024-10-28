// @ts-nocheck

import { randomUUID } from "crypto";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode | ReactNode[];
  type: "column" | "row" | "grid";
}

export default function Layout({ children, type }: LayoutProps) {
  if (type == "column")
    return (
      <gravity-layout-column id={"__g_" + randomUUID().replace(/-/g, "_")}>
        {children}
      </gravity-layout-column>
    );
  if (type == "row")
    return (
      <gravity-layout-row id={"__g_" + randomUUID().replace(/-/g, "_")}>
        {children}
      </gravity-layout-row>
    );
  if (type == "grid")
    return (
      <gravity-layout-grid id={"__g_" + randomUUID().replace(/-/g, "_")}>
        {children}
      </gravity-layout-grid>
    );

  return null;
}
