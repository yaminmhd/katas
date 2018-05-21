const Stack = require("./stack");

class Queue {
  constructor(...data) {
    this.incoming = new Stack(...data);
    this.outgoing = new Stack();
  }

  enqueue(item) {
    this.incoming.push(item);
    //return this.stack1.items;
  }

  dequeue() {
    if (this.outgoing.isEmpty()) {
      while (!this.incoming.isEmpty()) {
        let popItem = this.incoming.pop();
        this.outgoing.push(popItem);
      }
    }
    return this.outgoing.pop();
  }
}

module.exports = Queue;
