var SnapshotArray = function (length) {
  this.hashMapArray = [];
  this.snapID = 0;
  for (let i = 0; i < length; i++) {
    this.hashMapArray.push({});
  }
};

SnapshotArray.prototype.set = function (index, val) {
  this.hashMapArray[index][this.snapID] = val;
};

SnapshotArray.prototype.snap = function () {
  this.snapID++;
  return this.snapID - 1;
};

SnapshotArray.prototype.get = function (index, snap_id) {
  while (snap_id >= 0 && !this.hashMapArray[index].hasOwnProperty(snap_id)) {
    snap_id--;
  }
  return this.hashMapArray[index].hasOwnProperty(snap_id)
    ? this.hashMapArray[index][snap_id]
    : 0;
};

let snapshotArr = new SnapshotArray(3);
snapshotArr.set(0, 5);
console.log(snapshotArr.snap());
snapshotArr.set(0, 6);
console.log(snapshotArr);
console.log(snapshotArr.get(0, 0));
