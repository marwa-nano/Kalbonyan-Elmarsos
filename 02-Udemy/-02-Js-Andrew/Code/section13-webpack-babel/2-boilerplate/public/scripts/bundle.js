"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = "mike";
console.log(name);

var Hangman = function () {
  function Hangman() {
    _classCallCheck(this, Hangman);
  }

  _createClass(Hangman, [{
    key: "myMethod",
    value: function myMethod() {
      return "Testing";
    }
  }]);

  return Hangman;
}();

var hangman = new Hangman();
console.log(hangman.myMethod());
// to create bundle.js
// update package.json "scripts": {
//   "build": "babel src/index.js --out-file public/scripts/bundle.js --presets env"
// },
// then in cmd npm run build

// --watch to automate our work and get changes for our input if occur
