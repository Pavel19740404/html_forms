import controlCard from "../validator.js";

test.each([
  [4485225764950803, true],
  [8468565483648587, false],
])("Testing Luhn algorithm with %i number", (number, expected) => {
  const arr = number.toString().split("").map(Number);
  const result = controlCard(arr);
  expect(result).toEqual(expected);
});
