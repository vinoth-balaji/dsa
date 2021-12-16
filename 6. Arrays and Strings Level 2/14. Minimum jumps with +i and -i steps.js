let x = 14;

let jumps = 1;
let sum = 0;

while (sum < x) {
  sum += jumps;
  jumps++;
}

if ((sum - x) % 2 == 0) {
  console.log(jumps - 1);
} else {
  if ((sum - x + jumps) % 2 == 0) console.log(jumps);
  else console.log(jumps + 1);
}
