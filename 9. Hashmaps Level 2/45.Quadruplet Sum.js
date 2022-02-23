// Quadruplet  nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let ABMap = {},
    ans = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let sum = nums1[i] + nums2[j];
      if (ABMap.hasOwnProperty(sum)) ABMap[sum] += 1;
      else ABMap[sum] = 1;
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    // CD.push([]);
    for (let j = 0; j < nums4.length; j++) {
      let sum = nums3[i] + nums4[j];
      if (ABMap.hasOwnProperty(0 - sum)) {
        ans += ABMap[0 - sum];
      }
    }
  }

  return ans;
};

let nums1 = [-1, -1],
  nums2 = [-1, 1],
  nums3 = [-1, 1],
  nums4 = [1, -1];
console.log(fourSumCount(nums1, nums2, nums3, nums4));
