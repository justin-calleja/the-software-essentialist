import isPalindrome from ".";

describe("palindrome checker", () => {
  test.each([
    ["mom"],
    ["wow"],
    ["fizzif"],
    ["buzzub"],
    ["palindnilap"],
    ["noon"],
    ["level"],
  ])("detects one word palindroms like %p", (str) => {
    expect(isPalindrome(str)).toBe(true);
  });
});
