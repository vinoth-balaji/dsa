let a = ["a", "b", "c", "d", "e", "f", "g", "h"];
let k = 3;

function reverse(a, i, j) {
  while (i <= j) {
    [a[i], a[j]] = [a[j], a[i]];
    i++;
    j--;
  }
}

function rotate(a, k) {
  reverse(a, 0, a.length - 1 - k);
  reverse(a, a.length - k, a.length - 1);
  reverse(a, 0, a.length - 1);
}

rotate(a, 3);
console.log(a);
