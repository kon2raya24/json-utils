
// Type exports for consumers
// Add specific types as needed
export function safeJsonParse<T>(text: string, fallback: T): T {
  try { return JSON.parse(text); } catch { return fallback; }
}
