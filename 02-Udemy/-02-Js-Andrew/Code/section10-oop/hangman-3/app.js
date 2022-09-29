// 1. Setup new "status" property with initial value of "playing"
// 2. Create method for recalculating status to "playing", "finished", or "failed"
// 3. Call that method after a guess is processed
// 4. Use console.log to print the status
// Start the game and see "playing"
// Make two incorrect guesses to see"failed"
// Refresh the browser and guess "c", "a", and "t" to see "finished"

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("cat", 2);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.remainingGuesses;
console.log(game1.status);

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = game1.remainingGuesses;
  console.log(game1.status);
});
