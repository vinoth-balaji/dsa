let a = '6537421';
let n = a.split('');

let i = n.length - 1;
for (i; i >= 0; i--) {
  if (i - 1 >= 0) {
    if (n[i - 1] < n[i]) {
      i--;
      break;
    }
  }
}
if (i != -1) {
  // i represent the index from where ew can get the just next greater element
  // j represent the index where we have to swap i and j
  let j = n.length - 1;
  for (j; j >= 0; j--) {
    if (n[j] > n[i]) {
      [n[j], n[i]] = [n[i], n[j]];
      break;
    }
  }

  for (i = i + 1, j = n.length - 1; i <= j && j >= 0; i++, j--) {
    [n[i], n[j]] = [n[j], n[i]];
  }

  console.log(n.join(''));
} else {
  console.log(i);
}
