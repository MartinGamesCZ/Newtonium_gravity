import { remapStyles } from "../styles/StyleSheet";

export const TextConversion = {
  imports: ["QtQuick 2.15"],
  name: "Text",
  defaultProps: {},
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
    children: undefined,
    style: undefined,
    text: `"${p.children}"`,
    "font.hintingPreference": "Font.PreferFullHinting",
    ...remapStyles(p.style),
  }),
};
