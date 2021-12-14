let l = 6;

let count_0_prev = 1;
let count_1_prev = 1;
let count_0_curr = 1;
let count_1_curr = 1;

for (let i = 2; i <= l; i++) {
  count_1_curr = count_0_prev + count_1_prev;
  count_0_curr = count_1_prev;

  count_1_prev = count_1_curr;
  count_0_prev = count_0_curr;
}

console.log(count_0_curr + count_1_curr);

//or

let count_0 = [];
let count_1 = [];

count_0[0] = 0;
count_0[1] = 1;
count_1[0] = 0;
count_1[1] = 1;

for (let i = 2; i <= l; i++) {
  count_1[i] = count_1[i - 1] + count_0[i - 1];
  count_0[i] = count_1[i - 1];
}

console.log(count_1[l] + count_0[l]);
