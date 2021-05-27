const sum = require('./sumFunction');

test('adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
