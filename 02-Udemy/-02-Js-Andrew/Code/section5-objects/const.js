///// let ////////////////
let isRaining = true;
isRaining = false;
console.log(isRaining);

////////// const ///////////////
const isRaining1 = true;
// thids is illegal with const
isRaining1 = false; /// you can't reassign const after it created it's value never to change
console.log(isRaining1);
//we get
//  TypeError: Assignment to constant variable.
/////////////////////////////////////
const person = {
  age: 27,
};

person.age = 28; // valid
// person={}  invalid
console.log(person);
