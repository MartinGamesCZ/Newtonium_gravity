import { dlopen, FFIType } from "bun:ffi";
import { randomUUID } from "crypto";
import { writeFileSync } from "fs";
import path from "path";

export default function runQml(qml: string) {
  const engine = dlopen(
    path.join(import.meta.dirname, "../../rust/target/debug/librust.so"),
    {
      open_window: {
        args: [FFIType.ptr],
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

  console.log(engine.symbols.open_window(ntb));
}
