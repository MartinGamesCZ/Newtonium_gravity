import { reverse } from "dns";
import { enquote } from "../utils/conversions";

export const DialogConversion = {
  imports: ["QtQuick 2.3", "QtQuick.Dialogs 1.2"],
  name: "Dialog",
  defaultProps: {
    visible: false,
  },
  propsRemap: (p: Record<string, any>, children: any) => {
    return {
      ...p,
      title: `"${p.title}"`,
      objectName: enquote(p.id),
    };
  },
  reversePropsRemap: {
    title: "title",
    visible: "visible",
  },
};
