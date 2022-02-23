var distinctChar = function (s) {
  let ans = 0;

  let i = 0,
    j = 0;
  let freq = {};
  for (let i = 0; i < s.length; i++) {
    if (freq.hasOwnProperty(s[i])) {
      freq[s[i]] += 1;
    } else freq[s[i]] = 1;

    while (Object.keys(freq).length > 2) {
      if (freq[s[j]] == 1) delete freq[s[j]];
      else freq[s[j]] -= 1;
      j++;
    }

    // let len = 0;
    // Object.keys(freq).forEach((k) => {
    //   len += freq[k];
    // });

    ans = Math.max(i - j + 1, ans);
  }

  return ans;
};

let s = "aaaaabbccc";
console.log(distinctChar(s));
