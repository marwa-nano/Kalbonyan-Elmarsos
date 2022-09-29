// getting the id for the notes the user is trying to edit
// subString allows you to get subString a part of exisiting string
// subString() index where you want to start,end
// first character =>index of 0, start at the second character =>start at index 1 like arrays
// first arrgument is required,second is optional specifies  where you want to end
const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);
// get all of the data stored in the local storage // to get title,body values
// localStorage is shared across all pages on that domain so we can access the data with getsavednotes
const notes = getSavedNotes();
// if that noteId equal to / matches a note if does ok ,if it doesn't redirect them back into dashboard page so they can create a new note or pick one from the list
const note = notes.find(function (note) {
  return note.id === noteId;
});
if (note === undefined) {
  location.assign("/index.html");
}
// else note matches then you can edit title and body

//document.querySelector("#note-title").value = note.title;
titleElement.value = note.title;
//document.querySelector("#note-body").value = note.body;
bodyElement.value = note.body;
// 1. Setup input event for title
titleElement.addEventListener("input", function (e) {
  // 2. Update note object and save notes list
  note.title = e.target.value;
  saveNotes(notes);
});

bodyElement.addEventListener("input", function (e) {
  note.body = e.target.value;
  saveNotes(notes);
});

removeElement.addEventListener("click", function (e) {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("/index.html");
});
/////////////////challenge/////////////////
// 1. Setup input event for title
// 2. Update note object and save notes list
// 3. Repeat steps 1-2 for body
// 4. Setup a remove button that remotes notes and sends uses back to home page
