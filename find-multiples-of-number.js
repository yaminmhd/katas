function findMultiples(integer, limit) {
  //your code here
  //create empty array
  var array = [];

  var count = 1;
  for(var i = integer; i<=limit; i++){
    var temp = integer*count;
    if((temp) % i ===0){
      array.push(i);
      count++;
    }
  }
  return array;
}