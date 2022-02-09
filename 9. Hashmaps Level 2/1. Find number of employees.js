let em = {
  A: "C",
  B: "C",
  C: "F",
  D: "E",
  E: "F",
  F: "F",
};

findCount = function (em) {
  let ceo;
  let me = {};

  Object.entries(em).forEach(([e, m]) => {
    if (e == m) {
      ceo = e;
    } else {
      if (me.hasOwnProperty(m)) {
        me[m].push(e);
      } else {
        me[m] = [e];
      }
    }
  });

  res = {};

  getSize(me, ceo, res);
  return res;
};

getSize = function (me, man, res) {
  if (!me.hasOwnProperty(man)) {
    res[man] = 0;
    return 1;
  } else {
    let count = 0;
    for (let e of me[man]) {
      let cs = getSize(me, e, res);
      count += cs;
    }
    res[man] = count;

    return count + 1;
  }
};
console.log(findCount(em));
