import type { Event } from "../types/Event";

export interface StyleSheet {
  [key: string]:
    | ElementStyle
    | {
        [K in Event]: ElementStyle;
      };
}

type FontWeight =
  | "normal"
  | "bold"
  | "bolder"
  | "lighter"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

type FontStretch =
  | "ultra-condensed"
  | "extra-condensed"
  | "condensed"
  | "semi-condensed"
  | "normal"
  | "semi-expanded"
  | "expanded"
  | "extra-expanded"
  | "ultra-expanded";

type FontStyle = "normal" | "italic" | "oblique";
type FontVariant = "normal" | "small-caps";
type FontSize =
  | "xx-small"
  | "x-small"
  | "small"
  | "medium"
  | "large"
  | "x-large"
  | "xx-large"
  | "larger"
  | "smaller"
  | string
  | number;
type TextDecorationLine = "none" | "underline" | "line-through";
type TextDecorationStyle = "solid" | "double" | "wavy";
type BorderStyle =
  | "none"
  | "solid"
  | "inset"
  | "outset"
  | "hidden"
  | "dotted"
  | "dashed"
  | "double"
  | "groove"
  | "ridge";
type OutlineStyle =
  | "none"
  | "solid"
  | "inset"
  | "outset"
  | "hidden"
  | "dotted"
  | "dashed"
  | "double"
  | "groove"
  | "ridge";
type BackgroundClip = "border-box" | "padding-box" | "content-box";
type BackgroundOrigin = "border-box" | "padding-box" | "content-box";
type BackgroundBlendMode =
  | "color"
  | "color-burn"
  | "color-dodge"
  | "darken"
  | "difference"
  | "exclusion"
  | "hard-light"
  | "hue"
  | "lighten"
  | "luminosity"
  | "multiply"
  | "normal"
  | "overlay"
  | "saturate"
  | "screen"
  | "soft-light";

type _GtkIconStyle = "requested" | "regular" | "symbolic";
type _GtkIconEffect = "none" | "highlight" | "dim";

export interface ElementStyle {
  // GTK: Color properties
  color?: string;
  opacity?: number;

  // GTK: Font properties
  font?: string;
  fontFamily?: string;
  fontSize?: FontSize;
  fontStyle?: FontStyle;
  fontVariant?: FontVariant;
  fontWeight?: FontWeight;
  fontStretch?: FontStretch;
  fontFeatureSettings?: string;
  "-gtk-dpi"?: number;

  // GTK: Text caret properties
  caretColor?: string;
  "-gtk-secondary-caret-color"?: string;

  // GTK: Text decoration properties
  letterSpacing?: string | number;
  textDecorationLine?: TextDecorationLine;
  textDecorationColor?: string;
  textDecorationStyle?: TextDecorationStyle;
  textDecoration?: string;
  textShadow?: string;

  // GTK: Icon properties
  "-gtk-icon-source"?: string;
  "-gtk-icon-transform"?: string;
  "-gtk-icon-style"?: _GtkIconStyle;
  "-gtk-icon-theme"?: string;
  "-gtk-icon-palette"?: string;
  "-gtk-icon-shadow"?: string;
  "-gtk-icon-effect"?: _GtkIconEffect;

  // GTK: Box properties
  minWidth?: number | string;
  minHeight?: number | string;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  margin?: number | string;
  padding?: number | string;

  // GTK: Border properties
  borderTopWidth?: number | string;
  borderRightWidth?: number | string;
  borderBottomWidth?: number | string;
  borderLeftWidth?: number | string;
  borderTopStyle?: BorderStyle;
  borderRightStyle?: BorderStyle;
  borderBottomStyle?: BorderStyle;
  borderLeftStyle?: BorderStyle;
  borderTopRightRadius?: number | string;
  borderBottomRightRadius?: number | string;
  borderBottomLeftRadius?: number | string;
  borderTopLeftRadius?: number | string;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderImageSource?: string;
  borderImageRepeat?: string;
  borderImageSlice?: string;
  borderImageWidth?: string;
  borderWidth?: string | number;
  borderStyle?: BorderStyle;
  borderColor?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  border?: string;
  borderRadius?: string | number;
  borderImage?: string;

  // GTK: Outline properties
  outlineStyle?: OutlineStyle;
  outlineWidth?: string | number;
  outlineColor?: string;
  outlineOffset?: string | number;
  outline?: string;
  "-gtk-outline-top-left-radius"?: string | number;
  "-gtk-outline-top-right-radius"?: string | number;
  "-gtk-outline-bottom-right-radius"?: string | number;
  "-gtk-outline-bottom-left-radius"?: string | number;
  "-gtk-outline-radius"?: string | number;

  // GTK: Background properties
  backgroundColor?: string;
  backgroundClip?: BackgroundClip;
  backgroundOrigin?: BackgroundOrigin;
  backgroundSize?: string | number;
  backgroundPosition?: string | number;
  backgroundRepeat?: string; // TODO: Add proper type
  backgroundImage?: string;
  backgroundBlendMode?: BackgroundBlendMode;
  boxShadow?: string;
  background?: string;

  // GTK: Transition properties
  transition?: string;
  // TODO: Implement all

  // GTK: Animation properties
  // TODO: Implement all

  // GTK: Key binding properties
  "-gtk-key-bindings"?: string;

  // Custom implementation: Flex properties
  flexDirection?: "row" | "column";
}
