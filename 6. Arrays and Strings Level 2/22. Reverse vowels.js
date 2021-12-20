let s = "aklighoustmighasotuali";
let a = s.split("");

let left = 0,
  right = a.length - 1;

while (left < right) {
  while (left < right && !isVowel(a[left])) {
    left++;
  }
  while (left < right && !isVowel(a[right])) {
    right--;
  }
  [a[left], a[right]] = [a[right], a[left]];

  left++;
  right--;
}

console.log(a.join(""));

function isVowel(char) {
  return (
    char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
  );
}
