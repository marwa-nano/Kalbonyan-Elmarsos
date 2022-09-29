// regular function:
// arguments only exists in regular functions
// arguments local variable
const add = function (a, b) {
  console.log(arguments);
};
add(11, 22, 33, 44);
//
const addition = function () {
  return arguments[0] + arguments[1];
};
console.log(addition(11, 22, 33, 44));

// arrow function: there is no local variable in arrow fn
const addA = () => {
  console.log(arguments);
};
addA(11, 22, 33, 44); // fail we don't have access to this arguments
/////////////////////////////////////////////////////

// the difference of using this keyword btn regular fn and arrow fn
const car = {
  color: "red",
  getSummary: function () {
    return `the car is ${this.color}`;
  },
};
console.log(car.getSummary());
//
// if we try to use this with  arrow fun doesn't work this keyword isn't bound
const carA = {
  color: "red",
  getSummary: () => {
    // doesn't work
    return `the car is ${this.color}`;
  },
};
console.log(carA.getSummary()); // the car is undefined

/////////////////////////
// stick then with regular fn when crfeate methods ,functions on objects
// arrow fn doen't bind arguments ,don't bind this keyword
