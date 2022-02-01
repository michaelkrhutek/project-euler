import multiplesOf3and5 from './problem';

test('Problem 1: Multiples of 3 and 5', () => {
    expect(multiplesOf3and5(10)).toBe(23);
    expect(multiplesOf3and5(49)).toBe(543);
    expect(multiplesOf3and5(1000)).toBe(233168);
    expect(multiplesOf3and5(8456)).toBe(16687353);
    expect(multiplesOf3and5(19564)).toBe(89301183);
  });
  