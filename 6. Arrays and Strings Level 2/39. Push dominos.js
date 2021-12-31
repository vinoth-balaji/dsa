var pushDominoes = function (dominoes) {
  dominoes = "L" + dominoes + "R";
  dominoes = dominoes.split("");
  let range = 0;
  for (let i = 1; i < dominoes.length; i++) {
    if (dominoes[i] != ".") {
      handle(dominoes, range, i);
      range = i;
    }
  }

  // console.log(dominoes);
  return dominoes.slice(1, dominoes.length - 1).join("");
};

handle = function (dominoes, i, j) {
  // console.log(dominoes[i], dominoes[j]);
  if (dominoes[i] == "L" && dominoes[j] == "L") {
    while (i <= j) {
      dominoes[i] = "L";
      i++;
    }
  } else if (dominoes[i] == "R" && dominoes[j] == "R") {
    while (i <= j) {
      dominoes[i] = "R";
      i++;
    }
  } else if (dominoes[i] == "R" && dominoes[j] == "L") {
    let diff = j - i - 1;
    let mid = i + parseInt(diff / 2);
    if (diff % 2 == 0) {
      while (i <= mid) {
        dominoes[i] = "R";
        i++;
      }

      while (i < j) {
        dominoes[i] = "L";
        i++;
      }
    } else {
      while (i <= mid) {
        dominoes[i] = "R";
        i++;
      }

      i++;
      while (i < j) {
        dominoes[i] = "L";
        i++;
      }
    }
  } else {
  }
};

let dominoes = ".L.R...LR..L..";
console.log(pushDominoes(dominoes));
