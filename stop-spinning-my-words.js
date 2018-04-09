/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/

const spinWords = (input) => {

  // const words = input.split(" ");
  // const result = []

  // words.forEach(element => {
  //   if(element.length >= 5){
  //     result.push(element.split("").reverse().join(""));
  //   }else{
  //     result.push(element);
  //   }
  // });
  // return result.join(" ");

  //functional way
  return input.split(" ").map(word => {
    return (word.length > 4) ? word.split("").reverse().join("") : word;
  }).join(' ');
}

module.exports = spinWords;