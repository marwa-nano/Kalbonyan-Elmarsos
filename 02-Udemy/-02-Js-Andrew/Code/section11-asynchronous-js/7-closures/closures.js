// A closure is the combination of a function with the lexical scope in which it was defined.

const myFunction = () => {
  const message = "this is my message ";
  const printMessage = () => {
    console.log(message);
  };
  //  printMessage();
  return printMessage;
};

// myFunction();
const myPrintMessage = myFunction();
myPrintMessage();

/////////////////////////////////////////
const createCounter = () => {
  let count = 0;
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};

const counter = createCounter();
counter.increment;
counter.decrement;
counter.decrement;
console.log(counter.get());

// Adder
const createAdder = (a) => {
  return (b) => {
    return a + b;
  };
};

//Couriering refers to the process of transforming a single function that takes a lot of arguments to multiple functions that take a subset of those arguments.

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));

const add100 = createAdder(100);
console.log(add100(50));

const add = (a, b) => {
  a + b;
};
