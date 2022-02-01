// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

const largestPrimeFactor = (number: number): number => {
  const factors = getFactors(number);
  const sortedPrimeFactors = [...factors].sort((a, b) => b - a);
  return sortedPrimeFactors[0];
};

const getFactors = (number: number): number[] => {
  let factors = [1];
  let remainder = number;
  let possibleFactor = 2;
  while (remainder > 1) {
    const isFactor = remainder % possibleFactor === 0;
    if (isFactor) {
      factors = [...factors, possibleFactor];
      remainder = remainder / possibleFactor;
      possibleFactor = 2;
    } else {
      possibleFactor++;
    }
  }
  return factors;
};

export default largestPrimeFactor;
