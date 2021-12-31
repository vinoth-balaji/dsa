let a = [3, 5, 2, 1, 6, 4];
a = a.sort((a, b) => a - b);
let b = [];

let j = a.length - 1;
for (let i = 1; i <= a.length - 1; i += 2) {
  if (i % 2 == 1) {
    b[i] = a[j];
    j--;
  }
}

for (let i = 0; i <= a.length - 1; i += 2) {
  if (i % 2 == 0) {
    b[i] = a[j];
    j--;
  }
}

console.log(b);
