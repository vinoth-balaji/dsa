var LinkedList = require("./1. Linked List Basic Operations");

LinkedList.prototype.reversePointer = function () {
  let prev = null;
  let curr = this.head;

  while (curr) {
    let temp = curr.next;

    curr.next = prev;
    prev = curr;

    curr = temp;
  }
  [this.head, this.tail] = [this.tail, this.head];
};

let ll = new LinkedList();
ll.addLast(10);
ll.addLast(20);
ll.addLast(230);
ll.addLast(100);
ll.addLast(120);
ll.addLast(200);
ll.addLast(30);
ll.printData();
ll.reversePointer();
ll.printData();

// console.log(ll);
