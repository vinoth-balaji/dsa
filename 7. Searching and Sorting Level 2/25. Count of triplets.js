var a = [1, 2, 3, 4, 5, 6, 7];
a.sort((a, b) => a - b);

let count = 0;
// min 2 lemets needed for a pair
for (let k = a.length - 1; k >= 2; k--) {
  let e = a[k];

  let i = 0,
    j = k - 1;
  while (i < j) {
    let sum = a[i] + a[j];
    if (sum == e) {
      count++;
      i++;
      j--; //if elemnts are distinct
    } else if (sum > e) {
      j--;
    } else {
      i++;
    }
  }
}

console.log(count);
