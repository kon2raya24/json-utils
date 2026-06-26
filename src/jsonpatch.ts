export function jsonPatch<T extends Record<string, any>>(target: T, patch: Partial<T>): T {
  return { ...target, ...patch };
}
