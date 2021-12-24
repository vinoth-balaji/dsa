let firstList = [
    [0, 2],
    [5, 10],
    [13, 23],
    [24, 25],
  ],
  secondList = [
    [1, 5],
    [8, 12],
    [15, 24],
    [25, 26],
  ];

var intervalIntersection = function (firstList, secondList) {
  let intersections = [];
  let i = 0,
    j = 0;

  while (i < firstList.length && j < secondList.length) {
    let csp = Math.max(firstList[i][0], secondList[j][0]);
    let cep = Math.min(firstList[i][1], secondList[j][1]);

    if (csp <= cep) {
      intersections.push([csp, cep]);
    }
    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return intersections;
};

console.log(intervalIntersection(firstList, secondList));
