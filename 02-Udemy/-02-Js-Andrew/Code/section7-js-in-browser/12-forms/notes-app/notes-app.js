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
// filter notes by user inputes
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

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

//////////////////////form/////////////////////////////////////
// default behavior for form is browser refresh the page and url has changed with the data in the form that entered by the user
// we handel this default behavior by adding an eventlisenter  to the form
// event that using by the form is the submit event
// submit event fired when the user take an action to submit a form by clicking submit button or hitting enter in of the inputs

document.querySelector("#name-form").addEventListener("submit", function (e) {
  // 1- cancel the default behavior of the form=> tell the browser not to refresh the full page and not to add any thing above in the url we use a method on e.preventDefault
  e.preventDefault(); // now we are allow to handle the form submission as we want
  // get access to the form data and print it to the console

  //property on form dom element is elements=> allows us to access all the fields of the form and we access them by its name
  console.log(e.target.elements.firstName.value);
  e.target.elements.firstName.value = "";
});
