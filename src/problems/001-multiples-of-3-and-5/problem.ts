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
