let a = [
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
  [41, 42, 43, 44],
];

function wave(a) {
  for (let i = 0; i < a[0].length; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < a.length; j++) {
        console.log(a[j][i]);
      }
    } else {
      for (let j = a.length - 1; j >= 0; j--) {
        console.log(a[j][i]);
      }
    }
  }
}

wave(a);
