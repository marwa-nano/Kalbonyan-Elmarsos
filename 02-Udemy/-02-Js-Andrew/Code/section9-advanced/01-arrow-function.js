// arrow fn => is an alternative way to create a function in JavaScript,and it comes with a special syntax,making it a great candidate to alot of situations where you have simple one line functions
// regular function : const square = function(argumnet list){function body }

// arrow functions have different syntax we start with the argument list then => then {function body } we removed function keyword before arguments then we added arrow btn arguments and fn body
const squareLong = (num) => {
  return num * num;
};

console.log(squareLong(5));

// difference btn regular fn and arrow fn
//1- arrow fn => known as shorthand syntax
const square = (num) => num * num;

const people = [
  {
    name: "Marwa",
    age: 25,
  },
  {
    name: "mohamed",
    age: 32,
  },
  {
    name: "aseel",
    age: 22,
  },
];

// regular fn :
const under30 = people.filter(function (person) {
  return person.age < 30;
});
console.log(under30);

// arrow fn :
const under30a = people.filter((person) => {
  return person.age < 30;
});
console.log(under30a);

// shorthand syntax:
const under30s = people.filter((person) => person.age < 30);
console.log(under30s);

////////////////////////////challenge///////////////////
// 1- find the person with age 22
// 2- print that person name

const person22 = people.find((person) => person.age === 22);

console.log(person22);
