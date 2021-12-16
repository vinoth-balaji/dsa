let a = [9, 3, 8, 7, 6, 2, 3];

let i = 0,
  j = 0;

for (i; i < a.length; ) {
  if (a[i] % 2 == 1) {
    i++;
  } else {
    [a[i], a[j]] = [a[j], a[i]];
    i++;
    j++;
  }
}

console.log(a);
