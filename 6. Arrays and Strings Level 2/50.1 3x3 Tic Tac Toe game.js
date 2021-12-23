var tictactoe = function (moves) {
  let n = 3; // since its given as 3*3 board
  let totalMoves = 0;
  let row = [0, 0, 0],
    col = [0, 0, 0],
    lrD = 0,
    rlD = 0;

  let r, c, player;

  for (move of moves) {
    totalMoves++;
    r = move[0];
    c = move[1];
    player = totalMoves % 2 == 0 ? "B" : "A";

    let playerValue = player == "A" ? 1 : -1;

    row[r] += playerValue;
    col[c] += playerValue;
    if (r + c == n - 1) {
      rlD += playerValue;
    }
    if (r == c) {
      lrD += playerValue;
    }
  }

  if (
    row[r] == n ||
    row[r] == -n ||
    col[c] == n ||
    col[c] == -n ||
    rlD == n ||
    rlD == -n ||
    lrD == n ||
    lrD == -n
  ) {
    return player;
  } else if (totalMoves == n * n) return "Draw";
  else return "Pending";
};
