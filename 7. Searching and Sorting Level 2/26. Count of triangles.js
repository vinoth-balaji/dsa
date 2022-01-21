var a = [2, 4, 6, 8, 9];
a.sort((a, b) => a - b);

let count = 0;
// min 2 lemets needed for a pair
for (let k = a.length - 1; k >= 2; k--) {
  let i = 0,
    j = k - 1;

  while (i < j)
    if (a[i] + a[j] > a[k]) {
      // if smalled can make triange, definitely all above can make trianges
      count += j - i;
      j--;
    } else {
      // check for next larger combination
      i++;
    }
}

console.log(count);
