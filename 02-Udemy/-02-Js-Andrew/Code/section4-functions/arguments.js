// function with multiple arguments
//You can add as many arguments as you want.

let add = function (a, b) {
  return a + b;
};
let result = add(10, 2);
console.log(result);
/////////////////////////////////////////
// default arguments
let getScoreText = function (name, score) {
  console.log(name);
  console.log(score);
};
getScoreText();
//////////////////////////////////
// set default value to score
let getScoreText1 = function (name, score = 0) {
  console.log(name);
  console.log(score);
};
getScoreText1();
getScoreText1("Marwa", 100); //We overrode the default value because we actually provided one.
///////////////////////////////////
let getScoreText2 = function (name = "Anonymous", score = 0) {
  console.log(name);
  console.log(score);
};
getScoreText2();
getScoreText2("Ahmed", 200);
///////////////////////////////////////////////////////////////
let getScoreText3 = function (name = "Anonymous", score = 0) {
  return "Name: " + name + " -Score: " + score;
};

let scoreText = getScoreText3();
console.log(scoreText);

let scoreText1 = getScoreText3("Aser");
console.log(scoreText1);

let scoreText2 = getScoreText3("Aser", 300);
console.log(scoreText2);

let scoreText3 = getScoreText3(undefined, 300);
//let scoreText3 = getScoreText3(300);
console.log(scoreText3);
