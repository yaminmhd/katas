/*
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5
The most frequent number in the array is -1 and it occurs 5 times.
*/

function mostFrequentItemCount(collection) {

  let numberofOccurences = {};
  let compare = 0;
  let mostFrequent;

  if (collection.length === 0){
    return 0;
  }

  collection.forEach(item=> {
    if(numberofOccurences[item] === undefined){
      numberofOccurences[item] = 1;
    }else{
      numberofOccurences[item] += 1;
    }

    if(numberofOccurences[item] > compare){
      compare = numberofOccurences[item];
      mostFrequent = compare;
    }
  })
  // for(let i =0; i<collection.length;i++){
  //   const item = collection[i];
  //   if(numberofOccurences[item] === undefined){
  //     numberofOccurences[item] = 1;
  //   }else{
  //     numberofOccurences[item]++;
  //   }
  // }
  return mostFrequent;
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))
//