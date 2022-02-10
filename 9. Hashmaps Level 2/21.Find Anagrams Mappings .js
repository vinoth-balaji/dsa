var anagramsMapping = function (str1, str2, k) {
  let map = {};
  let ans = [];

  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];

    if (!map.hasOwnProperty(ch)) {
      map[ch] = [i];
    } else map[ch].push(i);
  }
  // console.log(map);

  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];
    ans.push(map[ch].pop());
  }

  return ans;
};

let str1 = "123452",
  str2 = "432152";
console.log(anagramsMapping(str1, str2));
