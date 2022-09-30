const chalk = require("chalk");
const getNotes = require("./notes.js");

const command = process.argv[2];

//console.log(process.argv[2]);

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}

////////////////////notes///////////////
// how to get inputs from user with command line argument
// on process object has a lot of property and methods -> there is a property and that's where we can access all of the command line arguments passed in to our app.
// argv argument vector array that contains all of the arguments
