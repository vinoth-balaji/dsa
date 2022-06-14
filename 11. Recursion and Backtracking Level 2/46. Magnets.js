var magnets = function (mag, top, left, right, bottom, r, c, ans) {
  if (c >= mag[0].length) {
    c = 0;
    r += 1;
  }

  if (r >= mag.length) {
    if (isValidAns(ans, top, left, right, bottom)) {
      for (let i = 0; i < ans.length; i++) {
        console.log(ans[i].join(" "));
      }

      return true;
    }
    return false;
  }

  if (mag[r][c] == "L") {
    if (
      isSafe(ans, top, left, right, bottom, r, c, "+") &&
      isSafe(ans, top, left, right, bottom, r, c + 1, "-")
    ) {
      ans[r][c] = "+";
      ans[r][c + 1] = "-";
      if (magnets(mag, top, left, right, bottom, r, c + 2, ans)) {
        return true;
      }
      ans[r][c] = "X";
      ans[r][c + 1] = "X";
    }
    if (
      isSafe(ans, top, left, right, bottom, r, c, "-") &&
      isSafe(ans, top, left, right, bottom, r, c + 1, "+")
    ) {
      ans[r][c] = "-";
      ans[r][c + 1] = "+";
      if (magnets(mag, top, left, right, bottom, r, c + 2, ans)) {
        return true;
      }
      ans[r][c] = "X";
      ans[r][c + 1] = "X";
    }
  } else if (mag[r][c] == "T") {
    if (
      isSafe(ans, top, left, right, bottom, r, c, "+") &&
      isSafe(ans, top, left, right, bottom, r + 1, c, "-")
    ) {
      ans[r][c] = "+";
      ans[r + 1][c] = "-";
      if (magnets(mag, top, left, right, bottom, r, c + 1, ans)) {
        return true;
      }
      ans[r][c] = "X";
      ans[r + 1][c] = "X";
    }
    if (
      isSafe(ans, top, left, right, bottom, r, c, "-") &&
      isSafe(ans, top, left, right, bottom, r + 1, c, "+")
    ) {
      ans[r][c] = "-";
      ans[r + 1][c] = "+";
      if (magnets(mag, top, left, right, bottom, r, c + 1, ans)) {
        return true;
      }
      ans[r][c] = "X";
      ans[r + 1][c] = "X";
    }
  }

  if (magnets(mag, top, left, right, bottom, r, c + 1, ans)) return true;

  return false;
};

var isSafe = function (ans, top, left, right, bottom, r, c, symbol) {
  if (
    (r - 1 >= 0 && ans[r - 1][c] == symbol) ||
    (r + 1 < ans.length && ans[r + 1][c] == symbol) ||
    (c - 1 >= 0 && ans[r][c - 1] == symbol) ||
    (c + 1 < ans[0].length && ans[r][c + 1] == symbol)
  ) {
    return false;
  }

  if (symbol == "+") {
    let rc = checkRowCounter(ans, left, r, symbol);
    let cc = checkColCounter(ans, top, c, symbol);

    if (left[r] != -1 && rc >= left[r]) return false;
    if (top[c] != -1 && cc >= top[c]) return false;
  } else if (symbol == "-") {
    let rc = checkRowCounter(ans, right, r, symbol);
    let cc = checkColCounter(ans, bottom, c, symbol);

    if (right[r] != -1 && rc >= right[r]) return false;
    if (bottom[c] != -1 && cc >= bottom[c]) return false;
  }

  return true;
};

var checkRowCounter = function (ans, checkArray, r, symbol) {
  let counter = 0;

  for (let i = 0; i < ans[0].length; i++) {
    if (ans[r][i] == symbol) counter++;
  }

  return counter;
};

var checkColCounter = function (ans, checkArray, c, symbol) {
  let counter = 0;

  for (let i = 0; i < ans.length; i++) {
    if (ans[i][c] == symbol) counter++;
  }

  return counter;
};

var isValidAns = function (ans, top, left, right, bottom) {
  // console.log('---------------------------------');
  // for (let i = 0; i < ans.length; i++) {
  //   console.log(ans[i].join(' '));
  // }

  for (let i = 0; i < top.length; i++) {
    let cc = checkColCounter(ans, top, i, "+");
    if (top[i] != -1 && top[i] != cc) return false;
  }
  for (let i = 0; i < left.length; i++) {
    let rc = checkRowCounter(ans, left, i, "+");
    if (left[i] != -1 && left[i] != rc) return false;
  }

  for (let i = 0; i < bottom.length; i++) {
    let cc = checkColCounter(ans, bottom, i, "-");
    if (bottom[i] != -1 && bottom[i] != cc) return false;
  }
  for (let i = 0; i < right.length; i++) {
    let rc = checkRowCounter(ans, right, i, "-");
    if (right[i] != -1 && right[i] != rc) return false;
  }
  return true;
};

// let mag = [
//     ['T', 'T', 'T'],
//     ['B', 'B', 'B'],
//     ['T', 'L', 'R'],
//     ['B', 'L', 'R'],
//   ],
//   top = [2, -1, -1],
//   left = [-1, -1, 2, -1],
//   right = [0, -1, -1, -1],
//   bottom = [-1, -1, 2],
//   ans = [];

let mag = [
    ["L", "R", "L", "R", "T", "T"],
    ["L", "R", "L", "R", "B", "B"],
    ["T", "T", "T", "T", "L", "R"],
    ["B", "B", "B", "B", "T", "T"],
    ["L", "R", "L", "R", "B", "B"],
  ],
  top = [1, -1, -1, 2, 1, -1],
  left = [2, 3, -1, -1, -1],
  right = [-1, -1, -1, 1, -1],
  bottom = [2, -1, -1, 2, -1, 3],
  ans = [];

for (let i = 0; i < mag.length; i++) {
  ans[i] = new Array(mag[0].length).fill("X");
}

magnets(mag, top, left, right, bottom, 0, 0, ans);
