var fractionToDecimal = function (numerator, denominator) {
  let rem = numerator % denominator;
  if (rem == 0) return (numerator / denominator).toString();
  else {
    let ans = "";
    let quotient = parseInt(numerator / denominator);
    ans = quotient + ".";
    let map = {};

    let q = parseInt(rem / denominator);

    if (q == 0) {
      map[0] = ans.length;
      rem = rem * 10;
      q = parseInt(rem / denominator);

      while (q == 0) {
        rem = rem * 10;
        q = parseInt(rem / denominator);
        ans += "0";
      }

      rem /= 10;
    }

    // console.log(ans, rem);

    while (rem != 0) {
      rem = rem * 10;
      let q = parseInt(rem / denominator);
      // console.log(rem, q);
      rem = rem % denominator;
      if (map.hasOwnProperty(q)) {
        let len = map[q];

        // console.log(ans, map);
        ans = ans.substring(0, len) + "(" + ans.substring(len) + ")";

        return ans;
      } else {
        map[q] = ans.length;
        ans += q;
      }
      // console.log(ans);
    }

    // ans += Array.from(set).join('');
    return ans;
  }
};

let numerator = 33,
  denominator = 333;
console.log(fractionToDecimal(numerator, denominator));
