let n = 6;
let jumps = [3, 3, 0, 2, 2, 3];

let stairsJumps = [];
stairsJumps[n] = 0;

for (let i = n - 1; i >= 0; i--) {
  if (jumps[i]) {
    let min = Number.POSITIVE_INFINITY;
    for (let j = 1; j <= jumps[i] && i + j <= n; j++) {
      if (stairsJumps[i + j] != null) {
        min = Math.min(min, stairsJumps[i + j]);
      }

      if (min != Number.POSITIVE_INFINITY) stairsJumps[i] = min + 1;
    }
  }
}

console.log(stairsJumps[0]);
