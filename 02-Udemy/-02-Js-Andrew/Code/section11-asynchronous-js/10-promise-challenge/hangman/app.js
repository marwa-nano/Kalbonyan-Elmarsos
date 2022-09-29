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
  .then((puzzle) => {
    console.log(`from Fetch Api: ${puzzle}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
////////////////
// getCountryFetch("MX")
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });
////////////////////////
getLocation()
  .then((location) => {
    return getCountryFetch(location.country);
    //console.log(`You are currently in ${location.city} ${location.region} ${location.country}`);
  })
  .then((country) => {
    console.log(country.name);
  })
  .catch((err) => {
    console.log(`Error:$(err)`);
  });
