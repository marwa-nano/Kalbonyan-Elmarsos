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

//here is an example of asynchronous execution.
const wordCount = 3;
getPuzzle(wordCount, (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
});
///
getPuzzlePromise("2").then(
  (Puzzle) => {
    console.log(Puzzle);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);

//////////////////
getCountryPromise("US").then(
  (country) => {
    console.log(country);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);
///////////////////////
getCountry(countryCode, (error, country) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(country);
  }
});

// const request = new XMLHttpRequest();
// request.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     console.log(data);
//   } else if (e.target.readyState === 4) {
//     console.log("an error occur");
//   }
// });
// request.open("Get", "http://puzzle.mead.io/puzzle?wordCount=3");
// request.send();

// //////////////////challenge///////////////////////
// // http request
// const countryCode = "EG";
// const countryRequest = new XMLHttpRequest();
// countryRequest.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     const country = data.find((country) => country.alpha2Code === countryCode);
//     console.log(country.name);
//   } else if (e.target.readyState === 4) {
//     console.log("an error occur");
//   }
// });
// countryRequest.open("Get", "https://restcountries.com/v2/all");
// countryRequest.send();
