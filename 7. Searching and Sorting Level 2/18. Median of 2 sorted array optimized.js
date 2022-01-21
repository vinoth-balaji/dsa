var findMedianSortedArrays = function (a, b) {
    if (a.length > b.length) {
      [a, b] = [b, a];
    }
  
    let l = 0,
      h = a.length,
      t = a.length + b.length;
  
    while (l <= h) {
      let a_left = parseInt((l + h) / 2);
      let b_left = parseInt((t + 1) / 2) - a_left;
  
      let a_left_right =
        a_left == a.length ? Number.POSITIVE_INFINITY : a[a_left];
      let a_left_minus1 = a_left == 0 ? Number.NEGATIVE_INFINITY : a[a_left - 1];
      let b_left_right =
        b_left == b.length ? Number.POSITIVE_INFINITY : b[b_left];
      let b_left_minus1 = b_left == 0 ? Number.NEGATIVE_INFINITY : b[b_left - 1];
  
      if (a_left_minus1 <= b_left_right && b_left_minus1 <= a_left_right) {
        if (t % 2 == 0) {
          return (
            (Math.max(a_left_minus1, b_left_minus1) +
              Math.min(a_left_right, b_left_right)) /
            2
          );
        } else {
          return Math.max(a_left_minus1, b_left_minus1);
        }
      } else if (a_left_minus1 > b_left_right) {
        h = a_left - 1;
      } else {
        l = a_left + 1;
      }
    }
  };
  let nums1 = [1, 2, 3, 4, 5],
    nums2 = [6, 7, 8, 9];
  console.log(findMedianSortedArrays(nums1, nums2));
  