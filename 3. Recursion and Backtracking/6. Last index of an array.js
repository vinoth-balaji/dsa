let a = [2, 3, 4, 5, 2, 3, 6, 7, 8, 3];

function lastIndex(a, i, d) {
  if (i == a.length) return -1;

  let index = lastIndex(a, i + 1, d);

  if (index == -1 && a[i] == d) return i;
  return index;
}

console.log(lastIndex(a, 0, 2));
