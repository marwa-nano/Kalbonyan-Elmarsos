const name = "mike";
console.log(name);
class Hangman {
  myMethod() {
    return "Testing";
  }
}
const hangman = new Hangman();
console.log(hangman.myMethod());
// to create bundle.js
// update package.json "scripts": {
//   "build": "babel src/index.js --out-file public/scripts/bundle.js --presets env"
// },
// then in cmd npm run build

// --watch to automate our work and get changes for our input if occur
