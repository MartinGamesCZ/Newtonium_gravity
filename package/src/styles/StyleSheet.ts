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
    let v = styles[k];

    if (StyleMappings[k] && StyleMappings[k] === "!") {
      continue;
    }

    if (!StyleMappings[k]) {
      if (typeof v != "string") {
        v = String(v);
      }

      out[key] = v;

      continue;
    }

    const mapped: any = StyleMappings[k];

    if (typeof mapped == "string") {
      if (typeof v != "string") {
        v = String(v);
      }

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
