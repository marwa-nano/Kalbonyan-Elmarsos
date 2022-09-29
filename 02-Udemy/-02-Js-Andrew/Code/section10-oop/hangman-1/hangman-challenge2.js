/////////////////////////////////////////
//////////////////////////////////challenge 2 /////////////////////////////////////////////////////////
// 1. Set up the word instance property as an array of lower case letters
// We start with step one,which is to convert word to a lowercase set of characters,then to array
const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.remainingGuesses = remainingGuesses;
  // 2. Set up another instance property to store guessed letters
  this.guessedLetters = ["c"];
};
// 3. Create a method that gives you the word puzzle back
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
const game1 = new Hangman("cat", 2);
console.log(game1);
console.log(game1.getPuzzle());

const game2 = new Hangman("fish", 3);
console.log(game2);
console.log(game2.getPuzzle());
// No guesses? →>***
// Guessed "c", "b", and "t"? -> cat
