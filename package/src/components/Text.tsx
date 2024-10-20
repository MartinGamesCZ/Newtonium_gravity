// @ts-nocheck

interface TextProps {
  children: string;
}

export default function Text({ children }: TextProps) {
  return <gravity-text>{children}</gravity-text>;
}
