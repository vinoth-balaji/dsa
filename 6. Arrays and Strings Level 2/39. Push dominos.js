let d = ".L.R.....LR...L..R";
let dominos = [];

dominos[0] = "L";
for (let i = 0; i < d.length; i++) {
  dominos[i + 1] = d[i];
}
dominos[d.length + 1] = "R";

let start = 0;
for (let i = 1; i < dominos.length; i++) {
  if (dominos[i] == "L" || dominos[i] == "R") {
    updateDominosPos(dominos, start, i);
    start = i;
  }
}

function updateDominosPos(dominos, i, j) {
  if (dominos[i] == "L" && dominos[j] == "L") {
    for (let k = i + 1; k < j; k++) {
      dominos[k] = "L";
    }
  } else if (dominos[i] == "R" && dominos[j] == "R") {
    for (let k = i + 1; k < j; k++) {
      dominos[k] = "R";
    }
  } else if (dominos[i] == "L" && dominos[j] == "R") {
  } else if (dominos[i] == "R" && dominos[j] == "L") {
    let mid = -1;
    let diff = j - i + 1;

    if (diff % 2 != 0) mid = parseInt((j + i) / 2);
    else mid = (j + i) / 2 + 1;

    for (let k = i + 1; k < j; k++) {
      if (k < mid) dominos[k] = "R";
      else if (k > mid) dominos[k] = "L";
    }
  }
}

console.log(dominos.slice(1, dominos.length - 1).join(""));
