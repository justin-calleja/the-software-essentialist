import isPalindrome from ".";

describe("palindrome checker", () => {
  describe("detects one word palindroms", () => {
    it.each([
      ["mom"],
      ["wow"],
      ["fizzif"],
      ["buzzub"],
      ["palindnilap"],
      ["noon"],
      ["level"],
    ])("like %p", (str) => {
      expect(isPalindrome(str)).toBe(true);
    });
  });

  describe("detects single words which are not palindroms", () => {
    it.each([
      ["bill"],
      ["mommy"],
      ["pappi"],
      ["wowwy"],
      ["fizzy"],
      ["Supercalifragilisticexpialidocious"],
      ["palindXilap"],
    ])("like %p", (str) => {
      expect(isPalindrome(str)).toBe(false);
    });
  });

  describe("detects one word palindroms regardless of casing", () => {
    it.each([
      ["Mom"],
      ["WOw"],
      ["fiZzif"],
      ["BUZZuB"],
      ["PALiNdnIlaP"],
      ["nOoN"],
      ["leVel"],
    ])("like %p", (str) => {
      expect(isPalindrome(str)).toBe(true);
    });
  });
});
