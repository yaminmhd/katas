const longestSeqInArray = require('../longestSeqInArray');

it('should return 4', () => {
  expect(longestSeqInArray([2,1,6,9,4,3])).toEqual(4)
});

it('should return 3 and ignore duplicates in the array', () => {
  expect(longestSeqInArray([3,5,6,7,3,4])).toEqual(5)
});