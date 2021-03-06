/*
Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, function should returns 0

Examples

sequenceSum(2,2,2) === 2
sequenceSum(2,6,2) === 12 // 2 + 4 + 6
sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
sequenceSum(1,5,3) === 5 // 1 + 4
*/

const sequenceSum = (begin, end, step) => {
  let result = 0
  for (let i = begin; i <= end; i+=step) {
    result += i;
  }
  return result;

  //using recursion
  //base case
  // if(begin > end){
  //   return 0;
  // }
  // //recursion part?
  // return begin+ sequenceSum(begin,end,step);
};

console.log(sequenceSum(1,5,1));

/*
  ->(1,5,3)
 1+(4,5,3)
 1+4+(7,5,3) --> hits the base case because begin is larger than end
 so result will be 1+ 4 = 5
*/
