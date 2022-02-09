let tour = {
  Chennai: "Bangalore",
  Bombay: "Delhi",
  Goa: "Chennai",
  Delhi: "Goa",
};

let visited = {};

Object.entries(tour).forEach(([src, dest]) => {
  if (!visited.hasOwnProperty(src)) {
    visited[src] = true;
  }
  visited[dest] = false;
});

let src = "";
Object.entries(visited).forEach(([city, visit]) => {
  if (visit) src = city;
});

console.log(src);

while (true) {
  console.log(tour[src]);
  src = tour[src];
  if (!tour.hasOwnProperty(src)) break;
}
