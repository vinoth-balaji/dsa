let a = [3, 0, 1, 2, 5, 4, 8, 6, 7];

let chunks = 0;
let max = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] > max) max = a[i];

  if (i == max) chunks++;
}

console.log(chunks);
