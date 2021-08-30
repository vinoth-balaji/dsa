let n = 6;

let a = [];
for (let i = 0; i < n; i++) {
  a.push(new Array(n).fill(0));
}

function knightsTour(chess, r, c, move) {
  if (
    r < 0 ||
    c < 0 ||
    r >= chess.length ||
    c >= chess.length ||
    chess[r][c] > 0
  )
    return;

  if (move == chess.length * chess.length) {
    chess[r][c] = move;
    console.log(chess);
    // chess[r][c] = 0;
    return;
  }

  chess[r][c] = move;
  knightsTour(chess, r - 2, c + 1, move + 1);
  knightsTour(chess, r - 1, c + 2, move + 1);
  knightsTour(chess, r + 1, c + 2, move + 1);
  knightsTour(chess, r + 2, c + 1, move + 1);
  knightsTour(chess, r - 2, c - 1, move + 1);
  knightsTour(chess, r - 1, c - 2, move + 1);
  knightsTour(chess, r + 1, c - 2, move + 1);
  knightsTour(chess, r + 2, c - 1, move + 1);
  chess[r][c] = 0;
}

knightsTour(a, 2, 1, 1);
