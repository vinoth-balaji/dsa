var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "c" && stack.length >= 2) {
      // console.log(stack,stack[stack.length - 1] == 'b' && stack[stack.length - 2] == 'a')
      if (stack.pop() == "b" && stack.pop() == "a") {
        // pair exists
      } else return false;
    } else stack.push(s[i]);
  }
  // console.log(stack);

  return stack.length == 0;
};

// var isValid = function (s) {
//   let stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == 'c' && stack.length >= 2) {
//       // console.log(stack,stack[stack.length - 1] == 'b' && stack[stack.length - 2] == 'a')
//       if (stack[stack.length - 1] == 'b' && stack[stack.length - 2] == 'a') {
//         stack.pop();
//         stack.pop();
//       } else stack.push(s[i]);
//     } else stack.push(s[i]);
//   }
//   // console.log(stack);

//   return stack.length == 0;
// };

let s = "abcabcababcc";

console.log(isValid(s));
