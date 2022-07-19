class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  
  dequeue() {
    if(!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    } else {
      const nextNode = this.first.next;
      this.first.next = nextNode.next;
      this.first = nextNode;
    }
    this.length--;
    return this;
  }
}