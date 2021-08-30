var a = [3, 4, 1, 2, 0];

function Inverse(a) {
  let inv = [];
  for (let i = 0; i < a.length; i++) {
    inv[a[i]] = i;
  }
  return inv;
}

console.log(Inverse(a));
