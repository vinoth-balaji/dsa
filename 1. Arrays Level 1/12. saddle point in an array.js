let a = [
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
  [41, 42, 43, 44],
];

for (let i = 0; i < a.length; i++) {
  let flag = true;
  let sm = 0;

  for (let j = 0; j < a[i].length; j++) {
    if (a[i][j] < a[i][sm]) sm = j;
  }

  //sm gives column indef on which the column has to be searched

  for (let k = 0; k < a.length; k++) {
    if (a[k][sm] > a[i][sm]) flag = false;
  }
  if (flag) console.log(a[i][sm]);
}
