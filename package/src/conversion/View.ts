import { remapStyles } from "../styles/StyleSheet";
import { enquote } from "../utils/conversions";

const map = Object.entries({
  dir: "direction",
  style: "style",
});

export const ViewConversion = (props: any) => {
  const mod_props = { ...props };

  /*if (typeof mod_props.children != "string")
    mod_props.children = mod_props.children.join("");*/

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
      const mapped_styles = remapStyles(props.style);

      for (const key of Object.keys(mapped_styles)) {
        element.style.setProperty(key, mapped_styles[key]);
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
