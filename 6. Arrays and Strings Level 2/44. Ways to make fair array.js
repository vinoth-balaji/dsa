var waysToMakeFair = function (a) {
  let oddSum = [];
  let evenSum = [];

  for (let i = 0; i < a.length; i++) {
    if (i == 0) {
      evenSum.push(a[i]);
      oddSum.push(0);
    } else if (i == 1) {
      oddSum.push(a[i]);
      evenSum.push(evenSum[i - 1]);
    } else if (i % 2 == 0) {
      evenSum.push(a[i] + evenSum[i - 1]);
      oddSum.push(oddSum[i - 1]);
    } else {
      oddSum.push(a[i] + oddSum[i - 1]);
      evenSum.push(evenSum[i - 1]);
    }
  }

  count = 0;

  for (let i = 0; i < a.length; i++) {
    let lOS = i == 0 ? 0 : oddSum[i - 1],
      lES = i == 0 ? 0 : evenSum[i - 1],
      rES = lES + oddSum[oddSum.length - 1] - oddSum[i],
      rOS = lOS + evenSum[evenSum.length - 1] - evenSum[i];

    if (rES == rOS) count++;
  }

  return count;
};

let nums = [2, 1, 6, 4];
console.log(waysToMakeFair(nums));
