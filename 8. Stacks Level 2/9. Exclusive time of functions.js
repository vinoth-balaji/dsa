var exclusiveTime = function (n, logs) {
  let stack = [],
    ans = [];

  for (let i = 0; i < n; i++) {
    ans[i] = 0;
  }

  for (let l of logs) {
    let log = l.split(":");
    if (log[1] == "start") {
      // id start child
      stack.push([+log[0], +log[2], 0]);
    } else {
      let prev = stack.pop();
      let interval = +log[2] - prev[1] + 1;
      ans[+log[0]] += interval - prev[2];

      if (stack.length > 0) {
        stack[stack.length - 1][2] += interval;
      }
    }
  }

  return ans;
};

let n = 2,
  logs = ["0:start:0", "1:start:2", "0:end:5", "1:end:6"];

console.log(exclusiveTime(n, logs));
