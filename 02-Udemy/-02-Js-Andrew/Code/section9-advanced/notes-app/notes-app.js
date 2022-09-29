"use strict";

let notes = getSavedNotes();
// filter notes by user inputes
const filters = {
  searchText: "",
  sortBy: "byEdited",
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", (e) => {
  const id = uuidv4();
  const timeStamp = moment().valueOf();
  notes.push({
    id: id, // each note has a unique id
    title: "",
    body: "",
    createdAt: timeStamp,
    updatedAt: timeStamp,
  });

  saveNotes(notes);
  // 1. Setup Link href to include hash with id
  // 2. Setup the assign call to include hash with id

  location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  //console.log(e.target.value);
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

// 1. Add createdAt and updatedAt to the new notes (store timestamp)
// 2. Update updatedAt when someone edits a title or body
// 3. Delete all old notes before testing
