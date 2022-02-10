var isAnagram = function (str1, str2, k) {
  let map = {};

  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];

    if (!map.hasOwnProperty(ch)) {
      map[ch] = 1;
    } else map[ch] += 1;
  }
  // console.log(map);

  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];

    if (!map.hasOwnProperty(ch)) return false;

    if (map[ch] == 1) delete map[ch];
    else map[ch] -= 1;
  }

  return Object.keys(map).length == 0;
};

let s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t));
