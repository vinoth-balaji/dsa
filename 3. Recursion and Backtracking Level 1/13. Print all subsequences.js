let s = "abc";
function subSequence(s, ans) {
  if (s.length == 0) {
    console.log(ans);
    return;
  }

  let char = s[0];
  subSequence(s.substring(1), ans + "");
  subSequence(s.substring(1), ans + char);
}

subSequence(s, "");
