class Stack {
  constructor(...values) {
    this.items = values;
  }

  isEmpty(){
    return this.items.length === 0;
  }

  push(element) {
    this.items.push(element);
    //return this.items;
  }

  pop() {
    if(this.isEmpty()){
      throw new Error("Cannot pop from an empty stack");
    }
    return this.items.pop();
    //return this.items;
  }
}

module.exports = Stack;