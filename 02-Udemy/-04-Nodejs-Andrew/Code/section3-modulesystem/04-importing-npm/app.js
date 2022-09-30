const validator = require("validator");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);
console.log(validator.isEmail("Andrew@gmail.com"));

console.log(validator.isURL("https/mead.io"));

///////////////////////////notes////////////////////////////
// npm modules
// 1- we have to initialize npm in our project from root
// npm init -->create single config file we can use to manage all of dependencies pakakage.json
// we have to install all of the modules we need to use
// npm i validator@10.8.0 -> creates package-lock.json, node_modules->This is a folder which contains all of the code for the dependencies we installed.
// validator pakage conatains many of 100 methods we can use
// ex One of the methods is is email.
// This allows us to determine if a given email is valid
// So as email returns true, if the string is an email, it returns false.If the string is not.
