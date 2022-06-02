import { Node } from "./node";

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
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
    while (currentNode !== null) {
      if (counter === index - 1) {
        let prevNode = currentNode;
        let nextNode = currentNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        newNode.prev = prevNode;
        nextNode.prev = newNode;
        this.length++;
        return this.printList();
      }
      counter++;
      currentNode = currentNode.next;
    }
  }

  remove(index) {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode !== null) {
      if (counter === index - 1) {
        let newNextNode = currentNode.next.next;
        currentNode.next = newNextNode;
        newNextNode.prev = currentNode;
        this.length--;
        return this.printList();
      }
      counter++;
      currentNode = currentNode.next;
    }
  }
}
