let mapping = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  23: "w",
  26: "z",
};

let s = "231011";

let dp = [];
dp[0] = 1;
for (let i = 1; i < s.length; i++) {
  if (s[i] == "0" && s[i - 1] == "0") {
    dp[i] = 0;
  } else if (s[i] == "0" && s[i - 1] != "0") {
    dp[i] = dp[i - 1];
  } else if (s[i] != "0" && s[i - 1] == "0") {
    if (s[i] == "1" || s[i] == "2") dp[i] = i > 1 ? dp[i - 2] : 1;
    else dp[i] = 0;
  } else {
    dp[i] = dp[i - 1];
    if (parseInt(s.substring(i - 1, i + 1)) <= 26)
      dp[i] += i > 1 ? dp[i - 2] : 1;
  }
}

console.log(dp[s.length - 1]);
