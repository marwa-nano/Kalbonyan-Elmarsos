// represent a sort of absence of a value

//undefined for variable

let name = "marwa";
console.log(name);
/////////////////////////////////////
let Name; // valid js not assign , = "marwa" completely optional
console.log(Name); // js =>undefined
///////////////////////////////////////
let fName;
if (fName === undefined) {
  //undefined reserved keyword
  console.log("enter your lName");
} else {
  console.log(fName);
}
///////////////////////////////////////////////
let lName;
lName = "Amira";
if (lName === undefined) {
  //undefined reserved keyword
  console.log("enter your lName");
} else {
  console.log(lName);
}
/////////////////////////////////////////

// undefined for function arguments

let square = function (num) {
  console.log(num);
};
square(3);
/////////////////////////////////
let square1 = function (num) {
  console.log(num);
};
square1(); // aregument is not provided ==>considered as undefined implicity
///////////////////////////////////
let square2 = function (num) {
  console.log(num);
};
let num;
square(num);
//////////////////////////////////////////////////
// function doesn't return any thing without return value ==>undefined
// undefined as function return default value
let square3 = function (num) {
  console.log(num);
};
let result = square3(5);
console.log(result);
////////////////////////////////////

// null  as assigned value
let age = 27;
//age = undefined;
age = null; // assigned by a developer
console.log(age);
//When we see null,we know something was explicitly cleared by
//the developer of the program above.
//when we see undefined,we know it's a language default.
