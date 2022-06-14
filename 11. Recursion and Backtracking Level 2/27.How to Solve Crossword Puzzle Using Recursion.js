const crossword = function (grid, words, wi) {
  // console.log(grid);

  // console.log(wi);
  if (wi == words.length) {
    console.log(JSON.parse(JSON.stringify(grid)));
    return;
  }

  let word = words[wi];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // console.log(grid[i][j])
      if (grid[i][j] == "-" || grid[i][j] == word[0]) {
        if (canPlaceH(grid, word, i, j)) {
          let bool = placeH(grid, word, i, j);
          // console.log(bool);
          crossword(grid, words, wi + 1);
          unplaceH(grid, word, i, j, bool);
        }
        if (canPlaceV(grid, word, i, j)) {
          let bool = placeV(grid, word, i, j);
          // console.log(bool);
          crossword(grid, words, wi + 1);
          unplaceV(grid, word, i, j, bool);
        }
      }
    }
  }
};

let canPlaceH = function (grid, word, i, j) {
  if (j - 1 >= 0 && grid[i][j - 1] != "+") return false;
  else if (j + word.length < grid[0].length && grid[i][j + word.length] != "+")
    return false;

  if (j + word.length - 1 >= grid[0].length) return false;

  for (let jj = 0; jj < word.length; jj++) {
    if (grid[i][j + jj] == "-" || grid[i][j + jj] == word[jj]) {
    } else return false;
  }

  return true;
};

let canPlaceV = function (grid, word, i, j) {
  if (i - 1 >= 0 && grid[i - 1][j] != "+") return false;
  else if (i + word.length < grid.length && grid[i + word.length][j] != "+")
    return false;

  if (i + word.length - 1 >= grid.length) return false;

  for (let ii = 0; ii < word.length; ii++) {
    if (grid[i + ii][j] == "-" || grid[i + ii][j] == word[ii]) {
    } else return false;
  }

  return true;
};

let placeH = function (grid, word, i, j) {
  let bool = [];

  for (let jj = 0; jj < word.length; jj++) {
    if (grid[i][j + jj] == "-") {
      grid[i][j + jj] = word[jj];
      bool[jj] = true;
    } else {
      bool[jj] = false;
    }
  }
  return bool;
};

let placeV = function (grid, word, i, j) {
  let bool = [];

  for (let ii = 0; ii < word.length; ii++) {
    if (grid[i + ii][j] == "-") {
      grid[i + ii][j] = word[ii];
      bool[ii] = true;
    } else {
      bool[ii] = false;
    }
  }
  return bool;
};

let unplaceH = function (grid, word, i, j, bool) {
  for (let jj = 0; jj < word.length; jj++) {
    if ((bool[jj] = true)) grid[i][j + jj] = "-";
  }
};

let unplaceV = function (grid, word, i, j, bool) {
  for (let ii = 0; ii < word.length; ii++) {
    if ((bool[ii] = true)) grid[i + ii][j] = "-";
  }
};

let grid = [
    ["+++++++++-"],
    ["-++++++++-"],
    ["-------++-"],
    ["-++++++++-"],
    ["-++++++++-"],
    ["-++++-----"],
    ["------+++-"],
    ["-++++++++-"],
    ["+---------"],
    ["++++++++++"],
  ],
  words = ["GEOGRAPHY", "CIVICS", "MATHS", "HISTORY", "CHEMISTRY", "PHYSICS"];

for (let g in grid) {
  grid[g] = grid[g][0].split("");
}
console.log(crossword(grid, words, 0));
