var findAnagrams = function (s, p) {
  let ans = [];
  let pMap = {};
  for (let v of p) {
    if (!pMap.hasOwnProperty(v)) {
      pMap[v] = 1;
    } else pMap[v] += 1;
  }

  let i = 0,
    j = 0;

  let anagram = {};

  for (i; i < p.length; i++) {
    let ch = s[i];

    if (!anagram.hasOwnProperty(ch)) {
      anagram[ch] = 1;
    } else anagram[ch] += 1;
  }

  i = p.length - 1;

  while (i < s.length) {
    if (compare(anagram, pMap) == true) ans.push(i - p.length + 1);

    i++;
    let start = s[i - p.length];
    let ch = s[i];
    // console.log(compare(anagram, pMap), i, start, ch, ans);
    if (!anagram.hasOwnProperty(ch)) {
      anagram[ch] = 1;
    } else anagram[ch] += 1;

    if (anagram[start] == 1) delete anagram[start];
    else anagram[start] -= 1;
  }

  return ans;
};

compare = function (anagram, pattern) {
  if (Object.keys(anagram).length != Object.keys(pattern).length) {
    return false;
  }

  let flag = true;
  Object.keys(anagram).forEach((k) => {
    if (pattern.hasOwnProperty(k) && pattern[k] == anagram[k]) {
    } else flag = false;
  });

  return flag;
};
