/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.container = [];
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    this.container.unshift(newNode);
    if (this.container.length === 1) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
    }
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    const removed = this.container[0];
    this.container.shift();
    this.size -= 1;
    return removed.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.container[0].val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.container.length === 0;
  }
}

module.exports = Stack;
