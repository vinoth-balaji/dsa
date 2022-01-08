let a = [2, 3, 4, 5, 2, 3, 6, 7, 8, 3];

function lastIndex(a, i, d) {
  if (i == a.length) return -1;

  let li = lastIndex(a, i + 1, d);

  // -1 means did not get the element from i+1 to last
  if (li == -1) {
    if (a[i] == d) return i;
    else return -1;
  } else {
    // have found the element after ith pos
    return li;
  }
}

console.log(lastIndex(a, 0, 3));
