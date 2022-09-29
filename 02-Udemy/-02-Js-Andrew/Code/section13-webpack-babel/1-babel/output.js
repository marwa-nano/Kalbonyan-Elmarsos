"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = "Jen";
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
// pass this file into babel so we going to terminal
// cd boilerplate then we can run babel command needs two pieces of information input file ,output file
// babel name of the input file then output file name (doesn't exist ) babel command will create it -o flag
// babel input.js -o output.js
//Nothing's been converted.We're not seeing all of that weird output code.The problem here is that we've run Babel, but we haven't specified any of the Babel plug , we want to use by default.Bable does almost nothing if we actually want to convert const and class and the other es6 and es7 features, which we do, we have to set up just one more thing. installing is called a babel preset.
// install it locally
// The first thing we have to do is set up the boilerplate project to actually be able to install local modules.
// npm init from this folder(root of your project)
// we found package.json created -->We have a simple JSON file with some basic configuration.store the various dependencies.Our project needs
// npm install babel-preset-env@1.6.1 =>it's going to take the module code and it is going to dump it in a new directorate in the root of our project.This one is called Node Modules.

// babel input.js --out-file output.js
//--out-file = -o
