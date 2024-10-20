// @ts-nocheck

import type { ElementStyle, StyleSheet } from "../styles/types";

interface TextProps {
  children: string;
  style: ElementStyle;
}

export default function Text({ children, style }: TextProps) {
  return <gravity-text style={style}>{children}</gravity-text>;
}
