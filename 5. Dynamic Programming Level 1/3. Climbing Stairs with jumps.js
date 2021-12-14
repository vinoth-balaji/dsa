let n = 6;
let jumps = [3, 3, 0, 2, 2, 3];

let stairsJumps = [0, 0, 0, 0, 0, 0, 0];
stairsJumps[n] = 1;

for (let i = n - 1; i >= 0; i--) {
  for (let j = 1; j <= jumps[i] && i + j <= n; j++) {
    stairsJumps[i] += stairsJumps[i + j];
  }
}

console.log(stairsJumps[0]);
