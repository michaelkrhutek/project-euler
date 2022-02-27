import smallestMultiple from "./problem";

test("Problem 5: Smallest multiple", () => {
  expect(smallestMultiple(5)).toBe(60);
  expect(smallestMultiple(7)).toBe(420);
  expect(smallestMultiple(10)).toBe(2520);
  expect(smallestMultiple(13)).toBe(360360);
  expect(smallestMultiple(20)).toBe(232792560);
});
