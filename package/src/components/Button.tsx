// @ts-nocheck

import { randomUUID } from "crypto";
import type { ElementStyle, StyleSheet } from "../styles/types";

interface ButtonProps {
  children: any | any[];
  onClick: () => void;
  style?: ElementStyle;
}

export default function Button({ children, onClick, style }: ButtonProps) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}
