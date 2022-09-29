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

//////////////////
// sort Method with array doen't do any thing we should provide a compare fn as argumrnt
// sort deal with 2 object fromm the array at the time to compare them a,b
// a ex: note1 ,b => note2
// depend on which comes first we have 3 values
// -1 => if a should come first we return -1
//  1 => if b should come first we return 1
//  0 => if both of them don't have order change ,they are identical in order we return 0

// how we determine who comes first ?
// we use < or > to figure out whose string come first
////////////////////////////
console.log("a" < "b"); // true
console.log("a" < "A"); // false always uppercase comes first
console.log("March" < "January"); // false j before m
// capitalization is important so we must convert everything  to lowercase before we do any comparasion
////////////////////////////////////

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};
sortNotes(notes);
console.log(notes);
