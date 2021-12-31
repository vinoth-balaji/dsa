// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

var sortArrayByParityII = function (nums) {
  let i = 0,
    j = 1;

  for (i; i < nums.length; i += 2) {
    if (nums[i] % 2 == 1) {
      while (nums[j] % 2 == 1) j += 2;

      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  return nums;
};

let nums = [648, 831, 560, 986, 192, 424, 997, 829, 897, 843];
console.log(sortArrayByParityII(nums));

// Initialize variable i with 0 and j with 1. Here i will travel only even position so we will increment its value by 2 every time and j will travel only odd position so we will increment its value by 2 every time.
// If parity[i] is odd then we will find a j for which parity[j] is even and then we will swap elements at i and j.
// We will do these steps until the value of i is smaller than the length of the parity array.
// Return the parity array.
