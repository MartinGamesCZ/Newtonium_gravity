// @ts-nocheck

import { randomUUID } from "crypto";
import type { ElementStyle, StyleSheet } from "../styles/types";
import { enquote } from "../utils/conversions";
import { forwardRef, type Ref } from "react";

interface TextProps {
  children: any | any[];
  style?: ElementStyle;
}

function _Text({ children, style }: TextProps, ref: Ref) {
  return (
    <text
      style={style}
      width={style?.width ? style.width.toString() : undefined}
      height={style?.height ? style.height.toString() : undefined}
      ref={ref}
    >
      {children}
    </text>
  );
}

const Text = forwardRef(_Text);

export default Text;
