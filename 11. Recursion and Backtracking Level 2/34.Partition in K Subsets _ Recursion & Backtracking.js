var partition = function (i, n, k, comp, ans) {
  if (i > n) {
    if (comp == k) {
      let p = "";
      for (let s of ans) {
        p += s.join("") + "  ";
      }
      console.log(p);
    }
    return;
  }

  for (let j = 0; j < k; j++) {
    if (ans[j].length > 0) {
      ans[j].push(i);
      partition(i + 1, n, k, comp, ans);
      ans[j].pop();
    } else {
      ans[j].push(i);
      partition(i + 1, n, k, comp + 1, ans);
      ans[j].pop();
      break;
    }
  }
};

let ans = [],
  k = 3,
  n = 4;

for (let i = 0; i < k; i++) {
  ans.push([]);
}

console.log(partition(1, n, k, 0, ans));
