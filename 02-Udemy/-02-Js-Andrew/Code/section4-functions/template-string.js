// use regular string concatenation
let getScoreText3 = function (name = "Anonymous", score = 0) {
  return "Name: " + name + " -Score: " + score;
};
let scoreText3 = getScoreText3(undefined, 300);

// template string we use ` ${any variable}  `
// back tick ``
// easy to read ,easy to change ,easy to rearrange
//  more readable ,more maintaiable

let fName = "Hany";
let age = "12";
console.log(`Hey, i am ${fName} ,I am ${age} years old`);

// use template string instead of regular string
let getScoreText4 = function (name = "Anonymous", score = 0) {
  return `name: ${name} -score: ${score}`;
  //return "Name: " + name + " -Score: " + score;
};
let scoreText4 = getScoreText3(undefined, 300);
console.log(scoreText4);
