import { enquote } from "../utils/conversions";
import { StyleMappings } from "./mappings";
import type { ElementStyle, StyleSheet } from "./types";

export default function createStyleSheet<T extends StyleSheet>(styles: T): T {
  return styles;
}

export function remapStyles(styles: ElementStyle) {
  let out: {
    [key: string]: any;
  } = {};

  for (const key of Object.keys(styles)) {
    const v = styles[key as keyof ElementStyle];

    if (!v) continue;

    const k = StyleMappings[key as keyof typeof StyleMappings] as any;

    if (typeof k == "function") {
      out = {
        ...out,
        ...k(v as any),
      };

      continue;
    }

    out[k] = typeof v == "string" ? enquote(v) : v;
  }

  return out;
}
