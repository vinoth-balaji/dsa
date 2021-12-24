let trips = [
    [2, 1, 5],
    [3, 3, 7],
  ],
  capacity = 5;

var carPooling = function (trips, capacity) {
  if (trips.length == 0) return true;

  let cap = [];
  let maxDistance = 0;
  for (let i = 0; i < trips.length; i++) {
    maxDistance = Math.max(maxDistance, trips[i][2]);
  }
  for (let i = 0; i <= maxDistance; i++) {
    cap[i] = 0;
  }

  for (let i = 0; i < trips.length; i++) {
    let trip = trips[i];
    cap[trip[1]] += trip[0];
    cap[trip[2]] -= trip[0];
  }

  let maxPeople = 0;
  for (let i = 0; i < cap.length; i++) {
    maxPeople += cap[i];
    if (maxPeople > capacity) return false;
  }

  return true;
};

console.log(carPooling(trips, capacity));
