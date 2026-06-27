
// Type exports for consumers
// Add specific types as needed
/**
 * safeJsonParse<T>
 * @param text
 * @param fallback
 */
export function safeJsonParse<T>(text: string, fallback: T): T {
  if (text === null || text === undefined) throw new Error("Invalid input");
  try { return JSON.parse(text); } catch { return fallback; }
}
