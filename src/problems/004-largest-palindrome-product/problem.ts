// Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

const largestPalindromeProduct = (
  number: number,
  bruteForce: boolean = false
): number => {
  const fn = bruteForce
    ? largestPalindromeProductBruteForce
    : largestPalindromeProductOptimized;
  return fn(number);
};

const largestPalindromeProductOptimized: typeof largestPalindromeProduct = (
  digits
) => {
  let palindrome: number = 0;
  const maxSum = 2 * getDigitsMaxNumber(digits);
  const minSum = 2 * getDigistMinNumber(digits);
  let sum = maxSum;
  while (true) {
    if (palindrome) break;
    if (sum < minSum) break;
    const palindromeOfProduct =
      getLargestPalindromeOfProductOfTwoMultipliersWithSum(sum, digits);
    if (palindromeOfProduct) {
      palindrome = palindromeOfProduct;
      break;
    }
    sum--;
  }
  return palindrome;
};

const largestPalindromeProductBruteForce: typeof largestPalindromeProduct = (
  number
) => {
  let palindromes: number[] = [];
  const maxNumber = getDigitsMaxNumber(number);
  const minNumber = getDigistMinNumber(number);
  for (let multiplier1 = maxNumber; multiplier1 >= minNumber; multiplier1--) {
    for (let multiplier2 = maxNumber; multiplier2 >= minNumber; multiplier2--) {
      const product = multiplier1 * multiplier2;
      const isPalindrome = getIsPalindrome(product);
      if (isPalindrome) palindromes.push(product);
    }
  }
  return Math.max(...palindromes);
};

const getLargestPalindromeOfProductOfTwoMultipliersWithSum = (
  sum: number,
  digist: number
): number | null => {
  let palindrome: number | null = null;
  const maxNumber = getDigitsMaxNumber(digist);
  const minNumber = getDigistMinNumber(digist);
  let multipliers: [number, number] =
    sum % 2 === 2
      ? [sum / 2, sum / 2]
      : [Math.ceil(sum / 2), Math.floor(sum / 2)];
  while (true) {
    const [m1, m2] = multipliers;
    if (palindrome) break;
    if (m1 > maxNumber) break;
    if (m2 < minNumber) break;
    const product = m1 * m2;
    if (getIsPalindrome(product)) {
      palindrome = product;
      break;
    }
    multipliers = [m1 + 1, m2 - 1];
  }
  return palindrome;
};

const getDigitsMaxNumber = (digits: number): number => {
  return 10 ** digits - 1;
};

const getDigistMinNumber = (digist: number): number => {
  return 10 ** (digist - 1);
};

const getIsPalindrome = (n: number): boolean => {
  const normal = n.toString();
  const reversed = normal.split("").reverse().join("");
  return normal === reversed;
};

export default largestPalindromeProduct;
