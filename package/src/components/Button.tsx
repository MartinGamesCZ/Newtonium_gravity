// @ts-nocheck

interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return <gravity-button>{children}</gravity-button>;
}
