import { capitalize } from "./main.js";

describe("function capitalize", () => {
  it("the function capitalize the first char", () => {
    expect(capitalize("abc")).toBe("Abc");
  });
  it("the function works with empty strings", () => {
    expect(capitalize("")).toBe("");
  });
  it("the function in a capitalized string doesnt do anything", () => {
    expect(capitalize("Abc")).toBe("Abc");
  });
  it("the function doesnt do anything with number strings", () => {
    expect(capitalize("123")).toBe("123");
  });
});
