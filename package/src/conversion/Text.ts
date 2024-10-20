export const TextConversion = {
  imports: ["QtQuick.Controls 1.2"],
  name: "Label",
  defaultProps: {},
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
    text: `"${p.children}"`,
    children: undefined,
  }),
};
