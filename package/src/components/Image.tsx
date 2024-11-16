// @ts-nocheck

import { randomUUID } from "crypto";
import type { ElementStyle, StyleSheet } from "../styles/types";
import { forwardRef, useEffect, useMemo, type Ref } from "react";
import ReactDOMServer from "react-dom/server";
import { rmSync, writeFileSync } from "fs";

interface ImageProps {
  children?: any | any[];
  src?: string;
  style?: ElementStyle;
}

function _Image({ src: _src, children, style }: ImageProps, ref: Ref) {
  const stringified = useMemo(
    () => ReactDOMServer.renderToString(children ?? <></>),
    [children]
  );

  const temp_id = useMemo(() => randomUUID().replace(/-/g, ""), [stringified]);
  let src = children ? `/tmp/${temp_id}.svg` : _src;

  useEffect(() => {
    writeFileSync(src, stringified);

    return () => {
      rmSync(src);
    };
  }, [stringified]);

  return (
    <image
      style={style}
      width={style?.width ? style.width.toString() : undefined}
      height={style?.height ? style.height.toString() : undefined}
      src={src}
      ref={ref}
    >
      {""}
    </image>
  );
}

const Image = forwardRef(_Image);

export default Image;
