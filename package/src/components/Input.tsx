// @ts-nocheck

import { randomUUID } from "crypto";
import type { Ref } from "../hooks/useRef";
import type { ElementStyle, StyleSheet } from "../styles/types";
import { enquote } from "../utils/conversions";

interface InputProps {
  style: ElementStyle;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  reference?: Ref<null>;
}

export default function Input({
  value,
  onChange,
  style,
  placeholder,
  reference,
}: InputProps) {
  const id = reference
    ? "_" + reference._elementIdentifier
    : "__g_" + randomUUID().replaceAll("-", "");

  return (
    <gravity-input
      id={id}
      style={style}
      text={value}
      placeholderText={placeholder}
    >
      {" "}
    </gravity-input>
  );
}
