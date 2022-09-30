const add = require("./utils");
const sum = add(3, 5);
console.log(sum);
// const returnedName = require("./utils");
// const name = "Andrew";
// console.log(returnedName);
// All of your files, which you can refer to as modules, have their own scope. So app JS has its own scope with its own variables and utils JS has its own scope with its own variables.App JS cannot access the variables from utils.
// if i need to do that we must explicity export

// if we want to run another file we have to require it to load to actuallyget loaded it
// ./-> notes-app name of the file we need to run
