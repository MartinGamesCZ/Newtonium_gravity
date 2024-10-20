import type { ReactNode } from "react";

interface WindowProps {
  children: ReactNode | ReactNode[];
  width?: number;
  height?: number;
  title?: string;
}

export default function Window({
  children,
  width,
  height,
  title,
}: WindowProps) {
  return (
    <gravity-window width={width} height={height} title={title}>
      {children}
    </gravity-window>
  );
}
