var asteroidCollision = function (asteroids) {
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    let ast = asteroids[i];
    if (stack.length == 0) stack.push(ast);
    else {
      let flag = false;
      while (stack.length > 0) {
        let top = stack[stack.length - 1];
        if (
          (ast < 0 && top < 0) ||
          (ast > 0 && top > 0) ||
          (top < 0 && ast > 0)
        ) {
          stack.push(ast);
          flag = true;
          break;
        } else {
          if (top == Math.abs(ast)) {
            stack.pop();
            flag = true;
            break;
          } else if (top > Math.abs(ast)) {
            flag = true;
            break;
          } else {
            stack.pop();
          }
        }
      }
      if (!flag) stack.push(ast);
      // console.log(stack);
    }
  }

  return stack;
};

let asteroids = [5, 10, -5];

console.log(asteroidCollision(asteroids));
