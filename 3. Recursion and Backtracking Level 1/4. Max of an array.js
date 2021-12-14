a = [10, 4, 2, 12, 45, 22];
function max(a, i) {
  if (i == a.length - 1) return a[i];

  let m = max(a, i + 1);
  return m > a[i] ? m : a[i];
}

console.log(max(a, 0));
