var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let n1 = a.toString() + b.toString();
    let n2 = b.toString() + a.toString();

    return n1 > n2 ? -1 : n1 == n2 ? 0 : 1;
  });

  let max = nums.join("");
  return max[0] == "0" ? "0" : max;
};

let nums = [3, 30, 34, 5, 9];

console.log(largestNumber(nums));
