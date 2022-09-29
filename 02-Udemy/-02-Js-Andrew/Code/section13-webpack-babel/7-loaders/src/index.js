// JavaScript modules system.It gives us two new things.We have the import statement and the export statement.

// how to grap from default export
// import square from './utilites'
import otherSquare, { add, name } from "./utilites"; // grap multiple things
// Now I have access to both add and name inside of index.js and I can do something with them.
console.log("index.js");
console.log(add(32, 1));

console.log(name);
// import { scream } from "./scream";  from named export
import scream from "./scream"; //  from default  export
console.log(scream("Marwa Mohamed"));
console.log(otherSquare(10));

//If I find myself with one big thing that a file is trying to export like a class or a function, I'll typically use the default export for that.If I find myself needing to export five or six different functions or classes, then I'll usually use named exports for all of those.
