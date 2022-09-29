//const notes
// let notes = [];
const notes = getSavedNotes();

// filter notes by usser inputes
const filters = {
  searchText: "",
};

// function to filter user inputes
// const renderNotes = function (notes, filters) {
//   const filteredNotes = notes.filter(function (note) {
//     return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
//   });
//   //console.log(filteredNotes);
//   // innerHtml allows us to set new html value
//   document.querySelector("#notes").innerHTML = "";

//   filteredNotes.forEach(function (note) {
//     const noteEl = generateNoteDom(note);
//     document.querySelector("#notes").appendChild(noteEl);
//   });
// };
renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  // e.target.textContent = "The button was clicked";
  // 1. push new item into notes array
  notes.push({
    title: "",
    body: "",
  });
  // 2. save new notes array to the local storage
  //localStorage.setItem("notes", JSON.stringify(notes));
  saveNotes(notes);
  // 3. render notes
  renderNotes(notes, filters);
});

///////////////////////////////////////////////////
// how we can capture the value in js when the user input or type some text
// addEventListener, there are two event with text based input are change event ,
// change  event fires => only when  i click away or remove focus from the input
//document.querySelector("#search-text").addEventListener("change", function (e) {
// input change fires on every single character change when i remove single charcter is fired
//e.tagert gives an access to the element and we want to acess its value property gives us the latest information
//console.log(e.target.value);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

///// dropdown///////////
document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});
