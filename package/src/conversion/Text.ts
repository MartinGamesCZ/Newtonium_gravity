import { remapStyles } from "../styles/StyleSheet";
import { enquote } from "../utils/conversions";

export const TextConversion = {
  imports: ["QtQuick 2.15"],
  name: "Text",
  defaultProps: {},
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
    children: undefined,
    style: undefined,
    objectName: enquote(p.id),
    text: `"${p.children}"`,
    "font.hintingPreference": "Font.PreferFullHinting",
    ...remapStyles(p.style),
  }),
  reversePropsRemap: {
    children: "text",
    style: remapStyles,
  },
};
