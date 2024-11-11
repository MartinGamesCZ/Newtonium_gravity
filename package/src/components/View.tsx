// @ts-nocheck

import { randomUUID } from "crypto";
import type { ElementStyle, StyleSheet } from "../styles/types";
import { enquote } from "../utils/conversions";
import { forwardRef, type Ref } from "react";

interface ViewProps {
  children: any | any[];
  style?: ElementStyle;
}

function _View({ children, style }: ViewProps, ref: Ref) {
  return (
    <view
      style={style}
      dir={style?.flexDirection == "row" ? "horizontal" : "vertical"}
      ref={ref}
    >
      {children}
    </view>
  );
}

const View = forwardRef(_View);

export default View;
