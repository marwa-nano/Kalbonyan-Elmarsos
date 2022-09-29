// function =>input(argument), code, output (return value)
// declare /defination for fun
let greatUser = function () {
  console.log("welcome user");
};
// to execute fn we must call it
greatUser();
greatUser();
greatUser();
greatUser();

let number = function (num) {
  console.log(num);
};
number(3); // argument
number(5);
number(10);

// fun return squared number

let square = function (num) {
  let result = num * num;
  return result;
  // console.log(result);
};
//square(3); doesn't return any value
//square(10);doesn't return any value
let value = square(3); //call fun
console.log(value);

let otherValue = square(10); // call fun
console.log(otherValue);
