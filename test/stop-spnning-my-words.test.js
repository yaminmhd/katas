/*
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

const spinWords = require('../stop-spinning-my-words');

it('should spin words with 5 or more letters', () => {
  expect(spinWords('fellow')).toEqual('wollef');
  expect(spinWords('warriors')).toEqual('sroirraw');
});


it('should not spin words that has less than 5 letters', () => {
  expect(spinWords('Hey')).toEqual('Hey');
});

it('should spin sentence with the above criteria', () => {
  expect(spinWords('Hey fellow warriors')).toEqual('Hey wollef sroirraw');
});