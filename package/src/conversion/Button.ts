import { enquote } from "../utils/conversions";

export const ButtonConversion = {
  imports: ["QtQuick.Controls 1.2"],
  name: "Button",
  defaultProps: {},
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
    text: `"${p.children}"`,
    children: undefined,
    objectName: enquote(p.id),
  }),
  reversePropsRemap: {
    children: "text",
  },
};
