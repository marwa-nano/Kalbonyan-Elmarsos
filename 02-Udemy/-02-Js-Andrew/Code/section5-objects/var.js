// problems with var
//1. you can overrride value of the variable as here create two variables with the same name without any error meaasge
var fName = "marwa";
fName = "heba";
var fName = "Mohamed";
console.log(fName);

//2. function scope not block scope
//That means things like if statements which create code blocks don't actually create a new scope
if (10 === 10) {
  var lname = "hend";
}
console.log(lname);
//////////////////////////////////////////
// 3. with var you can access variable before you declare it
let age;
console.log(age);

console.log(address);
var address;
// When we create a variable with var, its declaration gets hoisted to the top of the scope.
console.log(email);
var email = "qsdsasads@jksh";
// is equal to
// var email
// console.log(email)
//email = 'qsdsasads@jksh'
