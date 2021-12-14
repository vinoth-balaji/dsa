let a = [2, 3, 4, 5, 2, 3, 6, 7, 8, 3];

function firstIndex(a, i, d) {
  if (i == a.length) return -1;
  else if (a[i] == d) return i;
  else return firstIndex(a, i + 1, d);
}

console.log(firstIndex(a, 0, 3));
