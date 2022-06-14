var LinkedList = require("./1. Linked List Basic Operations");

LinkedList.prototype.checkPalinHelper = function (right) {
  if (!right) return true;

  let res = this.checkPalinHelper(right.next);
  if (!res) return false;
  else if (right.data != this.left.data) return false;
  else {
    this.left = this.left.next;
    return true;
  }
};

LinkedList.prototype.left = null;

LinkedList.prototype.checkPalin = function () {
  this.left = this.head;
  return this.checkPalinHelper(this.head);
};

let ll = new LinkedList();
ll.addLast(2);
ll.addLast(2);
ll.addLast(5);
ll.addLast(2);
ll.addLast(2);
console.log(ll.checkPalin());
