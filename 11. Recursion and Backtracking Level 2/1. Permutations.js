var permutations = function (values, comb_items, curr_size) {
  if (curr_size > comb_items) {
    console.log(values.join(""));
    return;
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i] == 0) {
      values[i] = curr_size;
      permutations(values, comb_items, curr_size + 1);
      values[i] = 0;
    }
  }
};

let values = [0, 0, 0, 0];
console.log(permutations(values, 2, 1));
