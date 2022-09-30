console.log("utils");

const name = "Marwa"; // to aaccess it by app.js

// The answer is that we need to explicitly export all of the stuff this file should share with the outside world.To do this, we take advantage of another aspect of the module system, which down below is module.exports.This is where we can define all of the things this file should share with other files.
const add = function (a, b) {
  return a + b;
};
// module.exports = name;
module.exports = add;
