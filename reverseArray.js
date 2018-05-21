const reverseArray = (arr) => {
  if(!Array.isArray(arr)) return 'Please enter an array as input';
  let front = 0;
  let back = arr.length-1;
  while(front < back){
    swap(arr,front,back);
    front++;
    back--;
  }
  return arr;
}

const swap = (arr,front,back) => {
  temp = arr[front];
  arr[front] = arr[back];
  arr[back] = temp;
}

module.exports = reverseArray;