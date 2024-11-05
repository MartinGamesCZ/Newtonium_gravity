// @ts-nocheck

import { randomUUID } from "crypto";
import type { StyleSheet } from "../styles/types";

interface ButtonProps {
  children: string;
  onClick: () => void;
  style?: StyleSheet;
}

export default function Button({ children, onClick, style }: ButtonProps) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}
