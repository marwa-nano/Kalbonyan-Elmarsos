const notes = getSavedNotes();

// filter notes by user inputes
const filters = {
  searchText: "",
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  const id = uuidv4();
  notes.push({
    id: id, // each note has a unique id
    title: "",
    body: "",
  });

  saveNotes(notes);

  renderNotes(notes, filters);
  location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});

// 1. Setup Link href to include hash with id
// 2. Setup the assign call to include hash with id
