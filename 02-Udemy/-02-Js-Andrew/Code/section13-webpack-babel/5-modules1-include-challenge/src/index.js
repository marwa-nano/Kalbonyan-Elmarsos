// JavaScript modules system.It gives us two new things.We have the import statement and the export statement.
// The import statement can be used to grab something from another file so indexed JS can use in port to grab a function or a variable from some other file.
// The export statement can be used to export something from a file so we can export a function from utilities.
// import "./utilites.js";=

// import "./utilites"; We have to specify the things we want from that file

import { add, name } from "./utilites"; // grap multiple things
// Now I have access to both add and name inside of index.js and I can do something with them.
console.log("index.js");
console.log(add(32, 1)); // undefined without export in another file
//modules's system, each file has its own separate scope, so no longer are variables shared between files and this is a good thing Now, this separate scope doesn't mean we can't share code between files.
// Currently, utilities has no exports, meaning that index is actually not going to be able to access add even if it wanted to.We're going to go ahead and change that by exporting.
// export const add = (a, b) => a + b; // All we're saying is that other files should also be able to access this if they need it.
console.log(name);

// So this gives us a super flexible way to communicate between files.

//////////////////////////////challenge////////////////////////////////
// 1. Create new file called scream.js
// 2. Export a "screan" function that takes a string
// a. Convert that string to upper case
// b.Add"!" onto the end
// 3. Import scream into index.js and use it
import { scream } from "./scream";
console.log(scream("Marwa Mohamed"));
