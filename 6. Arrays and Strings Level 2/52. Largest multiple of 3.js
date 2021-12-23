var largestMultipleOfThree = function (digits) {
  let sum = 0;
  digits = digits.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < digits.length; i++) {
    sum += digits[i];
  }

  if (sum == 0) return "0";
  else if (sum % 3 == 0) {
    return digits.join("");
  } else if (sum % 3 == 1) {
    // check for least value with val%3==1
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] % 3 == 1) {
        return removeInitialOs([...digits.slice(0, i), ...digits.slice(i + 1)]);
      }
    }

    // if val not found , checking if 2 digits with val%3==2 is found
    let vals = [];
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] % 3 == 2) {
        vals.push(i);
        if (vals.length == 2) break;
      }
    }
    if (vals.length != 2) return "";
    return removeInitialOs([
      ...digits.slice(0, vals[1]),
      ...digits.slice(vals[1] + 1, vals[0]),
      ...digits.slice(vals[0] + 1),
    ]);
  } else if (sum % 3 == 2) {
    // check for least value with val%3==2
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] % 3 == 2) {
        return removeInitialOs([...digits.slice(0, i), ...digits.slice(i + 1)]);
      }
    }

    // if val not found , checking if 2 digits with val%3==3 is found
    let vals = [];
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] % 3 == 1) {
        vals.push(i);
        if (vals.length == 2) break;
      }
    }
    if (vals.length != 2) return "";
    return removeInitialOs([
      ...digits.slice(0, vals[1]),
      ...digits.slice(vals[1] + 1, vals[0]),
      ...digits.slice(vals[0] + 1),
    ]);
  }

  return "";
};

removeInitialOs = function (a) {
  if (a.length == 0) return "";
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    if (a[i] != 0) {
      return a.slice(i).join("");
    }
  }

  if (sum == 0) return "0";
};

let digits = [0, 0, 0, 0, 0, 1];

console.log(largestMultipleOfThree(digits));
