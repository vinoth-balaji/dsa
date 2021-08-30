function permutations(s, ans) {
  if (s.length == 0) {
    console.log(ans);
    return;
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    permutations(s.substring(0, i) + s.substring(i + 1), ans + char);
  }
}

permutations("abc", "");
