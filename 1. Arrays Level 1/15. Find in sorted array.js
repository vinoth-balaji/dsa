let a = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let key = 10;
let i = 0,
  j = a[0].length - 1;

while (i < a.length && j >= 0) {
  if (key == a[i][j]) {
    console.log(key, i, j);
    break;
  } else if (key > a[i][j]) i++;
  else j--;
}

if (i >= a.length || j <= 0) {
  console.log("Not found");
}
