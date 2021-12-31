var MinHeap = require("./../0. DS Implementation/1. MinHeap.js");

let buildings = [4, 2, 7, 6, 7, 8, 10];
let bricks = 2,
  ladders = 2;

furthestBuilding = function (buildings, bricks, ladders) {
  let pq = new MinHeap();
  for (let i = 0; i < buildings.length - 1; i++) {
    let diff = buildings[i + 1] - buildings[i];

    if (diff > 0) {
      if (ladders > 0) {
        ladders--;
        pq.insert(diff);
      } else {
        let min = pq.top();

        if (pq.size() > 0 && diff > min && bricks - min >= 0) {
          bricks = bricks - min;

          pq.extract_min();

          pq.insert(diff);
        } else {
          bricks = bricks - diff;
        }

        if (bricks < 0) return i;
      }
    }
  }

  return buildings.length - 1;
};

console.log(furthestBuilding(buildings, bricks, ladders));
