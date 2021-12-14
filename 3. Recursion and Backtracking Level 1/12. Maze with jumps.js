function mazePath(i, j, s, e) {
  if (i == s && j == e) return [""];
  if (i > s || j > e) return [];

  let paths = [];
  //horizontal steps
  for (let ms = 1; ms <= e - j; ms++) {
    let hpaths = mazePath(i, j + ms, s, e);
    for (let p of hpaths) paths.push("h" + ms + p);
  }
  //vertical steps
  for (let ms = 1; ms <= s - i; ms++) {
    let vpaths = mazePath(i + ms, j, s, e);
    for (let p of vpaths) paths.push("v" + ms + p);
  }
  // diagonal steps
  for (let ms = 1; ms <= e - j && ms <= s - i; ms++) {
    let dpaths = mazePath(i + ms, j + ms, s, e);
    for (let p of dpaths) paths.push("d" + ms + p);
  }

  return paths;
}

console.log(mazePath(0, 0, 2, 2));
