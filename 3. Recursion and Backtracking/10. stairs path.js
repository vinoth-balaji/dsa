let stairs = 4;

function stairsPath(n) {
  if (n == 0) return [""];
  if (n < 0) return [];

  let paths1 = stairsPath(n - 1);
  let paths2 = stairsPath(n - 2);
  let paths3 = stairsPath(n - 3);

  let paths = [];

  for (let p of paths1) paths.push(1 + p);
  for (let p of paths2) paths.push(2 + p);
  for (let p of paths3) paths.push(3 + p);

  return paths;
}

console.log(stairsPath(stairs));
