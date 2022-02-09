var countkDist = function (s, k) {
  let count = 0;

  let mapK = {},
    mapKm1 = {};
  let ik = 0,
    ikm1 = 0,
    j = 0;

  while (true) {
    // acquire

    let f1 = false,
      f2 = false;
    while (ik < s.length) {
      let ch = s[ik];

      if (!mapK.hasOwnProperty(ch)) {
        mapK[ch] = 1;
      } else mapK[ch] += 1;

      if (Object.keys(mapK).length == k + 1) {
        if (mapK[ch] == 1) delete mapK[ch];
        else mapK[ch] -= 1;
        break;
      }

      ik++;
      f1 = true;
    }

    while (ikm1 < ik) {
      let ch = s[ikm1];

      if (!mapKm1.hasOwnProperty(ch)) {
        mapKm1[ch] = 1;
      } else mapKm1[ch] += 1;

      if (Object.keys(mapKm1).length == k) {
        if (mapKm1[ch] == 1) delete mapKm1[ch];
        else mapKm1[ch] -= 1;
        break;
      }

      ikm1++;
      f2 = true;
    }
    // console.log(ik, ikm1);

    // release
    while (j < ikm1) {
      // console.log(
      //   Object.keys(mapK).length,
      //   Object.keys(mapKm1).length,
      //   ik - ikm1
      // );
      if (
        Object.keys(mapK).length == k &&
        Object.keys(mapKm1).length == k - 1
      ) {
        count += ik - ikm1;
      }
      // console.log(count);
      let ch = s[j];
      if (mapK[ch] == 1) delete mapK[ch];
      else mapK[ch] -= 1;
      if (mapKm1[ch] == 1) delete mapKm1[ch];
      else mapKm1[ch] -= 1;
      j++;

      if (Object.keys(mapK).length < k || Object.keys(mapKm1).length < k - 1) {
        break;
      }
    }

    // break;
    if (f1 == false && f2 == false) break;
  }

  return count;
};

let s = "pqpqs",
  k = 2;
console.log(countkDist(s, k));
