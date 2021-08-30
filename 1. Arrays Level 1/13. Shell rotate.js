let a = [
  [11, 12, 13, 14, 15, 16],
  [21, 22, 23, 24, 25, 26],
  [31, 32, 33, 34, 35, 36],
  [41, 42, 43, 44, 45, 46],
  [51, 52, 53, 54, 55, 56],
  [61, 62, 63, 64, 65, 66],
];
let s = 2;
let r = 2;

function getShellData(a, s) {
  let minc = s - 1;
  let minr = s - 1;
  let maxr = a.length - s;
  let maxc = a[0].length - s;

  let size = 2 * (maxr - minr + 1) + 2 * (maxc - minc) - 4;
  let array = [];
  let counter = 0;
  //left shell
  for (let i = minr, j = minc; i <= maxr; i++) {
    array[counter] = a[i][j];
    counter++;
  }
  minc++;

  // bottom shell
  for (let i = maxr, j = minc; j <= maxc; j++) {
    array[counter] = a[i][j];
    counter++;
  }
  maxr--;

  // right shell
  for (let i = maxr, j = maxc; i >= minr; i--) {
    array[counter] = a[i][j];
    counter++;
  }
  maxc--;

  // top shell
  for (let i = minr, j = maxc; j >= minc; j--) {
    array[counter] = a[i][j];
    counter++;
  }

  return array;
}

function rotateArray(a, r) {
  r = r % a.length;
  if (r < 0) {
    r = a.length + r;
  }
  reverse(a, 0, a.length - 1 - r);
  reverse(a, a.length - r, a.length - 1);
  reverse(a, 0, a.length - 1);
}

function reverse(a, s, e) {
  for (let i = s, j = e; i < j; i++, j--) {
    [a[i], a[j]] = [a[j], a[i]];
  }
}

function assignBack(a, s, array) {
  let minc = s - 1;
  let minr = s - 1;
  let maxr = a.length - s;
  let maxc = a[0].length - s;

  let counter = 0;
  //left shell
  for (let i = minr, j = minc; i <= maxr; i++) {
    a[i][j] = array[counter];
    counter++;
  }
  minc++;

  // bottom shell
  for (let i = maxr, j = minc; j <= maxc; j++) {
    a[i][j] = array[counter];
    counter++;
  }
  maxr--;

  // right shell
  for (let i = maxr, j = maxc; i >= minr; i--) {
    a[i][j] = array[counter];
    counter++;
  }
  maxc--;

  // top shell
  for (let i = minr, j = maxc; j >= minc; j--) {
    a[i][j] = array[counter];
    counter++;
  }
}

let array = getShellData(a, s);
rotateArray(array, r);
assignBack(a, s, array);
console.log(a);
