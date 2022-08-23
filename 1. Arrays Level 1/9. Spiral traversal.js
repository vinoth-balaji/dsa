// let a = [
//   [11, 12, 13, 14, 15, 16, 17],
//   [21, 22, 23, 24, 25, 26, 27],
//   [31, 32, 33, 34, 35, 36, 37],
//   [41, 42, 43, 44, 45, 46, 47],
//   [51, 52, 53, 54, 55, 56, 57],
// ];

// let minr = 0;
// let minc = 0;
// let maxr = a.length - 1;
// let maxc = a[0].length - 1;
// let cnt = a.length * a[0].length;
// while (cnt > 0) {
//   // left box
//   for (let i = minr, j = minc; i <= maxr && cnt > 0; i++) {
//     console.log(a[i][j]);
//     cnt--;
//   }
//   minc++; // to avoid duplicates or corners

//   //bottom box
//   for (let i = maxr, j = minc; j <= maxc && cnt > 0; j++) {
//     console.log(a[i][j]);
//     cnt--;
//   }
//   maxr--; // to avoid duplicates or corners

//   // right box
//   for (let i = maxr, j = maxc; i >= minr && cnt > 0; i--) {
//     console.log(a[i][j]);
//     cnt--;
//   }
//   maxc--; // to avoid duplicates or corners

//   // top box
//   for (let i = minr, j = maxc; j >= minc && cnt > 0; j--) {
//     console.log(a[i][j]);
//     cnt--;
//   }
//   minr++; // to avoid duplicates or corners
// }

spiral = function (a) {
  let iStart = 0,
    iEnd = a.length - 1,
    jStart = 0,
    jEnd = a[0].length - 1;
  let count = 0;

  while (count <= (a[0].length - 1) * (a.length - 1)) {
    for (let i = iStart, j = jStart; j <= jEnd; j++) {
      console.log(a[i][j]);
      count++;
    }
    iStart++;

    for (let i = iStart, j = jEnd; i <= iEnd; i++) {
      // console.log(i, j);
      console.log(a[i][j]);
      count++;
    }
    jEnd--;

    for (let i = iEnd, j = jEnd; j >= jStart; j--) {
      console.log(a[i][j]);
      count++;
    }
    iEnd--;

    for (let i = iEnd, j = jStart; i >= iStart; i--) {
      console.log(a[i][j]);
      count++;
    }
    jStart++;
  }
};

let a = [
  [11, 12, 13, 14, 15, 16, 17],
  [21, 22, 23, 24, 25, 26, 27],
  [31, 32, 33, 34, 35, 36, 37],
  [41, 42, 43, 44, 45, 46, 47],
  [51, 52, 53, 54, 55, 56, 57],
];
console.log(spiral(a));
