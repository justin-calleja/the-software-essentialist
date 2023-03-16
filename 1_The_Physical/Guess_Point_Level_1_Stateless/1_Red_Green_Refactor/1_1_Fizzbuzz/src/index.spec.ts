import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  test.each([
    ["1", 1],
    ["2", 2],
    ["Fizz", 3],
    ["Buzz", 5],
    ["FizzBuzz", 15],
    ["FizzBuzz", 30],
    ["31", 31],
  ])("returns %p for input %p", (expected, input) => {
    expect(fizzbuzz(input)).toEqual(expected);
  });
});
