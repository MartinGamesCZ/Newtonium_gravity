import type { FontWeightMappings } from "./mappings";

export interface StyleSheet {
  [key: string]: ElementStyle;
}

export interface ElementStyle {
  color?: string;
  fontSize?: number;
  fontWeight?: keyof typeof FontWeightMappings;
  fontFamily?: string;
  textDecoration?: "underline" | "line-through" | "none";
  padding?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
}
