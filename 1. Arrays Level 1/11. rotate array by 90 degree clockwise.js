let a = [
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"],
];

for (let i = 0; i < a.length; i++) {
  for (let j = 1; j < a[i].length; j++) {
    [a[i][j], a[j][i]] = [a[j][i], a[i][j]];
  }
}

for (let i = 0; i < a.length; i++) {
  let l = 0;
  let r = a[0].length - 1;
  while (l < r) {
    [a[i][l], a[i][r]] = [a[i][r], a[i][l]];
    l++;
    r--;
  }
}

console.log(a);
