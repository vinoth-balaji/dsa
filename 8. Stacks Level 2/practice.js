let asteroids = [-1, -2, 1, 3, 1, 2, -3, 3];

console.log(asteroidCollision(asteroids));

function asteroidCollision(asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let ast = asteroids[i];
    if (stack.length == 0) stack.push(ast);
    else {
      let flag = false;
      while (stack.length > 0) {
        let top = stack[stack.length - 1];
        if (top > 0 && ast < 0) {
          if (Math.abs(top) == Math.abs(ast)) {
            stack.pop();
            flag = false;
            break;
          } else if (Math.abs(top) > Math.abs(ast)) {
            break;
          } else {
            stack.pop();
            flag = true;
          }
        } else {
          stack.push(ast);
          break;
        }
      }

      if (flag) stack.push(ast);
    }
  }

  return stack;
}
