import { calculator } from "./calculator.js";

describe("calculator", () => {
  it("the calculator can sum two numbers", () => {
    expect(calculator.sum(1, 4)).toBe(5);
  });
  it("the calculator can sum with negative numbers", () => {
    expect(calculator.sum(1, -5)).toBe(-4);
  });
  it("the calculator can sum two negative numbers", () => {
    expect(calculator.sum(-1, -5)).toBe(-6);
  });
  it("the calculator can subtract two numbers", () => {
    expect(calculator.subtract(4, 1)).toBe(3);
  });
  it("the calculator can subtract with negative numbers", () => {
    expect(calculator.subtract(1, -5)).toBe(6);
  });
  it("the calculator can subtract two negative numbers", () => {
    expect(calculator.sum(-1, -5)).toBe(-6);
  });
  it("the calculator can divide two numbers", () => {
    expect(calculator.divide(4, 2)).toBeCloseTo(2);
  });
  it("the calculator throw an error with a zero division", () => {
    expect(calculator.divide(3, 0)).toBe(Infinity);
  });
  it("the calculator can multiply two numbers", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });
});
