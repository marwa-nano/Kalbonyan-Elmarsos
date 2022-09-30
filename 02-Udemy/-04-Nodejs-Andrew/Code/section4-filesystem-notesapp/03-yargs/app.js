const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// console.log(process.argv);
console.log(yargs.argv);

// node app.js --help
//node app.js --version
// Customize yargs version
yargs.version("1.1.0");

// notes app read,write ,delete,list notes
// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});
///////////////////challnge////////////////////
// Challenge : Add two new cornands
// 1. Setup command to support " list " command ( print placeholder ressage for now !
// 2. Setup command to support " read " command ( print placeholder ressage for now ?
// 3. Test your work by running both commands and ensure correct output

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

console.log(yargs.argv);

///////////////notes////////////////////
// argument parsing with yargs
// npm install yargs@12.0.2
