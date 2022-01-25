let a = [1, 4, 5, 7, 6, 2, 4];
let max = 0;

let steps = 0;
for (let i = 0; i < a.length - 1; i++) {
  if (a[i] <= a[i + 1]) {
    steps++;
  } else {
    max = Math.max(max, steps);
    steps = 0;
  }
}

console.log(max);
