let l = 6;

let count_B_prev = 1;
let count_S_prev = 1;
let count_B_curr = 1;
let count_S_curr = 1;

for (let i = 2; i <= l; i++) {
  count_S_curr = count_B_prev + count_S_prev;
  count_B_curr = count_S_prev;

  count_S_prev = count_S_curr;
  count_B_prev = count_B_curr;
}

// for one side
let one_side = count_B_curr + count_S_curr;

//for both sides
console.log(one_side * one_side);
