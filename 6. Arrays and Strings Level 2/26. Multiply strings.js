let num1 = "1234",
  num2 = "456";

let k = 0,
  pf = 0,
  carry = 0,
  res = [];

if (num1 == "0" || num2 == "0") console.log(0);
else {
  for (let i = 0; i < num1.length + num2.length; i++) res[i] = 0;

  for (let j = num1.length - 1; j >= 0; j--) {
    carry = 0;
    k = num1.length + num2.length - 1 - pf;
    for (let i = num2.length - 1; i >= 0; i--) {
      let sum = (num1[j] - "0") * (num2[i] - "0") + carry + res[k];
      res[k] = sum % 10;
      carry = parseInt(sum / 10);
      k--;
    }
    if (carry != 0) res[k] = res[k] + carry;
    pf++;
  }

  let i = 0;
  while (i < res.length) {
    if (res[i] != 0) break;
    i++;
  }

  console.log(res.slice(i).join(""));
}
