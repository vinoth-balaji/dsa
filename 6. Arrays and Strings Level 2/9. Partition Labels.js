let a = "ababcbacadefegdehijhklij";

let hashmap = new Map();

for (let i = 0; i < a.length; i++) {
  hashmap.set(a[i], i);
}

let start = -1;
let maxSize = 0;
let partitions = [];

for (let i = 0; i < a.length; i++) {
  let maxIndex = hashmap.get(a[i]);
  maxSize = Math.max(maxSize, maxIndex);

  if (i == maxSize) {
    partitions.push(maxSize - start);
    start = i;
  }
}

console.log(partitions);
