import { events } from "../events";
import { remapStyles } from "../styles/StyleSheet";
import { enquote } from "../utils/conversions";

const map = Object.entries({
  children: "innerHTML",
  style: "style",
});

export const ButtonConversion = (props: any, theme: any) => {
  const mod_props = { ...props };

  if (typeof mod_props.children != "string")
    mod_props.children = mod_props.children.join("");

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
        ...theme.button,
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

      for (const key of Object.keys(events)) {
        if (props[key]) {
          element.removeEventListener(events[key as keyof typeof events]);
          element.addEventListener(
            events[key as keyof typeof events],
            props[key]
          );
        }
      }
    },
    props: Object.fromEntries(
      Object.entries({
        ...mapped,
        style: undefined,
        onClick: undefined,
      }).filter(([, v]) => v)
    ),
  };
};
