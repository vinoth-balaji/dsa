function print(n) {
  if (n == 0) return;

  console.log(n);
  print(n - 1);
  console.log(n);
}

print(5);
