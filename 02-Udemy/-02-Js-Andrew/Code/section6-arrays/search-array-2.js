const notes = [
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
// search  in array of objects
// findIndex search for index
// const findNote = function (arrayOfObj, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

// find search for item directly
// const findNote = function (arrayOfObj, noteTitle) {
//   const note = notes.find(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return note;
// };
// is equal to
const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const note = findNote(notes, "Office modification");
const note1 = findNote(notes, "some thing not found ");

console.log(note);
console.log(note1);
