var palindrome = function (map, k, oddc, ans) {
  if (ans.length == k) {
    let rev = "";
    for (let i = ans.length - 1; i >= 0; i--) rev += ans[i];
    console.log(ans + oddc + rev);
  }

  Object.keys(map).forEach((key) => {
    if (map[key] > 0) {
      map[key] = map[key] - 1;
      palindrome(map, k, oddc, ans + key);
      map[key] = map[key] + 1;
    }
  });
};

let s = "malayalam",
  map = {};

for (let c of s) {
  if (map.hasOwnProperty(c)) {
    map[c] += 1;
  } else map[c] = 1;
}

let odd = 0;
let oddc = "";
Object.keys(map).forEach((key) => {
  if (map[key] % 2 != 0) {
    odd++;
    oddc = key;
    map[key] = parseInt(map[key] / 2);
  } else map[key] = parseInt(map[key] / 2);
});
if (odd > 1) console.log(-1);
else {
  console.log(palindrome(map, parseInt(s.length / 2), oddc, ""));
}
