export function isNonEmptyArray(value: unknown) {
  return Array.isArray(value) && value.length > 0;
}