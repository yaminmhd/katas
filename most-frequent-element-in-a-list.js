const findMostFrequent = (listOfItems) => {
  let numberOfOccurences = {};
  let compare = 0;
  let mostFrequent=[];

  for(let i = 0; i< listOfItems.length; i++){
    const item = listOfItems[i];

    if(numberOfOccurences[item] === undefined){
      numberOfOccurences[item] = 1
    }else{
      numberOfOccurences[item] = numberOfOccurences[item] + 1
    }
  }
  console.log(numberOfOccurences);

  //using reduce method to compare the object occurences
  const output = Object.keys(numberOfOccurences).reduce((a,b) => {
    return numberOfOccurences[a] > numberOfOccurences[b] ? a : b
  });

    //if(numberOfOccurences[item] > compare){
    //   compare = numberOfOccurences[item];
    //   if(!mostFrequent.includes(listOfItems[i])){
    //     mostFrequent.push(listOfItems[i]);
    //   }
    // }

  return output;
}


console.log(findMostFrequent([3,1,2,13,2,1,2,1,3,4,5,2,3,1,3]));