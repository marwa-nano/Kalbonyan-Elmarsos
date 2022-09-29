const notes = ["Note 1", "Note 2", "Note 3"];
// search for an item in the array using indexOf method
notes.indexOf("Note 2"); // return position / index of the item
console.log(notes.indexOf("Note 2"));
console.log(notes.indexOf("note 2")); // return negative no. because that item doesn't exist

// array of objects
const notes1 = [
  {},
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better.",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];
console.log(notes1);
// search for the empty object in the array
console.log(notes1.indexOf({})); // i get -1 why ?
console.log({} === {}); // return false
// objects are the same if they the same exist object in memory location
let someObject = {};
let otherObject = someObject;
console.log(someObject === otherObject); // return true the same object

// use findIndex to work with array of objects
// findIndex as like forEach it takes function as its argument
notes.findIndex(function (note, index) {
  console.log(note); // go through all the item
});

const index = notes1.findIndex(function (note, index) {
  console.log(note);
  return note.title === "Habbits to work on";
});
console.log(index);
// Find index looks for the first match it finds when it finds that it stops running the function
