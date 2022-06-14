var LinkedList = require("./1. Linked List Basic Operations");

LinkedList.prototype.middleElem = function () {
  let slow = this.head;
  let fast = this.head;

  // for        odd          even
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //   slow is moving one step
  //   fast is moving 2 step

  console.log(slow.data);
};

let ll = new LinkedList();
ll.addLast(10);
ll.addLast(20);
ll.addLast(230);
ll.addLast(100);
ll.addLast(120);
ll.addLast(200);
// ll.addLast(30);
ll.printData();
ll.middleElem(3);

// console.log(ll);
