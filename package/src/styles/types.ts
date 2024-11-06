import type { FontWeightMappings } from "./mappings";

export interface StyleSheet {
  [key: string]: ElementStyle;
}

export interface ElementStyle {
  color?: string;
  background?: string;
  fontSize?: number;
  fontWeight?: keyof typeof FontWeightMappings;
  fontFamily?: string;
  padding?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
}
