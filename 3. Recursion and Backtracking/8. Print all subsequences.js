s = "abc";

function subSequence(s) {
  if (s.length == 0) return [""];

  let char = s[0];
  let ss = subSequence(s.substring(1));
  let list = [];

  for (let i in ss) {
    list.push("" + ss[i]);
    list.push(char + ss[i]);
  }
  return list;
}

console.log(subSequence(s));
