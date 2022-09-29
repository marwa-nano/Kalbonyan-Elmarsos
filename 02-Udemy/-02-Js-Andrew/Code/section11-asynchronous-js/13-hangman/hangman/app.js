const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
// const game1 = new Hangman("Car Parts", 2); const ->let  , remove assigned value
let game1;

// puzzleEl.textContent = game1.puzzle;
// guessesEl.textContent = game1.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
};

const startGame = async () => {
  // fetch puzzle
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};
// document.querySelector("#reset").addEventListener("click", (e) => {startGame()});
document.querySelector("#reset").addEventListener("click", startGame);

startGame();
// getPuzzle("2")
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

///
// getCurrentCountry()
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// getLocation()
//   .then((location) => {
//     return getCountry(location.country);
//   })
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });
