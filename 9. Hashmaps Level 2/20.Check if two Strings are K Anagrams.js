var arekAnagrams = function (str1, str2, k) {
  let map = {};
  for (let v of str1) {
    if (!map.hasOwnProperty(v)) {
      map[v] = 1;
    } else map[v] += 1;
  }

  for (let v of str2) {
    if (map[v] == 1) delete map[v];
    else if (map.hasOwnProperty(v)) map[v] -= 1;
  }

  let count = 0;
  Object.keys(map).forEach((k) => {
    if (map[k] == 1) count++;
  });
  // console.log(map)

  return count <= k;
};

let str1 = "anagram",
  str2 = "grammar",
  k = 3;
console.log(arekAnagrams(str1, str2, k));
