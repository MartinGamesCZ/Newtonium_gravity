export const ColumnLayoutConversion = {
  imports: ["QtQuick.Layouts 1.2"],
  name: "ColumnLayout",
  defaultProps: {},
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
  }),
};

export const RowLayoutConversion = {
  imports: ["QtQuick.Layouts 1.2"],
  name: "RowLayout",
  defaultProps: {},
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
  }),
};

export const GridLayoutConversion = {
  imports: ["QtQuick.Layouts 1.2"],
  name: "GridLayout",
  defaultProps: {},
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
  }),
};
