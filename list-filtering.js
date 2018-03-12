/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

// function filter_list(l) {
//   var filteredArray = [];
//   // Return a new array with the strings filtered out
//   for(var i =0; i<l.length; i++){
//     if(typeof l[i] === 'number'){
//       filteredArray.push(l[i]);
//     }
//   }
//   return filteredArray;
// }

// function filter_list(l){
//   return l.filter(element => typeof element === 'number')
// }

const filter_list = l => l.filter(element => typeof element === 'number');


//one liner
// const filter_list = l => l.filter(Number.isInteger);

console.log(filter_list([1,2,'a','b']));

console.log(filter_list([1,2,'a','b',3,4,5,6,'s','f','sdf']));