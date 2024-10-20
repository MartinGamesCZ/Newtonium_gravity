export const DialogConversion = {
  imports: ["QtQuick 2.3", "QtQuick.Dialogs 1.2"],
  name: "Dialog",
  defaultProps: {
    visible: true,
  },
  propsRemap: (p: Record<string, any>, children: any) => {
    return {
      ...p,
      title: `"${p.title}"`,
    };
  },
};
