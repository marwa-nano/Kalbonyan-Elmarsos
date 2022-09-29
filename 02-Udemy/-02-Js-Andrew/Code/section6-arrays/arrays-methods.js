// push , pop  manipulate the array from the end
const notes = ["Note 1", "Note 2", "Note 3"];
notes.push("my new note");
notes.push("another notes");
console.log(notes);
notes.pop();
console.log(notes);
console.log(notes.pop()); // to use return value from pop
console.log(notes);
//////////////////////////

// shift ,unshift manipulate the array from the end
console.log(notes.shift());
console.log(notes);

notes.unshift("my first note");
console.log(notes);

//////////////////////////////

/// manipulate with middle of the array
// splice to add items to middle of the array or remove from any place of the array
// The first argument to splice is where you're trying to take the action.==> you need to provide the index
// the second argument for number of items you need to removing
const notes1 = ["note1", "note2", "note3"];
console.log(notes1.splice(1, 1)); // start at item its position is one and remove one item
console.log(notes1);
notes1.splice(1, 0, "this is my new second item"); // go to item1 ,don't remove any thing then add this
console.log(notes1);
notes1.splice(1, 1, "replace this item with me");
notes1[1] = "the thing as you do above";
console.log(notes1);
