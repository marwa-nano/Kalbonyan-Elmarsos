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

// how we can save our users data and fetch it using local storage
// when we working with any data storage mechanism like local storage
// we want to be able to perform these 4 operation these are crud operation
// CRUD=> Create,Read,Update,Delete
// local storage can perform all of these operation
// all methods we are using lives on localStorage global variable this is provided to us by the browser
// much like document provided to us by browser we can access methods on that object
// we start with the c in crud which is create
// to create data with local storage use localStorage.setItem method
// setItem method take 2 arguments(,) first argument is the key,the second argument is the value
// both are being string we will save for ex user's location (key) is the same for all users ,value is to be different come from input
// we assume using static location =>cairo
// we need to save this data to have this line run
// localStorage.setItem("location", "cairo");
// how can read data previsouly saved =>R for read
// to read data we use another method on the local storage object called=>getItem
// getItem takes only one argument the key in this case looking for the location that was stored
// the value is what comes back from the getItem =>return value
// console.log(localStorage.getItem("location"))
// reading data from localStorage and print it to the console
// to know what data in your localStorage you can use storage tab in the developer tool
// u => for upate you can use setItem for set new data
// D =>for delete how we delete data previsouly saved by using removeItem method
// removeItem takes a single argument the key for the data you want to remove
// we can also delete all the data stored in local storage by using clear property is a method doesn't take any argument
// console.log(localStorage.getItem("location"));
// localStorage.removeItem("location"); // value =>null
// localStorage.clear; // delete every thing
// at this point we stored only strings in localstorage because actually localStorage support only strings
// what about of we need to store array of objects it is n't be useful unless if we convert our array into string there is avery simple way to do that
// there are two methods in js to do that, the first takes our array and convert it into string
// the second takes a string and converts it to array

//assume we want to store this object in our localStorage
// const user = {
//   name: "Marwa",
//   age: 38,
// };
// to do that the first thing we have to do use a method on a global variable called json
// json ==>javascript object notation =>way to convert our objects into a string
// two method parse,stringify
// stringify => takes in your object or your array and it returns (string)convert it into string
// const userJSON = JSON.stringify(user);
// console.log(userJSON); // we have a string similar to an object, then we can save it in our localstorage
// localStorage.setItem("user", userJSON);
// read data from localstorage
// userJSON is a string so i can't access userjson.name or userjson.age to get these two values
const userJSON = localStorage.getItem("user");
// to do that we have to convert this userJSON back into object using the other method parse
const user = JSON.parse(userJSON); // now user is actual object
console.log(`${user.name} is ${user.age}`);

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

///// dropdown///////////
document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});
