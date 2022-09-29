//  filter => flexible search
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

// filter Method create new array it doen't do any change on your array
const filteredNote = notes.filter(function (note, index) {
  //return true; //all matches
  return false; // all note doen't match return empty array
});
console.log(filteredNote);

// now let's remove return staic boolean above
const filteredNotes = notes.filter(function (note, index) {
  const isTitleMatch = note.title.toLowerCase().includes("ne");
  const isBodyMatch = note.body.toLowerCase().includes("ne");
  return isTitleMatch || isBodyMatch;
});
console.log(filteredNotes);
///////////////////////////

// put the above code into a function to make it reusable not a static string
const findNotes = function (notes, query) {
  const filteredNotes = notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
  return filteredNotes;
};
//// we able to remove return and make it as  below they are the same

// const findNotes = function (notes, query) {
//   return notes.filter(function (note, index) {
//     const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
//     return isTitleMatch || isBodyMatch;
//   });
//
// };
console.log(findNotes(notes, "work"));
