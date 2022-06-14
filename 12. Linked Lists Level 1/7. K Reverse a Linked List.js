var LinkedList = require("./1. Linked List Basic Operations");

LinkedList.prototype.kReverse = function (k) {
  let prev = null;
  let curr = this.head;

  while (this.size) {
    let LL = new LinkedList();
    for (let i = 0; i < k && this.size; i++) {
      let val = this.getFirst();
      this.removeFirst();
      LL.addFirst(val);
    }
    if (!prev) {
      prev = LL;
    } else {
      prev.tail.next = LL.head;
      prev.tail = LL.tail;
      prev.size += LL.size;
    }
  }

  this.size = prev.size;
  this.head = prev.head;
  this.tail = prev.tail;
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
ll.kReverse(3);
ll.printData();
