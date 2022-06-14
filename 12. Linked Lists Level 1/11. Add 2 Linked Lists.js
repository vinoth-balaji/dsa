var LinkedList = require("./1. Linked List Basic Operations");

add2LLHelper = function (LL1, LL1Size, LL2, LL2Size, res) {
  if (!(LL1 && LL2)) {
    return 0;
  }

  let oc, data;
  if (LL1Size > LL2Size) {
    oc = add2LLHelper(LL1.next, LL1Size - 1, LL2, LL2Size, res);
    data = oc + LL1.data;
  } else if (LL1Size < LL2Size) {
    oc = add2LLHelper(LL1, LL1Size, LL2.next, LL2Size - 1, res);
    data = oc + LL2.data;
  } else {
    oc = add2LLHelper(LL1.next, LL1Size - 1, LL2.next, LL2Size - 1, res);
    data = oc + LL1.data + LL2.data;
  }

  nd = data % 10;
  nc = parseInt(data / 10);
  res.addFirst(nd);
  return nc;
};

add2LL = function (LL1, LL2) {
  let res = new LinkedList();
  let oc = add2LLHelper(LL1.head, LL1.size, LL2.head, LL2.size, res);
  if (oc) {
    res.addFirst(oc);
  }
  return res;
};

let ll1 = new LinkedList();
ll1.addLast(9);
ll1.addLast(8);
ll1.addLast(7);

let ll2 = new LinkedList();
ll2.addLast(6);
ll2.addLast(5);

add2LL(ll1, ll2).printData();
