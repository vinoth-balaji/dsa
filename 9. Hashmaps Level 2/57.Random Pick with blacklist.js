/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
  Solution.prototype.blacklist = blacklist;

  let map = {};
  let set = new Set();
  let top = n - blacklist.length;
  Solution.prototype.n = top;
  for (let i = 0; i < blacklist.length; i++) set.add(blacklist[i]);

  let j = n - 1;
  for (let i = 0; i < blacklist.length; i++) {
    if (blacklist[i] < top) {
      while (set.has(j)) {
        j--;
      }
      map[blacklist[i]] = j;
      j--;
    } else {
      map[blacklist[i]] = blacklist[i];
    }
  }

  Solution.prototype.map = map;

  // console.log(map, top);
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  let r = Math.floor(Math.random() * this.n);
  let val;
  if (this.map.hasOwnProperty(r)) {
    val = this.map[r];
  } else val = r;

  // console.log(val, r);
  return val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */

let solution = new Solution(4, [0, 3]);
solution.pick(); // return 0, any integer from [0,1,4,6] should be ok. Note that for every call of pick,
// 0, 1, 4, and 6 must be equally likely to be returned (i.e., with probability 1/4).
solution.pick(); // return 4
solution.pick(); // return 1
solution.pick(); // return 6
solution.pick(); // return 1
solution.pick(); // return 0
solution.pick(); // return 4
solution.pick(); // return 4
solution.pick(); // return 1
solution.pick(); // return 6
solution.pick(); // return 1
solution.pick(); // return 0
solution.pick(); // return 4
