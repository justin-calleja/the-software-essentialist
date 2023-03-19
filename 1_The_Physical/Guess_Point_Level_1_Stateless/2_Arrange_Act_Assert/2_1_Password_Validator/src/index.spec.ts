import fc from "fast-check";
import validatePassword from "./index";

describe("password validator", () => {
  describe("rejects passwords which are not between 5 and 15 characters long", () => {
    const expectedResult: ReturnType<typeof validatePassword> = {
      isValid: false,
      errors: ["invalid-length"],
    };

    it.each([["0"], ["1"], ["12"], ["123"], ["1234"], ["1234567890123456"]])(
      "like %p",
      (str) => {
        expect(validatePassword(str)).toEqual(expectedResult);
      }
    );

    it("like randomly generated strings from 0 to 4 in length", () => {
      fc.assert(
        fc.property(fc.string({ minLength: 0, maxLength: 4 }), (str) => {
          expect(validatePassword(str)).toEqual(expectedResult);
        })
      );
    });

    const maxLength = 40;
    it(`like randomly generated strings from 16 to ${maxLength} in length`, () => {
      fc.assert(
        fc.property(fc.string({ minLength: 16, maxLength }), (str) => {
          expect(validatePassword(str)).toEqual(expectedResult);
        })
      );
    });
  });
});
