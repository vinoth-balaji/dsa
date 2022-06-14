var LinkedList = require("./1. Linked List Basic Operations");

LinkedList.prototype.foldHelper = function (right, floor) {
  if (!right) return;

  this.foldHelper(right.next, floor + 1);
  if (floor > this.size / 2) {
    let temp = this.left.next;
    this.left.next = right;
    right.next = temp;
    this.left = temp;
  } else if (floor == parseInt(this.size / 2)) {
    this.tail = right;
    this.tail.next = null;
  }
};

LinkedList.prototype.left = null;

LinkedList.prototype.fold = function () {
  this.left = this.head;
  this.foldHelper(this.head, 0);
};

let ll = new LinkedList();
ll.addLast("a");
ll.addLast("b");
ll.addLast("c");
ll.addLast("d");
ll.addLast("e");
ll.fold();
ll.printData();
