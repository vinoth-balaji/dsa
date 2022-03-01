var combinations = function (values, comb_items, comb_size, curr_size) {
  if (curr_size > values.length - 1) {
    if (comb_size == comb_items) {
      console.log(values.join(""));
    }
    return;
  }

  combinations(values, comb_items, comb_size, curr_size + 1);
  values[curr_size] = "i";
  combinations(values, comb_items, comb_size + 1, curr_size + 1);
  values[curr_size] = 0;
};

let values = [0, 0, 0, 0];
console.log(combinations(values, 2, 0, 0));
