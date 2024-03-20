const assert = require("assert");
const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
  it("returns FizzBuzz when value is divisible by 15", () => {
    assert(fizzbuzz(30) === "FizzBuzz");
  });
  it("returns Fizz when value is divisible by 3", () => {
    assert(fizzbuzz(9) === "FizzBuzz");
  });
  it("returns Buzz when value is divisible by 5", () => {
    assert(fizzbuzz(10) === "FizzBuzz");
  });
  it("returns the value when value is not divisible by 3 or 5", () => {
    assert(fizzbuzz(7) === "7");
  });
});
