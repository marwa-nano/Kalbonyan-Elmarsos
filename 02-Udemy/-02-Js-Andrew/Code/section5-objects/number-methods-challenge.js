// Challenge area
// 1-5 true if correct -false if not correct
//console.log(makeGuess(1));

let makeGuess = function (num) {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  if (num === randomNum) {
    return true;
  } else {
    return false;
  }
};
console.log(makeGuess(2));
//////////////////////////////////////////////////

let makeGuess1 = function (guess) {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return guess === randomNum;
};
console.log(makeGuess1(1));
