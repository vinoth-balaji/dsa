var a = [-3, -3, -2, -1, 1, 3, 4, 5, 5];

let i = 0,
  j = a.length - 1,
  prev = Number.NEGATIVE_INFINITY,
  next = Number.POSITIVE_INFINITY,
  count = 0;

while (i <= j) {
  if (Math.abs(a[i]) == Math.abs(a[j])) {
    if (prev != a[i] && next != a[j]) count++;
    prev = a[i];
    next = a[j];
    i++;
    j--;
  } else if (Math.abs(a[i]) > Math.abs(a[j])) {
    if (prev != a[i]) count++;
    prev = a[i];
    i++;
  } else {
    if (next != a[j]) count++;
    next = a[j];
    j--;
  }
}
console.log(count);
