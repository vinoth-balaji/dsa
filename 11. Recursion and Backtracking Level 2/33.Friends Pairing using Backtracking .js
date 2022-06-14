var pairing = function (i, n, used, ans) {
  if (i > n) {
    console.log(ans);
    return;
  }

  if (!used[i]) {
    used[i] = true;
    pairing(i + 1, n, used, ans + "(" + i + ") ");
    for (let j = i + 1; j <= n; j++) {
      if (!used[j]) {
        used[j] = true;
        pairing(i + 1, n, used, ans + "(" + i + j + ") ");
        used[j] = false;
      }
    }
    used[i] = false;
  } else {
    pairing(i + 1, n, used, ans);
  }
};

let used = [null, null, null, null];

console.log(pairing(1, 3, used, ""));
