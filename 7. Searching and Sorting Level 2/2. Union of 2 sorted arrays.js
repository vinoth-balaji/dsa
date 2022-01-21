let a = [1, 2, 2, 3, 4],
  b = [1, 1, 3, 5];

let i = 0,
  j = 0;
let union = [];
while (i < a.length && j < b.length) {
  if (a[i] == b[j]) {
    if (union.length == 0) union.push(a[i]);
    else if (union[union.length - 1] != a[i]) union.push(a[i]);
    i++;
    j++;
  } else if (a[i] > b[j]) {
    if (union.length == 0) union.push(b[j]);
    else if (union[union.length - 1] != b[j]) union.push(b[j]);
    j++;
  } else {
    if (union.length == 0) union.push(a[i]);
    else if (union[union.length - 1] != a[i]) union.push(a[i]);
    i++;
  }
}

while (i < a.length) {
  if (union[union.length - 1] != a[i]) union.push(a[i]);
  i++;
}
while (j < b.length) {
  if (union[union.length - 1] != b[j]) union.push(b[j]);
  j++;
}

console.log(union);
