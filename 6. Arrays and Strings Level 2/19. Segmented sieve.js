let a = 22,
  b = 51;

let bool = [];
for (let i = 0; i < b - a + 1; i++) {
  bool[i] = true;
}

// getting primes bup root b
let primes = sieve(Math.sqrt(b));

// marking factors of each prime as false
for (let i = 0; i < primes.length; i++) {
  let p = primes[i];
  let multiple = Math.ceil(a / p);
  if (multiple == 1) ++multiple;
  let start = p * multiple - a;

  for (let j = start; j < bool.length; j += p) {
    bool[j] = false;
  }
}

for (let i = 2; i < bool.length; i++) {
  if (bool[i]) console.log(i + a > 1 ? i + a : i);
}

function sieve(n) {
  let bool = [];
  let primes = [];
  for (let i = 0; i <= n; i++) {
    bool[i] = true;
  }

  for (let i = 2; i <= Math.sqrt(bool.length); i++) {
    if (bool[i]) {
      for (let j = 2 * i; j < bool.length; j += i) bool[j] = false;
    }
  }

  for (let i = 2; i < bool.length; i++) {
    if (bool[i]) primes.push(i);
  }
  return primes;
}
