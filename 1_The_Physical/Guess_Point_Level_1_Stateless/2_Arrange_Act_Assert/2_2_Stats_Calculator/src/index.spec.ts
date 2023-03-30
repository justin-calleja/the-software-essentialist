import fc from "fast-check";
import statsCalculator from ".";

describe("stats calculator", () => {
  describe("can find the min value in sequence of numbers", () => {
    it("when min value is negative", () => {
      expect(statsCalculator([2, 4, 21, -8, 53, 40]).min).toBe(-8);
    });

    it("when min value is 0", () => {
      expect(statsCalculator([2, 4, 21, 0, 53, 40]).min).toBe(0);
    });

    it("when min value is 0 and occurs more than once", () => {
      expect(statsCalculator([0, 4, 21, 0, 53, 0]).min).toBe(0);
    });

    it("when seq of numbers is randomnly generated ", () => {
      const expected = -1;

      fc.assert(
        fc.property(
          // generate an array with length 1 to 11 with numbers from 0 to 10:
          fc.array(fc.integer({ min: 0, max: 10 }), {
            minLength: 1,
            maxLength: 11,
          }),

          (randNumbers) => {
            return statsCalculator([...randNumbers, expected]).min === expected;
          }
        )
      );
    });
  });

  describe("can find the max value in sequence of numbers", () => {
    it("when max value is negative", () => {
      expect(statsCalculator([-2, -4, -21, -8, -53, -40]).max).toBe(-2);
    });
  });
});
