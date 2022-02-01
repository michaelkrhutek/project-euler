import fiboEvenSum from './problem';

test('Problem 2: Even Fibonacci Numbers', () => {
    expect(fiboEvenSum(10)).toBe(10);
    expect(fiboEvenSum(34)).toBe(44);
    expect(fiboEvenSum(60)).toBe(44);
    expect(fiboEvenSum(1000)).toBe(798);
    expect(fiboEvenSum(100000)).toBe(60696);
    expect(fiboEvenSum(4000000)).toBe(4613732);

  });
  