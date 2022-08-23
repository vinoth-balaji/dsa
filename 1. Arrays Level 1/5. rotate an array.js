let a = ["a", "b", "c", "d", "e", "f", "g", "h"];
let k = 3;
if (k > a.length - 1) k = (k % a.length) - 1;
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

//or
// let a = ['a', 'b', 'c', 'd', 'e'];
// let k = 3;
// if (Math.abs(k) > a.length) k = k % a.length;
// if (k < 0) k = k + a.length;

// let rotate = [];

// for (let i = a.length - k; i < a.length; i++) {
//   rotate.push(a[i]);
// }
// for (let i = 0; i <= a.length - 1 - k; i++) {
//   rotate.push(a[i]);
// }

// console.log(rotate);
