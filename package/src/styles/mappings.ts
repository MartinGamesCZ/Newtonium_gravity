export const StyleMappings = {
  color: "color",
  opacity: "opacity",

  font: "font",
  fontFamily: "font-family",
  fontSize: (v: any) => ({
    "font-size": typeof v == "number" ? `${v}px` : v,
  }),
  fontStyle: "font-style",
  fontVariant: "font-variant",
  fontWeight: "font-weight",
  fontStretch: "font-stretch",
  fontFeatureSettings: "font-feature-settings",

  "-gtk-dpi": "-gtk-dpi",

  background: "background",
  flexDirection: "!",
  transition: "transition",
  padding: "padding",
  paddingTop: "padding-top",
  paddingRight: "padding-right",
  paddingBottom: "padding-bottom",
  paddingLeft: "padding-left",
};
