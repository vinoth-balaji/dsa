let s = "abcabc";
let a = 0,
  ab = 0,
  abc = 0;

for (let i = 0; i < s.length; i++) {
  if (s[i] == "a") {
    a = 2 * a + 1;
  } else if (s[i] == "b") {
    ab = 2 * ab + a;
  } else {
    abc = 2 * abc + ab;
  }
}

console.log(abc);
