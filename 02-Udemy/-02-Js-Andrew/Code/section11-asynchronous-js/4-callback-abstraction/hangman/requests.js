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
// The problem is that the get puzzle function has the data to return right away.
// When we actually introduce the HTTP request.

// We have to wait for the callback function to fire first.

// Then and only then do we have access to the data.

// So returning directly from get puzzle is not going to be possible.
// We return from the function and we print the return value before this code ever actually runs.
//help us solve the problem, and that is the callback function.
// Instead of relying on a return value, we're going to rely on a callback function.
