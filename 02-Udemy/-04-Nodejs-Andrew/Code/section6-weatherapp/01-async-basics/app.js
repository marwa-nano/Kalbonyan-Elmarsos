console.log("starting");
setTimeout(() => {
  console.log("2 seconed timer");
}, 2000);
setTimeout(() => {
  console.log("zero second timer ");
}, 0);
console.log("stopping");

///////////////////notes/////////////////////////////
//In synchronous programming model(blocking). One line runs after the next, regardless of how long each line takes to execute.

//asynchronous functions that Node provides, and that is set time out.Set time out allows us to run some code after a specific amount of time has passed and set time out is indeed a function, so let's call it as such and it takes in two arguments and both are required.The first is a function.So let's go ahead and for the moment just set up an arrow function right here like this.And the second is a number.It's the number of milliseconds you want to wait before the callback gets executed.
// $ node app.js
// starting
// stopping why ??? although  zero second
// zero second timer
// 2 seconed timer

//We have our call stack, we have the Node APIs, our callback queue and our event loop, all of which work in to get our asynchronous programs running.

//synchronous, the only of these for we need to worry about is the call stack.
//The call stack is a simple data structure provided by the V eight JavaScript engine.The job of the call stack is to track the execution of our program, and it does that by keeping track of all of the functions that are currently running.
