let s = "cabwefgewcwaefgcf";
t = "cae";
console.log(minWindow(s, t));

function minWindow(s, t) {
  let map = {};
  for (let i of t) {
    if (!map.hasOwnProperty(i)) map[i] = 1;
    else map[i] += 1;
  }
  console.log(map);

  let matchCount = 0,
    i = 0,
    j = 0;
  let sub = "",
    subMap = {};
  //   while (true) {
  while (i < s.length && matchCount < t.length) {
    let char = s[i];

    if (!map.hasOwnProperty(char)) {
      sub += char;
    } else {
      if (!subMap.hasOwnProperty(char)) {
        sub += char;
        subMap[char] = 1;
        matchCount += 1;
      } else if (subMap[char] < map[char]) {
        sub += char;
        subMap[char] = 1;
        matchCount += 1;
      }
    }
    i++;
  }
  //   }
  console.log(sub, matchCount);
}
