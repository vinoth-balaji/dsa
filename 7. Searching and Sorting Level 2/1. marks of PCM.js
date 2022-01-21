let marks = [
  [9, 5, 9, 8, 5],
  [3, 4, 3, 7, 6],
  [15, 10, 11, 13, 12],
];

let for_marks = [];
for (let i = 0; i < marks[0].length; i++) {
  for_marks.push([marks[0][i], marks[1][i], marks[2][i]]);
}

for_marks.sort((a, b) => {
  if (a[0] != b[0]) return a[0] - b[0];
  else if (a[1] != b[1]) return b[1] - a[1];
  else return a[2] - b[2];
});

for (let i = 0; i < for_marks.length; i++) {
  marks[0][i] = for_marks[i][0];
  marks[1][i] = for_marks[i][1];
  marks[2][i] = for_marks[i][2];
}

console.log(marks);
