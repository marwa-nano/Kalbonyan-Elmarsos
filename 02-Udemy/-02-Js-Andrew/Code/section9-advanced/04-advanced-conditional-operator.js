// conditional operator = ternary operator
// allows us to add aconditional logic without use if statement

const myAge = 27;
let message;
//We can make a replacement,those five lines if statement  with a single conditional operator.
// if (myAge >= 18) {
//   message = "you can vote";
// } else {
//   message = "you can't vote";
// }
message = myAge >= 18 ? "you can vote" : "you cannot vote";
// first thing is put condition checking if myAge >= 18(boolean)  then we add ? after it we provide the value when the condition is pass .it is true we put our string
// after the first value when the condition pass we still want to provide the second value for when the condition is fails we do that by setting up a colon then we write the value
console.log(message);

///
const myAge1 = 15;
let msg = myAge1 >= 18 ? "you can vote" : "you cannot vote";
console.log(msg);

/// using conditional operator to run one of two functions

const age = 27;
const showPage = () => {
  console.log("show the page");
};
const showErrorPage = () => {
  console.log("showing the error page");
};
age >= 21 ? showPage() : showErrorPage();

// with  fn return value
const age1 = 20;
const showPage1 = () => {
  return "show the page";
};
const showErrorPage1 = () => {
  return "showing the error page";
};
const result = age1 >= 21 ? showPage1() : showErrorPage1();
console.log(result);

/////////////////////////////challenge/////////////////////////
const team = ["Tyler", "Porter"];
// 1. Print"Team size: 3" if less than or equal to 4
// 2. Print "Too many people on your team" otherwise
const msgTeam =
  team.length <= 4
    ? `Team size : ${team.length}`
    : "Too many people on your team";
console.log(msgTeam);
