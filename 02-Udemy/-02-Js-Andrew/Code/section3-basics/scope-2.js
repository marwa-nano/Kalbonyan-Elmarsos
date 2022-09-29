// Global Scope (fName)
// Local Scope (fName)
// Local Scope
// Local Scope

// variable shadowing in JavaScript. when    using the same variable in different scope
// It's when a variable in a local scope uses its value instead of a variable in a parent scope.So the local variables value is shadowing over the parents,basically hiding it from existence.

let fName = "Ahmed";

if (true) {
  let fName = "Marwa";
  if (true) {
    fName = "Sedra";
    console.log(fName);
  }
}
if (true) {
  console.log(fName);
}
