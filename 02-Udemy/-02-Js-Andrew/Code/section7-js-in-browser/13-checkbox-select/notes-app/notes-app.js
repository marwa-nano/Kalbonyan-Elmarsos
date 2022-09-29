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
// filter notes by usser inputes
const filters = {
  searchText: "",
};

// function to filter user inputes
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  //console.log(filteredNotes);
  // innerHtml allows us to set new html value
  document.querySelector("#notes").innerHTML = "";
  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};
renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  e.target.textContent = "The button was clicked";
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

// checkbox=>checked boolean its value true if checked ,false if unchecked
document.querySelector("#for-fun").addEventListener("change", function (e) {
  console.log(e.target.checked);
});
