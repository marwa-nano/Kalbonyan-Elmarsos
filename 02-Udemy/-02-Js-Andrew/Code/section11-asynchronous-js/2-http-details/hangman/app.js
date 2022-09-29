// HTTP (Hypertext Transfer Protocol)

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

// Making an HTTP request
// every HTTP response comes with a status also known as a status code(developer tool). is a numeric value that describes
// which represent request fail or succeed we can access also on e.target.status =200 succsessful
// status code gets sent in the response // it sents by the server
// https://httpstatus.com -->list of all http status codes avaliable
// mdn http message

const request = new XMLHttpRequest();
request.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  } else if (e.target.readyState === 4) {
    console.log("an error occur");
  }
});
request.open("Get", "http://puzzle.mead.io/puzzle?wordCount=3");
request.send();
