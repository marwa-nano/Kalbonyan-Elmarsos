// asynchronous
const getPuzzle = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback("An error occur", undefined);
    }
  });
  request.open("Get", "https://puzzle.mead.io/puzzle?wordCount=3");
  request.send();
};

/////////////////////////synchronous way////////////////
// doesn't take callback  fn
//  make this request synchronous.
// pass a third argument to request that option. The third argument lets you define if you want this request to be synchronous or asynchronous.by default, it's true.
// This means we have an asynchronous request where we can move on and do other things before the HTTP request completes.
// If we change this to false, we're actually forcing our code to wait until the server responds with the puzzle.

// const getPuzzleSync = () => {
//   const request = new XMLHttpRequest();
//   request.open("Get", "http://puzzle.mead.io/slow-puzzle?wordCount=3", false);
//   request.send();
//   if (request.readyState === 4 && request.status === 200) {
//     const data = JSON.parse(request.responseText);
//     return data.puzzle;
//   } else if (request.readyState === 4) {
//     throw new Error("things did not go well");
//   }
// };
