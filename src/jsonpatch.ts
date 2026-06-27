
// Type exports for consumers
// Add specific types as needed
/**
 * jsonPatch<T extends Record<string, any>>
 * @param target
 * @param patch
 */
export function jsonPatch<T extends Record<string, any>>(target: T, patch: Partial<T>): T {
  if (target === null || target === undefined) throw new Error("Invalid input");
  return { ...target, ...patch };
}
