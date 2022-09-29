// scope for variables
// js =>lexical scope (static scope)=>
// this is the idea that a variable defined in one part of your
//program might not be accessible everywhere else in your program
// In a scope you can access variables defined in that scope,or in any parent/ansector scope
// Global Scope(varone)
// Local Scope(varTwo)
// lcalscope(varfour)
// local scope(varThree)

let varOne = "varone";

if (true) {
  console.log(varOne);
  let varTwo = "vartwo";
  console.log(varTwo);

  if (true) {
    let varFour = "varfour";
    console.log(varFour);
    console.log(varOne);
    console.log(varTwo);
  }
}
if (true) {
  let varThree = "varthree";
  console.log(varThree);
}
console.log(varTwo);
