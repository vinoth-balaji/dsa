function mazePath(i, j, s, e, ans) {
  if (i == s && j == e) {
    console.log(ans);
    return;
  }
  if (i > s || j > e) return;

  let paths = [];
  //horizontal steps
  for (let ms = 1; ms <= e - j; ms++) {
    mazePath(i, j + ms, s, e, "h" + ms + ans);
  }
  //vertical steps
  for (let ms = 1; ms <= s - i; ms++) {
    mazePath(i + ms, j, s, e, "v" + ms + ans);
  }
  // diagonal steps
  for (let ms = 1; ms <= e - j && ms <= s - i; ms++) {
    mazePath(i + ms, j + ms, s, e, "d" + ms + ans);
  }
}

mazePath(0, 0, 2, 2, "");
