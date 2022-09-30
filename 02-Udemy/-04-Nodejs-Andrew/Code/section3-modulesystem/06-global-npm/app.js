const chalk = require("chalk");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.red.inverse.bold("Success!");
console.log(greenMsg);

//////////////notes///////////////
//nodemon automatically restarting the node application when file changes in the directory are detected.
// nodemon app.js
// to stop ctrl+c
// -g ->g-flae to install global-> install package on our operating system
// npm install -g nodemon@1.18.5
// if nodemon -v give error
//The Fix
// 1. Click Windows icon and search for " PowerShell "
// 2. Right - click " PowerShell " and click " Run as administrator "
// 3. Run Set - Execution Policy Unrestricted
// 4. Rerun nodemon -v
