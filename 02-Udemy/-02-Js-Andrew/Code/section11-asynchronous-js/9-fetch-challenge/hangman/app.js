const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("car parts", 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMsg;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMsg;
});

////////////
getPuzzleFetch("2")
  .then((data) => {
    console.log(`from Fetch Api: ${data.puzzle}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
////////////////
const wordCount = 3;
getPuzzlePromise("2").then(
  (Puzzle) => {
    console.log(Puzzle);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);

//////////////////
//here is an example of asynchronous execution.
getPuzzle(wordCount, (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
});
///

getCountryPromise("US").then(
  (country) => {
    console.log(country);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);
///////////////////////
getCountryFetch("MX")
  .then((country) => {
    console.log(country.name);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
//////////////////
getCountry(countryCode, (error, country) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(country);
  }
});

// way we can make HTTP requests in JavaScript. by xmlhttprequest and fetch api
// We access the fetch API by calling fetch like so we pass to it a couple of arguments. The first one is the URL.Now, there is also a second optional argument where we can further customize our request.
//Now, what comes back from fetch? Well, what Fetch returns is actually a promise.
fetch("http://puzzle.mead.io/puzzle", {})
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("unable to fetch the puzzle");
    }
  })
  .then((data) => {
    console.log(data.puzzle);
  })
  .catch((error) => {
    console.log(error);
  });
