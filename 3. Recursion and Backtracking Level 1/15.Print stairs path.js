let stairs = 4;

function printStairs(s, ans) {
  if (s == 0) {
    console.log(ans);
    return;
  } else if (s < 0) return;

  printStairs(s - 1, 1 + ans);
  printStairs(s - 2, 2 + ans);
  printStairs(s - 3, 3 + ans);
}

printStairs(stairs, "");
