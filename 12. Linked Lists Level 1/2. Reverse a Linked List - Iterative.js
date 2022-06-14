var LinkedList = require("./1. Linked List Basic Operations");

LinkedList.prototype.reverseIterative = function () {
  let left = 0,
    right = this.size - 1;

  while (left < right) {
    let leftNode = this.getNodeAt(left);
    let rightNode = this.getNodeAt(right);

    [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data];

    left++;
    right--;
  }
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
ll.reverseIterative();
ll.printData();

// console.log(ll);
