let n = 37;

let bool = [];
for (let i = 0; i <= n; i++) {
  bool[i] = true;
}

for (let i = 2; i <= Math.sqrt(bool.length); i++) {
  if (bool[i]) {
    for (let j = 2 * i; j < bool.length; j += i) bool[j] = false;
  }
}

for (let i = 2; i < bool.length; i++) {
  if (bool[i]) console.log(i);
}
