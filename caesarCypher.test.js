import { caesarCypher } from "./caesarCypher.js";

describe("caesar Cypher", () => {
  it("the cc works correctly", () => {
    expect(caesarCypher("abc")).toBe("bcd");
  });
  it("the cc works with a shitf greater than 1", () => {
    expect(caesarCypher("abc", 2)).toBe("cde");
  });
  it("the cc works with the last char", () => {
    expect(caesarCypher("xyz")).toBe("yza");
  });
  it("the cc works with mayus char", () => {
    expect(caesarCypher("ABC")).toBe("bcd");
  });
  it("the cc doesnt do anything with number strings", () => {
    expect(caesarCypher("123")).toBe("123");
  });
  it("the cc only shift alphabet strings (happy case)", () => {
    expect(caesarCypher("123asd?¡.,-ADS", 5)).toBe("123fxi?¡.,-fix");
  });
});
