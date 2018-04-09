const anagrams = require('../anagrams');

it('should return true when two words have the same letters', () => {
  expect(anagrams('ab',['ba', 'bc', 'cd'])).toEqual(['ba']);
});

it('should return racer', () => {
  expect(anagrams('racer',['crazer', 'carer', 'racar', 'caers', 'racer'])).toEqual(['carer', 'racer']);
});

it('should return empty array', () => {
  expect(anagrams('laser',['lazing', 'lazy',  'lacer'])).toEqual([])
});