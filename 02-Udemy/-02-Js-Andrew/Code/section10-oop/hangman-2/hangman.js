//create a method for making a guess
// 1. Should accept a character for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match

// 1. Set up the word instance property as an array of lower case letters
// We start with step one,which is to convert word to a lowercase set of characters,then to array
const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.remainingGuesses = remainingGuesses;
  // 2. Set up another instance property to store guessed letters
  this.guessedLetters = [];
};

// 3. Create a method that gives you the word puzzle back
// No guesses? →>***
// Guessed "c", "b", and "t"? -> cat
Hangman.prototype.getPuzzle = function () {
  let puzzle = "";
  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle = puzzle + letter;
    } else {
      // puzzle = puzzle + "*";
      puzzle += "*";
    }
  });
  return puzzle;
};
Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);
  if (isUnique) {
    this.guessedLetters.push(guess);
  }
  if (isUnique && isBadGuess) {
    // this.remainingGuesses = this.remainingGuesses - 1;
    this.remainingGuesses--;
  }
};
const game1 = new Hangman("cat", 2);
//guess c,t,z
// game1.makeGuess("c");
// game1.makeGuess("z");
// game1.makeGuess("t");
console.log(game1.getPuzzle()); // c*t
//print remaining guesses(should be 1)
console.log(game1.remainingGuesses);

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  //console.log(guess);
  game1.makeGuess(guess);
  console.log(game1.getPuzzle());
  console.log(game1.remainingGuesses);
});

// const game2 = new Hangman("fish", 3);
// // guess i
// game2.makeGuess("i");
// console.log(game2.getPuzzle()); //*i**
// console.log(game2.remainingGuesses);
