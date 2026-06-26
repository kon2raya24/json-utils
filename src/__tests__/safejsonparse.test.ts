import { describe, it, expect } from "vitest";
import { safeJsonParse } from "../safejsonparse";

describe("safeJsonParse", () => {
  it("should be a function", () => {
    expect(typeof safeJsonParse).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => safeJsonParse(null as any)).toThrow();
  });
});
