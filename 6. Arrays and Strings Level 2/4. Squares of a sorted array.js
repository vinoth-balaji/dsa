let a = [-4, -3, 0, 2, 3];
let sq_a = [];

let index = a.length - 1;
for (let i = 0, j = a.length - 1; i <= j; ) {
  let left = a[i] * a[i],
    right = a[j] * a[j];

  if (left > right) {
    sq_a[index] = left;
    i++;
  } else {
    sq_a[index] = right;
    j--;
  }
  index--;
}

console.log(sq_a);
