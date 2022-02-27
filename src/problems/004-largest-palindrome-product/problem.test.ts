import largestPalindromeProduct from "./problem";

test("Problem 4: Largest palindrome product", () => {
  expect(largestPalindromeProduct(2)).toBe(9009);
  expect(largestPalindromeProduct(3)).toBe(906609);
});
