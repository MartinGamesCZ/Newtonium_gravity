export const FontWeightMappings = {
  thin: "Font.Thin",
  extra_light: "Font.ExtraLight",
  light: "Font.Light",
  normal: "Font.Normal",
  medium: "Font.Medium",
  demi_bold: "Font.DemiBold",
  bold: "Font.Bold",
  extra_bold: "Font.ExtraBold",
  black: "Font.Black",
  100: "Font.Thin",
  200: "Font.ExtraLight",
  300: "Font.Light",
  400: "Font.Normal",
  500: "Font.Medium",
  600: "Font.DemiBold",
  700: "Font.Bold",
  800: "Font.ExtraBold",
  900: "Font.Black",
};

export const StyleMappings = {
  color: "color",
  fontSize: "font-size",
  fontWeight: (value: keyof typeof FontWeightMappings) => {
    return {
      "font-weight": FontWeightMappings[value],
    };
  },
  fontFamily: "font-family",
  padding: "padding",
  paddingTop: "padding-top",
  paddingRight: "padding-right",
  paddingBottom: "padding-bottom",
  paddingLeft: "padding-left",
};
