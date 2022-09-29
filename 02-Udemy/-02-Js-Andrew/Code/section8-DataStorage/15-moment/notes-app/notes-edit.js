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
let notes = getSavedNotes();
// if that noteId equal to / matches a note if does ok ,if it doesn't redirect them back into dashboard page so they can create a new note or pick one from the list
let note = notes.find(function (note) {
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
// the storage event fires when any of the data in local storage changes
// this is going to allow us to update what the user see
window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    note = notes.find(function (note) {
      return note.id === noteId;
    });
    if (note === undefined) {
      location.assign("/index.html");
    }
    titleElement.value = note.title;
    bodyElement.value = note.body;
  }
});

/// how to listen for changes to local storage that's allow us to keep all of our tabs in sync
// same note open in multiple tabs and i changes the text to any text currently itn't reflected any where else even though it is indeed saved
// currently we need to manually refresh the page to see the new data
// to get this done we are going to listening for an event that allows us to do something when localStorage changes
// in order to actually attach this event ,we have to figure out what to attach it to
// so we need another global variable provided by the browser to us this is window
// window global contains all sorts of things related to the browser window
//ex on window we can get the browsers height and width
// window.innerHeight==>return no back in px
//window.innerWidth =>get value in px
//window object get all sorts of information about the window
// on window wee have all other global variable we have been used
// window.consol.log('test')
//window.document=== document==>true
