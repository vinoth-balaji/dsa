var a = [16, 17, 5, 4, 3, 5, 2];
let max = a[a.length - 1];
let leaders = [max];
for (let i = a.length - 2; i >= 0; i--) {
  max = Math.max(max, a[i]);
  if (a[i] >= max) leaders.unshift(a[i]);
}

console.log(leaders);
