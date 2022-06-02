import { Node } from "./node";

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    // Check the params
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const newNode = new Node(value);
    let counter = 0;
    let currentNode = this.head;
    while(currentNode !== null) {
      if(counter === index - 1){
        let prevNode = currentNode;
        let nextNode = currentNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return this.printList();
      }
      counter++;
      currentNode = currentNode.next;
    }

  }

  remove(index) {
    // Check Params
    
    let currentNode = this.head;
    let counter = 0;
    while(currentNode !== null) {
      if(counter === index - 1){
        currentNode.next = currentNode.next.next;
        this.length--;
        return this.printList();
      }
      counter++;
      currentNode = currentNode.next;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let nextNode = this.head;

    // Loop through linkedlist
    while (current !== null) {
      nextNode = nextNode.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next
    }
    return array;
    
  }
}
