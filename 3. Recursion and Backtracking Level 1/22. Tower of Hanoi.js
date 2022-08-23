function toh(disk, A, B, C) {
  if (disk == 0) return;

  toh(disk - 1, A, C, B); // move top 2 from A to C via B
  console.log("Move " + disk + " from " + A + " to " + B); // Move A to B
  toh(disk - 1, C, B, A); // Move C to B via A
}

toh(3, "A", "B", "C");
