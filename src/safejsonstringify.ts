
// Type exports for consumers
// Add specific types as needed
/**
 * safeJsonStringify
 * @param obj
 * @param space?
 */
export function safeJsonStringify(obj: unknown, space?: number): string {
  const seen = new WeakSet();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return "[Circular]";
      seen.add(value);
    }
    return value;
  }, space);
}
