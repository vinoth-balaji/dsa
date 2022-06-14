let max = Number.NEGATIVE_INFINITY;
var maxNumber = function (num, k, comp) {
  // console.log(num);
  if (comp > k) {
    if (parseInt(num) > max) max = parseInt(num);
    return;
  }

  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[j] > num[i]) {
        // console.log(i, j);
        num_formatted =
          num.substring(0, i) +
          num[j] +
          num.substring(i + 1, j) +
          num[i] +
          num.substring(j + 1);

        // console.log(num_formatted);
        maxNumber(num_formatted, k, comp + 1);
        num =
          num.substring(0, i) +
          num[i] +
          num.substring(i + 1, j) +
          num[j] +
          num.substring(j + 1);
      }
    }
  }
};

let num = "1234567",
  k = 4;
console.log(maxNumber(num, k, 1));
console.log(max);
