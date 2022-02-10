var groupAnagrams = function (strs, k) {
  let ansMap = {};
  let ans = [];
  for (let s of strs) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
      let ch = s[i];

      if (!map.hasOwnProperty(ch)) {
        map[ch] = 1;
      } else map[ch] += 1;
    }

    let key = "";
    Object.keys(map)
      .sort()
      .forEach((k) => {
        key += k + map[k];
      });

    if (!ansMap.hasOwnProperty(key)) {
      ansMap[key] = [s];
    } else ansMap[key].push(s);
  }

  Object.keys(ansMap).forEach((k) => {
    ans.push(ansMap[k]);
  });

  return ans;
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
