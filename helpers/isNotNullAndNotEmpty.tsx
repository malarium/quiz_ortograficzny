export function isNotEmpty(a: string | [] | {}): boolean {
  let res: boolean;
  if (typeof a === `object`) {
    res = a !== null && Object.keys(a).length > 0;
  } else if (typeof a === `string`) {
    res = a !== null && a.length > 0;
  } else {
    res = false;
  }
  return res;
}
