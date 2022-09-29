///////////////////////challenge 1///////////////////////////////////

// 1. Create a constructor function for the hangman game
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed.

const Hangman1 = function (word, remainingGuesses) {
  this.word = word;
  this.remainingGuesses = remainingGuesses;
};

// 3. Create two instances of it and print both to the console
const guess1 = new Hangman1("cat", 2);
console.log(guess1);

const guess2 = new Hangman1("fish", 3);
console.log(guess2);
