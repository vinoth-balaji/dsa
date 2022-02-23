var connectSticks = function (s) {
  let ans = 0;
  s.sort((a, b) => a - b);

  ans += s[0] + s[1];
  prev = ans;

  for (let i = 2; i < s.length; i++) {
    prev = prev + s[i];
    ans += prev;
  }

  return ans;
};

let s = [1, 8, 3, 5];
console.log(connectSticks(s));
