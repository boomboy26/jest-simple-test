const arrayFunction = require('./arrayFunction');

test('properly clones array', () => {
  const array = [1, 2, 3, 4];
  expect(arrayFunction(array)).toEqual(array);
  expect(arrayFunction(array)).not.toBe(array);
});
