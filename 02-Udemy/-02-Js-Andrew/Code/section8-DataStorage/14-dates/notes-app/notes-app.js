let notes = getSavedNotes();

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
  // 1. Setup Link href to include hash with id
  // 2. Setup the assign call to include hash with id

  location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

//////////////////////////Dates in js///////////////////////
// create a date at a specific point in time
// if we provide no arguments ,it gets created to the current point in time
// we can provide a specific point int time
// const now = new Date('march 21 2000 6:25:01');

const now = new Date();
console.log(now);
console.log(now.toString());
console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`);
console.log(`Day of month: ${now.getDate()}`);
//console.log(`Day of month: ${now.getDay()}`);
console.log(`Hours: ${now.getHours()}`);
console.log(`Minute: ${now.getMinutes()}`);
console.log(`Second: ${now.getSeconds()}`);

// Unix Epoch is a specific point in time that is in the past - january 1 st of the year 1970 00:00:00
//46 console.log("Minute: $(now.getMinutes()}')
//When we represent time as a number, we use positive numbers for all points in time after this and negative numbers for all points in time before that
console.log(now.getTime()); //  timestamp no of seconds btn 2022 and 1970

const timestamp = now.getTime();

const myDate = new Date(timestamp); // pass a no
console.log(myDate.getFullYear()); // can deal with it and extract the year

// code we use when creating a new note it allows us to get time stamp and save it
//const now = new Date();
//const timestamp = now.getTime();
// code we use after read the data from local storage and we wanted to do something specfic related to the date
//const myDate = new Date(timestamp);
//console.log(myDate.getFullYear());
// when we have the time stamp .it's easy to
//figure out if one thing comes before or after the other by using < or >
