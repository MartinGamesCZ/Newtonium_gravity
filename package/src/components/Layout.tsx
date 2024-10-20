// @ts-nocheck

import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode | ReactNode[];
  type: "column" | "row" | "grid";
}

export default function Layout({ children, type }: LayoutProps) {
  if (type == "column")
    return <gravity-layout-column>{children}</gravity-layout-column>;
  if (type == "row") return <gravity-layout-row>{children}</gravity-layout-row>;
  if (type == "grid")
    return <gravity-layout-grid>{children}</gravity-layout-grid>;

  return null;
}
