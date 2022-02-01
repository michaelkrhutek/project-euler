// Problem 1: Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

const multiplesOf3and5 = (number: number): number => {
  const allNumbers = Array(number)
    .fill(0)
    .map((_v, number) => number);
  const filtredNumbers = allNumbers.filter(
    (number) => getIsMultipleOf(number, 3) || getIsMultipleOf(number, 5)
  );
  return filtredNumbers.reduce((sum, number) => sum + number, 0);
};

const getIsMultipleOf = (number: number, multiplier: number): boolean => {
  return number % multiplier === 0;
};

export default multiplesOf3and5;
