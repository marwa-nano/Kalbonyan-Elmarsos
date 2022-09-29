// getting the id for the notes the user is trying to edit
// subString allows you to get subString a part of exisiting string
// subString() index where you want to start,end
// first character =>index of 0, start at the second character =>start at index 1 like arrays
// first arrgument is required,second is optional specifies  where you want to end
"use strict";
const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const dateElement = document.querySelector("#last-edited");
const noteId = location.hash.substring(1);
// get all of the data stored in the local storage // to get title,body values
// localStorage is shared across all pages on that domain so we can access the data with getsavednotes
let notes = getSavedNotes();
// if that noteId equal to / matches a note if does ok ,if it doesn't redirect them back into dashboard page so they can create a new note or pick one from the list
let note = notes.find((note) => note.id === noteId);

if (!note) {
  location.assign("/index.html");
}
// else note matches then you can edit title and body

//document.querySelector("#note-title").value = note.title;
titleElement.value = note.title;

//document.querySelector("#note-body").value = note.body;
bodyElement.value = note.body;

// set the initial value when the page is loaded
dateElement.textContent = generateLastEdited(note.updatedAt);
// 1. Setup input event for title
// 2. Update note object and save notes list
titleElement.addEventListener("input", (e) => {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

bodyElement.addEventListener("input", (e) => {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

removeElement.addEventListener("click", (e) => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("/index.html");
});
// the storage event fires when any of the data in local storage changes
// this is going to allow us to update what the user see
window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    note = notes.find((note) => note.id === noteId);

    if (!note) {
      location.assign("/index.html");
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
  }
});

// when the note last updated => create a span
// 1. Add a DOM element between the title and body inputs (empty span)
// 2. Set text value: Last edited 4 hours ago
// 3. Upete value on title/body/storage change
