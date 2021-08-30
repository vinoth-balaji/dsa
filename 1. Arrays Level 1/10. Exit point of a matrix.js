let a = [
  [1, 0, 0],
  [0, 0, 1],
  [1, 1, 0],
];

let dir = 0;
let i = 0;
let j = 0;

while (true) {
  dir = (dir + a[i][j]) % 4;

  if (dir == 0) {
    j++;
  } else if (dir == 1) {
    i++;
  } else if (dir == 2) {
    j--;
  } else {
    i--;
  }

  if (i < 0) {
    console.log(i + 1, j);
    break;
  } else if (j < 0) {
    console.log(i, j + 1);
    break;
  } else if (i > a.length - 1) {
    console.log(i--, j);
    break;
  } else if (j > a[0].length - 1) {
    console.log(i, j--);
    break;
  }
}
