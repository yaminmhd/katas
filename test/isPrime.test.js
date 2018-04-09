const isPrime = require('../isPrime');
it('should be false for 0', () => {
  expect(isPrime(0)).toEqual(false);
});

it('should be false for 1', () => {
  expect(isPrime(1)).toEqual(false);
});

it('should be true for 13', () => {
  expect(isPrime(13)).toEqual(true);
});