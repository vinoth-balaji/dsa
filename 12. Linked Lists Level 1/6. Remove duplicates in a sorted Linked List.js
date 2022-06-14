var LinkedList = require("./1. Linked List Basic Operations");

LinkedList.prototype.removeDuplicates = function () {
  let temp = this.head;
  let LL = new LinkedList();
  while (temp) {
    let data = this.newNode(temp.data);

    if (LL.size == 0) {
      LL.addLast(data.data);
    } else {
      last = LL.getLast();
      if (last != data.data) {
        LL.addLast(data.data);
      }
    }

    temp = temp.next;
  }
  LL.printData();
};

LinkedList.prototype.removeDuplicatesConstantSpace = function () {
  let LL = new LinkedList();
  while (this.size > 0) {
    let val = this.getFirst();
    let data = this.removeFirst();

    if (LL.size == 0 || LL.tail.data != val) {
      LL.addLast(val);
    }
  }
  LL.printData();
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
ll.removeDuplicates();
