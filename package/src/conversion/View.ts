import { remapStyles } from "../styles/StyleSheet";
import { enquote } from "../utils/conversions";

const map = Object.entries({
  dir: "direction",
  style: "style",
});

export const ViewConversion = (props: any, theme: any) => {
  const mod_props = { ...props };

  const mapped = Object.fromEntries(
    Object.entries(mod_props).map(([key, value]) => {
      const mapping = map.find(([k]) => k === key);

      if (!mapping) {
        return [key, value];
      }

      const [, mappedKey] = mapping;

      return [mappedKey, value];
    })
  );

  return {
    post: (element: any) => {
      const mapped_styles = remapStyles({
        ...theme.view,
        ...props.style,
      });

      for (const key of Object.keys(mapped_styles)) {
        if (key.startsWith("&")) {
          for (const k of Object.keys(mapped_styles[key])) {
            element.style.setProperty(
              k,
              mapped_styles[key][k],
              key.replace("&", "")
            );
          }
        } else element.style.setProperty(key, mapped_styles[key]);
      }
    },
    props: Object.fromEntries(
      Object.entries({
        ...mapped,
        style: undefined,
        children: undefined,
      }).filter(([, v]) => v)
    ),
  };
};
