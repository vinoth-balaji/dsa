var getDiffString = function (strs, k) {
  let ansMap = {};
  let ans = [];
  for (let s of strs) {
    let map = {};
    let key = "";
    for (let i = 1; i < s.length; i++) {
      let diff;
      b = s[i].charCodeAt(0);
      a = s[i - 1].charCodeAt(0);
      // console.log(a, b, s[i - 1], s[i]);
      if (a <= b) {
        key += b - a + "#";
      } else {
        // key += 122 - b + (98 - a);
        key += b - a + 26 + "#"; // y = 121  a = 97 => 97-127=-24 => -24+26=2
      }
    }
    key += ".";

    if (!ansMap.hasOwnProperty(key)) {
      ansMap[key] = [s];
    } else ansMap[key].push(s);
  }
  // console.log(ansMap);
  Object.keys(ansMap).forEach((k) => {
    ans.push(ansMap[k]);
  });

  return ans;
};

let strs = ["acd", "dfg", "wyz", "yab", "mop", "bdfh", "a", "x", "moqs"];
console.log(getDiffString(strs));
