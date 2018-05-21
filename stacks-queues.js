

const Stack = require('./stack');
const Queue = require('./queue');

const stack1 = new Stack(1, 2, 3, 4, 5);
const stack2 = new Stack(2, 4, 6, 8, 10);
//stack1.push(6);
//stack1.pop();
//stack2.push(12);
//console.log(stack1.items);
//console.log(`Stack 1 items: ${stack1.items}`);
//console.log(`Stack 2 items: ${stack2.items}`);

 const queue = new Queue();
 queue.enqueue(1);
 queue.enqueue(2);
 queue.dequeue();
 queue.enqueue(3);
 queue.enqueue(4);
 queue.dequeue();

console.log(`Incoming: ${queue.incoming.items}`);
console.log(`Outgoing: ${queue.outgoing.items}`);
