var removeKdigits = function (num, k) {
  if (num.length == k) return "0";

  let stack = [];
  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > +num[i]) {
      stack.pop();
      k--;
    }
    stack.push(+num[i]);
  }

  while (stack.length > 0 && k > 0) {
    stack.pop();
    k--;
  }

  let c = 0;
  if (stack.length == 0) return "0";
  else {
    for (let s of stack) {
      if (s != 0) break;
      c++;
    }

    num = stack.join("").substring(c);
    return num.length == 0 ? "0" : num;
  }
};

let num = "112",
  k = 1;

console.log(removeKdigits(num, k));
