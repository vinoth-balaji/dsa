class Node {
  constructor(data) {
    this.data = data;
  }
  data;
  next = null;
}
class LinkedList {
  size = 0;
  head = null;
  tail = null;

  newNode(data) {
    return new Node(data);
  }

  addLast(data) {
    let temp = new Node(data);
    if (this.size == 0) {
      this.head = temp;
      this.tail = temp;
    } else {
      this.tail.next = temp;
      this.tail = temp;
    }

    this.size++;
  }

  addFirst(data) {
    let temp = new Node(data);
    if (this.size == 0) {
      this.head = temp;
      this.tail = temp;
    } else {
      temp.next = this.head;
      this.head = temp;
    }

    this.size++;
  }

  addAt(index, data) {
    if (index < 0 || index > this.size) {
      console.log("Invalid LL Index");
      return;
    } else if (index == 0) addFirst(data);
    else if (index == this.size) addLast(data);

    let i = 0;
    let temp = this.head;
    while (i != index - 1) {
      temp = temp.next;
      i++;
    }
    let d = new Node(data);
    d.next = temp.next;
    temp.next = d;
    this.size++;
  }

  removeFirst() {
    if (this.size == 0) {
      console.log("Empty LL");
      return;
    } else if (this.size == 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  removeLast() {
    if (this.size == 0) {
      console.log("Empty LL");
      return;
    } else if (this.size == 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }

    let i = 1;
    let temp = this.head;
    while (i != this.size - 1) {
      temp = temp.next;
      i++;
    }

    temp.next = null;
    this.tail = temp;
    this.size--;
  }

  printData() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data, "-->");
      temp = temp.next;
    }
    console.log("----------");
  }

  getFirst() {
    if (this.size == 0) {
      console.log("Empty LL");
      return;
    }

    console.log(this.head.data);
    return this.head.data;
  }

  getLast() {
    if (this.size == 0) {
      console.log("Empty LL");
      return;
    }
    console.log(this.tail.data);
    return this.tail.data;
  }

  getAt(index) {
    if (this.size == 0) {
      console.log("Empty LL");
      return;
    } else if (index < 0 || index > this.size) {
      console.log("Invalid LL Index");
      return;
    }
    let i = 0;
    let temp = this.head;
    while (i != index) {
      temp = temp.next;
      i++;
    }
    console.log(temp.data);
    return temp.data;
  }

  getNodeAt(index) {
    if (this.size == 0) {
      console.log("Empty LL");
      return;
    } else if (index < 0 || index > this.size) {
      console.log("Invalid LL Index");
      return;
    }
    let i = 0;
    let temp = this.head;
    while (i != index) {
      temp = temp.next;
      i++;
    }
    return temp;
  }

  removeAt(index) {
    if (this.size == 0) {
      console.log("Empty LL");
      return;
    } else if (index < 0 || index > this.size) {
      console.log("Invalid LL Index");
      return;
    } else if (index == 0) removeFirst();
    else if (index == this.size - 1) removeLast();

    let i = 0;
    let temp = this.head;
    while (i != index - 1) {
      temp = temp.next;
      i++;
    }

    temp.next = temp.next.next;
    this.size--;
  }

  getSize() {
    return this.size;
  }
}

// LinkedList as a Stack
// 1. Add Last, Remove Last, Get Last   - Remove Last is O(n)
// 2. Add First, Remove First, Get First // O(1)

// Linked List as a Queue
// 1. Add First, Remove Last, Get First - Remove Last is O(n)
// 2. Add Last, Remove First, Get Last   // O(1)

// let ll = new LinkedList();
// ll.addLast(10);
// ll.addLast(20);
// ll.addLast(230);
// ll.addLast(100);
// ll.printData();
// ll.getAt(2);
// ll.getAt(20);
// ll.addFirst(1);
// ll.printData();
// ll.addAt(2, 40);
// ll.printData();
// ll.removeLast();
// ll.printData();

// console.log(ll);

module.exports = LinkedList;
