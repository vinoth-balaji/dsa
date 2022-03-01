var permutations = function (cb, tb, items, ssf, ts, asf) {
  if (cb > tb) {
    // console.log(ssf, asf);
    if (ssf == ts) {
      console.log(asf);
    }
    return;
  }

  for (let i = 0; i < tb; i++) {
    if (items[i] == 0) {
      items[i] = 1;
      permutations(cb + 1, tb, items, ssf + 1, ts, asf + (i + 1));
      items[i] = 0;
    }
  }
  permutations(cb + 1, tb, items, ssf, ts, asf + 0);
};

console.log(permutations(1, 3, [0, 0], 0, 2, ""));
