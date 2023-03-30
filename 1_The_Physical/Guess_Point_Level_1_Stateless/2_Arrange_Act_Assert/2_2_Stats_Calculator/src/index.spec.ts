import statsCalculator from ".";

describe("stats calculator", () => {
  describe("can find the min value in sequence of numbers", () => {
    it("when min value is negative", () => {
      expect(statsCalculator([2, 4, 21, -8, 53, 40]).min).toBe(-8);
    });
  });
});
