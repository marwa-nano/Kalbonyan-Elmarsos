//we're going to figure out how we can get some information into our application that doesn't come from the code itself and doesn't come from the user.
// In this case, the information we're going to be getting is a random phrase we can use for the hangmen puzzle as opposed to the static text that's currently defined in App DOT.
// Now, to actually set up a communication between our browser and this other server, what we need to do is issue an hTTP request
// HTTP (Hypertext Transfer Protocol)
// The hypertext transfer protocol is a request response protocol, meaning that we, the developer and the browser, we issue some sort of request.This goes off to some sort of third party server.That server does some work and it gives us back a response.
// Request - what we hope to do -ex:-We want to generate a new word or phrase.
// Response - what was actually done ex:  the response is going to contain that word or phrase.
// The service that we're going to use is going to generate a random word or phrase from a list, and then it's going to send that back so we can add it into the game.

// WebSocket allow us to communicate between two things in real time, and this is used to allow the browser to automatically refresh whenever we change some data over here.

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("car parts", 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMsg;

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMsg;
});

// Making an HTTP request
// Now, the first thing we have to do is initialize a request using a constructor function   provided to us by the browser.

const request = new XMLHttpRequest();
// initialize our request  open method(url,http method)
// when you type a url in the browser it creates a get request uses get http method
request.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  }
});
request.open("Get", "http://puzzle.mead.io/puzzle"); // configuration
request.send(); // iniate the process
// we need to add event listerner to fire when we actually have the  information and able to do something meaningful with it
