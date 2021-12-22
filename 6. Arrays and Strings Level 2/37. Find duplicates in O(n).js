let a = [4, 3, 2, 7, 8, 2, 3, 1];

let duplicates = [];
for (let i = 0; i < a.length; i++) {
  let idx = Math.abs(a[i]);

  let idxMinus1 = a[idx - 1];
  if (idxMinus1 < 0) duplicates.push(idx);

  a[idx - 1] = -Math.abs(idxMinus1);
}

console.log(duplicates);
