// @ts-nocheck

import { randomUUID } from "crypto";
import type { Ref } from "../hooks/useRef";
import type { ElementStyle, StyleSheet } from "../styles/types";
import { enquote } from "../utils/conversions";

interface TextProps {
  children: string;
  style?: ElementStyle;
}

export default function Text({ children, style }: TextProps) {
  return <text style={style}>{children}</text>;
}
