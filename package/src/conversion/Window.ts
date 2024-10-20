export const WindowConversion = {
  imports: ["QtQuick.Window 2.13"],
  name: "Window",
  defaultProps: {
    visible: true,
  },
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
    title: `"${p.title}"`,
  }),
};
