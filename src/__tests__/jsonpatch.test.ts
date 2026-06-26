import { describe, it, expect } from "vitest";
import { jsonPatch } from "../jsonpatch";

describe("jsonPatch", () => {
  it("should be a function", () => {
    expect(typeof jsonPatch).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => jsonPatch(null as any)).toThrow();
  });
});
