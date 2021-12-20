let a = [3, 5, 2, 1, 6, 4];

for (let i = 0; i < a.length - 1; i++) {
  if (i % 2 == 0 && a[i + 1] < a[i]) {
    [a[i], a[i + 1]] = [a[i + 1], a[i]];
  } else if (i % 2 == 1 && a[i + 1] > a[i]) {
    [a[i], a[i + 1]] = [a[i + 1], a[i]];
  }
}

console.log(a);
