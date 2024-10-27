// @ts-nocheck

import { randomUUID } from "crypto";
import {
  gravityFunctionHandler,
  registerSymbol,
} from "../handler/function/gravityFunctionHandler";

interface ButtonProps {
  children: string;
  onClick: () => void;
  reference?: any;
}

export default function Button({ children, onClick, reference }: ButtonProps) {
  const symbol = Math.random().toString(36).substring(7);

  return (
    <gravity-button
      onClicked={registerSymbol(onClick)}
      id={
        reference
          ? "_" + reference._elementIdentifier
          : "__g_" + randomUUID().replaceAll("-", "")
      }
    >
      {children}
    </gravity-button>
  );
}
