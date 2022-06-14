var LinkedList = require("./1. Linked List Basic Operations");

LinkedList.prototype.printReverse = function (curr) {
  if (!curr) {
    return;
  }

  this.printReverse(curr.next);
  console.log(curr.data);
};

let ll = new LinkedList();
ll.addLast(2);
ll.addLast(2);
ll.addLast(5);
ll.addLast(7);
ll.addLast(7);
ll.addLast(7);
ll.addLast(9);
ll.addLast(11);
ll.printReverse(ll.head);
