// 1. Display the puzzle to the brower instead of the console
// 2. Display the guesses left to the browser instead of console
// 3. Separate the Hangman definition from the rest of the app code (use app.js)

// 1. Set up the word instance property as an array of lower case letters
// We start with step one,which is to convert word to a lowercase set of characters,then to array
const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.remainingGuesses = remainingGuesses;
  // 2. Set up another instance property to store guessed letters
  this.guessedLetters = [];
  this.status = "playing";
};

Hangman.prototype.getStatus = function () {
  //const finished =this.word.every((letter)=> this.guessedLetters.includes(letter))
  let finished = true;
  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter)) {
    } else {
      finished = false;
    }
  });

  if (this.remainingGuesses === 0) {
    this.status = "faild";
  } else if (finished) {
    this.status = "finished";
  } else {
    this.status = "playing";
  }
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
  this.getStatus();
};
