import largestPrimeFactor from './problem';

test('Problem 3: Largest prime factor', () => {
    expect(largestPrimeFactor(2)).toBe(2);
    expect(largestPrimeFactor(3)).toBe(3);
    expect(largestPrimeFactor(5)).toBe(5)
    expect(largestPrimeFactor(7)).toBe(7);
    expect(largestPrimeFactor(8)).toBe(2);
    expect(largestPrimeFactor(13195)).toBe(29);
    expect(largestPrimeFactor(600851475143)).toBe(6857);
  });
  