import fc from "fast-check";
import validatePassword, { ErrorKey, ValidationResult } from "./index";

describe("password validator", () => {
  it('rejects "Z1" because it is too short', () => {
    expect(validatePassword("Z1")).toEqual({
      isValid: false,
      errors: ["invalid-length"],
    } as ValidationResult);
  });

  it('rejects "Z1 hello world such wordy this is" because it is too long', () => {
    expect(validatePassword("Z1 hello world such wordy this is")).toEqual({
      isValid: false,
      errors: ["invalid-length"],
    } as ValidationResult);
  });

  it('rejects "Zero is false" because it is missing a digit', () => {
    expect(validatePassword("Zero is false")).toEqual({
      isValid: false,
      errors: ["must-have-digit"],
    } as ValidationResult);
  });

  it('rejects "zero is 0" because it is missing an upper case letter', () => {
    expect(validatePassword("zero is 0")).toEqual({
      isValid: false,
      errors: ["must-have-upper-case-letter"],
    } as ValidationResult);
  });

  it('rejects "zero is 0 not a hero and def not a pineapple" because it is missing an upper case letter and it is too long', () => {
    const result = validatePassword(
      "zero is 0 not a hero and def not a pineapple"
    );
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("must-have-upper-case-letter" as ErrorKey);
    expect(result.errors).toContain("invalid-length" as ErrorKey);
  });

  describe("rejects password when it is missing a digit, an upper case letter, and is too short", () => {
    it.each([[""], ["  "], [" s d"]])("like %p", (str) => {
      const result = validatePassword(str);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain("must-have-digit" as ErrorKey);
      expect(result.errors).toContain(
        "must-have-upper-case-letter" as ErrorKey
      );
      expect(result.errors).toContain("invalid-length" as ErrorKey);
    });
  });

  describe("rejects password when it is missing a digit, an upper case letter, and is too long", () => {
    it.each([
      ["this is definitely longer than fifteen"],
      ["space man, i always wanted you to go into space man"],
    ])("like %p", (str) => {
      const result = validatePassword(str);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain("must-have-digit" as ErrorKey);
      expect(result.errors).toContain(
        "must-have-upper-case-letter" as ErrorKey
      );
      expect(result.errors).toContain("invalid-length" as ErrorKey);
    });
  });

  describe("accepts passwords which are between 5 and 15 characters long, contain at least one digit, and contain at least one upper case letter", () => {
    const expectedResult: ValidationResult = {
      isValid: true,
      errors: [],
    };

    it.each([
      ["0 is False"],
      ["1 is True"],
      ["God is passw0rd"],
      ["how about U2?"],
    ])("like %p", (str) => {
      expect(validatePassword(str)).toEqual(expectedResult);
    });

    it("like randomly generated strings from 3 to 13 in length, prefixed with '2B'", () => {
      fc.assert(
        fc.property(fc.string({ minLength: 3, maxLength: 13 }), (str) => {
          expect(validatePassword(`2B${str}`)).toEqual(expectedResult);
        })
      );
    });
  });
});
