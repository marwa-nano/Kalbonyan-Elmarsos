// / Challenge : Use the chalk library in your project
// / 1. Install version 2.4.1 of chalk
// / 2. Load chalk into app.js
// 7 3. Use it to print the string " Success ! " to the console in green
// / 4. Test your work .
// 7
// / Bonus : Use docs to ress around with other styles . Make text bold and inversed .

const chalk = require("chalk");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.bgRed.underline.inverse.bold("Success!");
console.log(greenMsg);

///////////////////notes//////////////////////
// nodes_modules ->generated directory->npm generates it
// we can recreate this folder depened on pakage.json and package-lock.json
// to recreate => npm install
// chalk =>Chalk is a little utility that allows us to customize how text gets printed to the console when working with Node.
