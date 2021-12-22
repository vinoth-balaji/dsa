let buildings = [4, 2, 7, 6, 7, 8, 10];
let bricks = 2,
  ladders = 2;

function farthest(buildings, bricks, ladders) {
  let pq = [];

  for (let i = 0; i < buildings.length - 1; i++) {
    let diff = buildings[i + 1] - buildings[i];
    if (diff > 0) {
      // first we try to use all the ladders
      if (pq.length < ladders) {
        pq.push(diff);
      } else {
        // once ladders are full we try to optimize by using bricks
        let br = diff;
        let min = Math.min(...pq);

        // we find the min from pq and the difference between the buildings. If the min of the pq is smaller than the current diff, we try to use bricks
        if (pq.length > 0 && min < diff) {
          br = min;

          var index = pq.indexOf(min);
          if (index > -1) {
            pq.splice(index, 1);
          }

          // we try to replace the ladder with the brick
          pq.push(diff);
        }

        // we check if after using the bricks do we still have 0 or more bricks. If no we cant go further
        if (bricks - br >= 0) {
          bricks -= br;
        } else return i;
      }
    }
  }

  return buildings.length - 1;
}

console.log(farthest(buildings, bricks, ladders));
