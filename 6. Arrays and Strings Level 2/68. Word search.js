var explore = function (board, i, j, si, word) {
  if (si == word.length) return true;
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return false;
  if (board[i][j] != word[si]) return false;

  let c = word[si];
  board[i][j] = "-1";

  for (let d = 0; d < 4; d++) {
    let ans = explore(board, i + di[d], j + dj[d], si + 1, word);
    if (ans) {
      board[i][j] = c;
      return ans;
    }
  }

  board[i][j] = c;
  return false;
};

var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0]) {
        let ans = explore(board, i, j, 0, word);
        if (ans) return ans;
      }
    }
  }

  return false;
};

let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCCED";

let di = [-1, 0, 1, 0];
let dj = [0, 1, 0, -1];

console.log(exist(board, word));
