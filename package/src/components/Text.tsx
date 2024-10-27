// @ts-nocheck

import { randomUUID } from "crypto";
import type { Ref } from "../hooks/useRef";
import type { ElementStyle, StyleSheet } from "../styles/types";
import { enquote } from "../utils/conversions";

interface TextProps {
  children: string;
  style: ElementStyle;
  reference?: Ref<null>;
}

export default function Text({ children, style, reference }: TextProps) {
  return (
    <gravity-text
      id={
        reference
          ? "_" + reference._elementIdentifier
          : "__g_" + randomUUID().replaceAll("-", "")
      }
      style={style}
    >
      {children}
    </gravity-text>
  );
}
