const longestSeqInArray = (arr) => {
  let set = {};
  let longest = 0;
  for(num of arr){
    set[num] = true;
  }
  for(num in set){
    if(!set[num-1]){
      let current = num;
      current = parseInt(current);
      let count = 1;
      while(set[current+1]){
        count++;
        current++;
      }
      longest = Math.max(longest,count);
    }
  }
  return longest;
}

longestSeqInArray([2,1,6,9,4,3]);

module.exports = longestSeqInArray;