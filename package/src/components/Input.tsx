// @ts-nocheck

import { randomUUID } from "crypto";
import type { ElementStyle, StyleSheet } from "../styles/types";
import { forwardRef, useEffect, useRef, type Ref } from "react";

interface InputProps {
  onChange?: (v: string) => void; // v is a possible performance issue
  value?: any | any[];
  style?: ElementStyle;
}

function _Input({ value, onChange, style }: InputProps, ref: Ref) {
  const internal_ref = ref ?? useRef<any>(null);

  return (
    <gravity-input
      style={style}
      onChange={() => {
        if (onChange) onChange(internal_ref.current.getAttribute("innerHTML"));
      }}
      ref={internal_ref}
    >
      {value ?? ""}
    </gravity-input>
  );
}

const Input = forwardRef(_Input);

export default Input;
