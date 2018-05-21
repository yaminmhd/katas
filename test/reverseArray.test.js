const reverseArray = require('../reverseArray');

it('should reverse array in place', () => {
  expect(reverseArray([1,2,3])).toEqual([3,2,1]);
});

it('should reverse arrays with larger numbers in place ', () => {
  expect(reverseArray([0,1,2,3,4,5,6,7])).toEqual([7,6,5,4,3,2,1,0]);
});

it('should return arr when it is a falsey value', () => {
  expect(reverseArray()).toEqual('Please enter an array as input');
});