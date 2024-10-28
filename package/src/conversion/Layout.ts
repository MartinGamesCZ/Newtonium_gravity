import { enquote } from "../utils/conversions";

export const ColumnLayoutConversion = {
  imports: ["QtQuick.Layouts 1.2"],
  name: "ColumnLayout",
  defaultProps: {},
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
    objectName: enquote(p.id),
  }),
};

export const RowLayoutConversion = {
  imports: ["QtQuick.Layouts 1.2"],
  name: "RowLayout",
  defaultProps: {},
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
    objectName: enquote(p.id),
  }),
};

export const GridLayoutConversion = {
  imports: ["QtQuick.Layouts 1.2"],
  name: "GridLayout",
  defaultProps: {},
  propsRemap: (p: Record<string, any>, children: any) => ({
    ...p,
    objectName: enquote(p.id),
  }),
};
