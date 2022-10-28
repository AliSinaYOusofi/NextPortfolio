class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedSingle {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      }
  
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.length++;
      return true;
    }
  
    pop() {
      if (!this.head) {
        return null;
      }
  
      if (this.length === 0) {
        return null;
      }
  
      let currentNode = this.head;
      let previous;
  
      while (currentNode.next) {
        previous = currentNode;
        currentNode = currentNode.next;
      }
      return previous.data;
    }
  
    display() {
      if (this.head && this.length) {
        let currentNode = this.head;
        while (currentNode.next) {
          console.log("%d", currentNode.data);
          currentNode = currentNode.next;
        }
      } else return null;
    }
  }

let node = new LinkedSingle();
node.push(10);
node.push(500);