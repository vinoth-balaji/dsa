var a = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

let i = 0,
  j = a[0].length - 1;
let count = 0;
while (i < a.length && j >= 0) {
  if (a[i][j] == 1) j--;
  else {
    count += j + 1;
    i++;
  }
}
console.log(count);
