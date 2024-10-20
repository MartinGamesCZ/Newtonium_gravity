export function enquote(s: string): string {
  return `"${s}"`;
}

export const stringifyFn = (fn: Function) => fn.toString().replace(/\s+/g, " ");
