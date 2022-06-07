/**
 * Clone an object.
 */

export function simplifyDeepClone<T>(x: T): T {
  let y;
  if (Array.isArray(x)) {
    y = [];
    for (const e of x) {
      y.push(simplifyDeepClone(e));
    }
  } else if (typeof x === "object") {
    y = {};
    for (const [k, v] of Object.entries(x)) {
      y[k] = simplifyDeepClone(v);
    }
  } else {
    y = x;
  }

  return y;
}
