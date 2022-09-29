// Caching is a way to store values so you can use them later on.
function addTo80(n) {
  console.log("long time");
  return n + 80;
}

addTo80(5);
addTo80(5);
addTo80(5);

let cache = {
  5: 85,
};
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    cache[n] = n + 80; // 5 + 80
    console.log("long time");
    return cache[n];
  }
}

memoizedAddTo80(5);
memoizedAddTo80(5);
console.log("1", memoizedAddTo80(5));
console.log("2", memoizedAddTo80(5));
//Well, memorization is a specific form of caching that involves caching the return value.
