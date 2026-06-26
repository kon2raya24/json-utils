import { describe, it, expect } from "vitest";
import { safeJsonStringify } from "../safejsonstringify";

describe("safeJsonStringify", () => {
  it("should be a function", () => {
    expect(typeof safeJsonStringify).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => safeJsonStringify(null as any)).toThrow();
  });
});
