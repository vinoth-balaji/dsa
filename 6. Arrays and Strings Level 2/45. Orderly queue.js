let s = "baaca";
let k = 3;

function orderlyQueue(s, k) {
  if (k == 0) return -1;
  else if (k == 1) {
    let ans = s;
    for (let i = 0; i < s.length; i++) {
      let temp = s.substring(i + 1) + s.substring(0, i + 1);
      if (ans.localeCompare(temp) > 0) {
        ans = temp;
      }
    }
    return ans;
  } else {
    return s.split("").sort().join("");
  }
}

console.log(orderlyQueue(s, k));
