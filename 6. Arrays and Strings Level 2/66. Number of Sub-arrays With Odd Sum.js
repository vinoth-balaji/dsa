let arr = [1, 2, 3, 4, 5, 6, 7];
var numOfSubarrays = function (arr) {
  let even = 0,
    odd = 0,
    sum = 0,
    ans = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum % 2 == 0) {
      ans += odd;
      even++;
    } else {
      ans += even + 1;
      odd++;
    }
  }

  return parseInt(ans % 1000000007);
};

console.log(numOfSubarrays(arr));
