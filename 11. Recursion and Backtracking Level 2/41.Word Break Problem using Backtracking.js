var wordBreak = function (s, map, ans) {
  if (s == "") {
    console.log(ans);
    return;
  }

  for (let i = 0; i < s.length; i++) {
    let left = s.substring(0, i + 1);
    let right = s.substring(i + 1);

    if (map.hasOwnProperty(left)) {
      wordBreak(right, map, ans + " " + left);
    }
  }
};

let s = "applepenapple",
  wordDict = ["apple", "pen"];

let map = {};
for (let w of wordDict) {
  if (map.hasOwnProperty(w)) {
    map[w] += 1;
  } else map[w] = 1;
}
console.log(wordBreak(s, map, ""));
