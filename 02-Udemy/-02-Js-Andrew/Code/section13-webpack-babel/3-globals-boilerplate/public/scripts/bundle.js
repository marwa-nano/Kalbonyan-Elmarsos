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

//  npm uninstall -g babel-cli live-server   // uninstall globally
// npm install babel-cli live-server@1.2.0  // install them locally
//  in package-json
