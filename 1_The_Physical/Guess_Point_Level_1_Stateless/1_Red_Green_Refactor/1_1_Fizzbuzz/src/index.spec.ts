import fc from "fast-check";
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

  const max = 100;
  describe(`Passes random input from 1 to ${max}`, () => {
    it('returns "Fizz" for multiples of 3', () => {
      fc.assert(
        fc.property(fc.integer({ min: 1, max }), (n) =>
          n % 3 === 0 && n % 5 !== 0 ? fizzbuzz(n) === "Fizz" : true
        )
      );
    });

    it('returns "Buzz" for multiples of 5', () => {
      fc.assert(
        fc.property(fc.integer({ min: 1, max }), (n) =>
          n % 5 === 0 && n % 3 !== 0 ? fizzbuzz(n) === "Buzz" : true
        )
      );
    });

    it('returns "FizzBuzz" for multiples of both 3 and 5', () => {
      fc.assert(
        fc.property(fc.integer({ min: 1, max }), (n) =>
          n % 3 === 0 && n % 5 === 0 ? fizzbuzz(n) === "FizzBuzz" : true
        )
      );
    });
  });
});
