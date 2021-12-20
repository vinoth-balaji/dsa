let num1 = "1+1i",
  num2 = "1+1i";

let a = num1.substring(0, num1.indexOf("+"));
let b = num1.substring(num1.indexOf("+") + 1, num1.length - 1);
let c = num2.substring(0, num2.indexOf("+"));
let d = num2.substring(num2.indexOf("+") + 1, num2.length - 1);

let res = "" + a * c - b * d + "+" + (a * c + d * c) + "i";
console.log(res);
