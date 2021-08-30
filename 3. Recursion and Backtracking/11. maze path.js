function mazePath(i, j, s, e) {
  if (i == s && j == e) return [""];
  if (i > s || j > e) return [];

  let paths1 = mazePath(i, j + 1, s, e);
  let paths2 = mazePath(i + 1, j, s, e);

  let paths = [];

  for (let p of paths1) paths.push("h" + p);
  for (let p of paths2) paths.push("v" + p);

  return paths;
}

console.log(mazePath(0, 0, 2, 2));
