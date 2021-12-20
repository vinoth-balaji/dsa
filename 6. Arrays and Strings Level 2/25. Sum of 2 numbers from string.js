let num1 = "1234",
  num2 = "894";

let i = num1.length - 1,
  j = num2.length - 1,
  carry = 0,
  res = "";

while (i >= 0 || j >= 0 || carry != 0) {
  let ival = i >= 0 ? num1[i] - "0" : 0;
  let jval = j >= 0 ? num2[j] - "0" : 0;

  let sum = ival + jval + carry;

  res = (sum % 10) + res;

  carry = parseInt(sum / 10);

  i--;
  j--;
}

console.log(res);
