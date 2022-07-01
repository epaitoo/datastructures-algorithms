class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    if (this.data.length === 0) return null;
    return this.data[this.data.length - 1];
  }

  push(value) {
    return this.data.push(value);
  }

  pop() {
    if (this.data.length === 0) return null;
    return this.data.pop();
  }
}