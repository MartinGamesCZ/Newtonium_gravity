import { dlopen, FFIType } from "bun:ffi";
import { randomUUID } from "crypto";
import { writeFileSync } from "fs";
import path from "path";

export default function runQml(qml: string, icon: string) {
  const engine = dlopen(
    path.join(import.meta.dirname, "../../rust/target/debug/librust.so"),
    {
      open_window: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.i32,
      },
    }
  );

  const n = randomUUID();

  writeFileSync(`/tmp/${n}.qml`, qml);

  const str = new TextEncoder().encode(`/tmp/${n}.qml`);

  let ntb = new Uint8Array(str.length + 1);
  ntb.set(str, 0);
  ntb[str.length] = 0;

  const iconStr = new TextEncoder().encode(icon);

  let iconTb = new Uint8Array(iconStr.length + 1);
  iconTb.set(iconStr, 0);
  iconTb[iconStr.length] = 0;

  engine.symbols.open_window(ntb, iconTb);
}
