// @ts-nocheck

import {
  gravityFunctionHandler,
  registerSymbol,
} from "../handler/function/gravityFunctionHandler";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  const symbol = Math.random().toString(36).substring(7);

  return (
    <gravity-button onClicked={registerSymbol(onClick)}>
      {children}
    </gravity-button>
  );
}
