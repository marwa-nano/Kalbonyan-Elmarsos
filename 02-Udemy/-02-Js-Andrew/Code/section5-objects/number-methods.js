let num = 103.941;
console.log(num.toFixed(2));

// Method pbject provided to us by js
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// Math.random()  method => return random number from 0 to 1

// generate numbers from 0 to 0.999999999999999
let randomNum = Math.random();
console.log(randomNum);
/////////////////////////////

// generate numbers from 10 to 20
let min = 10;
let max = 20;

let anotherRandomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// Math.random();// generate 0 to 0.9999999
// Math.random() * (max - min) // generate 0 to 9.9999999
// Math.random() * (max - min +1) // generate 0 to 10.9999999
//  Math.floor(Math.random() * (max - min + 1) // generate 0 to 10
// Math.floor(Math.random() * (max - min + 1)) + min // generate 10 to 20
console.log(anotherRandomNum);
