//console.log(uuidv4());

// read exisitng notes from localStorage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem("notes");
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};
// save notes to local storage
const saveNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// remove note from the list
const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate the Dom structure for a note
const generateNoteDom = function (note) {
  const noteEl = document.createElement("div");
  const textEl = document.createElement("a");
  // get a delete button showing up  alongside of the text
  const buttonEl = document.createElement("button");

  // setup the remove note button
  buttonEl.textContent = "x";
  noteEl.appendChild(buttonEl);
  buttonEl.addEventListener("click", function () {
    console.log(note);
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "unnamed note";
  }
  textEl.setAttribute("href", `/edit.html#${note.id}`);
  noteEl.appendChild(textEl);
  return noteEl;
};
// sort your notes by one of three ways
const sortNotes = function (notes, sortBy) {
  if (sortBy === "byEdited") {
    return notes.sort(function (a, b) {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    return notes.sort(function (a, b) {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "alphabetical") {
    return notes.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};
// render application notes
const renderNotes = function (notes, filters) {
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDom(note);
    document.querySelector("#notes").appendChild(noteEl);
  });
};

// Generate lastEdited msg
const generateLastEdited = function (timestamp) {
  return `last Edited ${moment(note.updatedAt).fromNow()}`;
};
