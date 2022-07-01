class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    // check if the its empty
    if (this.length === 0) {
      // set both the top and bottom as the node
      this.bottom = newNode;
      this.top = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    // check if the its empty
    if (this.top === null) {
      return null;
    }

    if (this.top === this.bottom) {
      return null;
    } 
    this.top = this.top.next;
    this.length --;
    return this;
  }
}