var combinations = function (items, visited, comb_size, level) {
  if (level > comb_size) {
    console.log(items.join(""));
    return;
  }

  for (let i = visited; i < items.length; i++) {
    if (items[i] == 0) {
      items[i] = 1;
      combinations(items, visited + 1, comb_size, level + 1);
      items[i] = 0;
    }
  }
};

console.log(combinations([0, 0, 0, 0], 0, 3, 1));
