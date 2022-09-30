const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
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

yargs.parse();
//console.log(yargs.argv)

/////////////////////notes////////////
// setting up yards to support some options for each of our commands.
// we set up another property on the configuration object we pass to command. This property  is called builder .
// builders Value is an object and on that object we can define all of the options we want this given command to support.
// demandOption by default - false ,true you must provide  (required)
// type:'string' to enforce string type
// node app.js add --title -->by default -title:true (boolean)
// node app.js add --title="my first note"

// 27 Challenge : Add an option to yaras
//  1. Setup a body aption for the add command
//  2. Configure a description , make it required , and for it to be a string
// 3. Lng the body value in the handler function
// 4. Test your work !
// node app.js add --title="work" --body="do your homework"
