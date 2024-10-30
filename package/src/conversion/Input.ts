import { enquote } from "../utils/conversions";

export const InputConversion = {
  imports: ["QtQuick.Controls 1.4"],
  name: "TextField",
  defaultProps: {},
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
    text: `"${p.text}"`,
    children: undefined,
    objectName: enquote(p.id),
  }),
  reversePropsRemap: {
    text: "text",
  },
};
