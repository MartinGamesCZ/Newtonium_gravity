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

  for (const key of Object.keys(styles ?? {})) {
    const k = key as keyof ElementStyle;
    const v = styles[k];

    if (!StyleMappings[k]) {
      out[key] = v;

      continue;
    }

    const mapped = StyleMappings[k];

    if (typeof mapped == "string") {
      out[mapped] = v;

      continue;
    }

    out = {
      ...out,
      ...mapped(v as any),
    };
  }

  return out;
}
