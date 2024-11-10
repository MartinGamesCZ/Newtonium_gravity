// @ts-nocheck

import { randomUUID } from "crypto";
import type { ElementStyle, StyleSheet } from "../styles/types";
import { forwardRef, type Ref } from "react";

interface InputProps {
  onChange: (v: string) => void; // v is a possible performance issue
  value: any | any[];
  style?: ElementStyle;
}

function _Input({ value, onChange, style }: InputProps, ref: Ref) {
  return (
    <gravity-input style={style} onChange={onChange} ref={ref}>
      {value}
    </gravity-input>
  );
}

const Input = forwardRef(_Input);

export default Input;
