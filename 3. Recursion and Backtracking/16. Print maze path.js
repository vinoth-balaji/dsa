function printMaze(i, j, re, ce, ans) {
  if (i == re && j == ce) {
    console.log(ans);
    return;
  }

  if (i > re || j > ce) return;

  printMaze(i, j + 1, re, ce, "h" + ans);
  printMaze(i + 1, j, re, ce, "v" + ans);
}

printMaze(0, 0, 2, 2, "");
