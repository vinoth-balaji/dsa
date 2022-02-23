var numRabbits = function (answers) {
  let freq = {};
  let ans = 0;
  for (let a of answers) {
    if (freq.hasOwnProperty(a)) {
      freq[a] += 1;
    } else freq[a] = 1;
  }
  // console.log(freq);

  Object.keys(freq).forEach((k) => {
    k = parseInt(k);
    let f = freq[k];
    ans += f;

    let rem = f % (k + 1);
    if (rem > 0) ans += k + 1 - rem;
  });

  return ans;
};

let answers = [10, 10, 10];
console.log(numRabbits(answers));
