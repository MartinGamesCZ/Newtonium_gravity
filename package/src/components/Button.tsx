// @ts-nocheck

import { randomUUID } from "crypto";
import type { ElementStyle, StyleSheet } from "../styles/types";
import { forwardRef, type Ref } from "react";

interface ButtonProps {
  children: any | any[];
  onClick: () => void;
  style?: ElementStyle;
}

function _Button({ children, onClick, style }: ButtonProps, ref: Ref) {
  return (
    <button
      style={style}
      width={style?.width ? style.width.toString() : undefined}
      height={style?.height ? style.height.toString() : undefined}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  );
}

const Button = forwardRef(_Button);

export default Button;
