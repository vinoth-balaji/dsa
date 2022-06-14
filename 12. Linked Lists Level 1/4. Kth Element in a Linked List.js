var LinkedList = require("./1. Linked List Basic Operations");

LinkedList.prototype.kthElem = function (k) {
  let slow = this.head;
  let fast = this.head;
  for (let i = 0; i <= k; i++) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  console.log(slow.data);
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
ll.kthElem(3);

// console.log(ll);
