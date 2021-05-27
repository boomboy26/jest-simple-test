const subtractFunction = require('./subtractFunction');

test('properly subtract', () => {
  expect(subtractFunction(1, 2)).toBe(-1);
});
