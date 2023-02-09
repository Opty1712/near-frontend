/** returns literal string instead of «string» for the concrete objects */
export function getKeys<T extends Record<string | number, unknown>>(
  object: T
): (keyof T)[] {
  return Object.keys(object) as (keyof T)[];
}
