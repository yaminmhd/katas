// Implement the method length, which accepts a linked list (head), and returns the length of the list.

// For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.

function length(head) {
  if(head === null){
    return 0
  }
  //define count
  let count = 0;
  while (head != null){
    count ++;
    head=head.next;
  }
  return count
}

module.exports = length;
