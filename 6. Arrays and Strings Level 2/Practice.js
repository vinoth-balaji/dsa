let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ACCED";

let di = [-1, 0, 1, 0];
let dj = [0, 1, 0, -1];
console.log(search(board, word));

function search(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == word[0]) {
        let ans = explore(board, i, j, 0, word);
        if (ans) return ans;
      }
    }
  }

  return false;
}

function explore(board, i, j, ci, word) {
  if (ci >= word.length) return true;
  else if (i >= board.length || j >= board[0].length || i < 0 || j < 0)
    return false;
  else if (board[i][j] != word[ci]) return false;

  let c = board[i][j];
  board[i][j] = -1;
  for (let k = 0; k < 4; k++) {
    let ans = explore(board, i + di[k], j + dj[k], ci + 1, word);
    board[i][j] = c;
    if (ans) return ans;
  }

  return false;
}
