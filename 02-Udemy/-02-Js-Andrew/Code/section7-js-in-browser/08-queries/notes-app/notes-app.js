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

/////////////////////////////////////////////////////
// how to query element which is more than one on the page
// deal with them as a list of array and use bracket notation to select it
// for ex you need second button then we choose index of one
//document.querySelectorAll("button")[1].addEventListener("click", function () {
// this code is perfect but what about if i change the order of the buttons on the html file ,then the problem happened whice is they revese the performing action they do
//document.querySelector("button").addEventListener("click", function (e) {
// so this way is perfect if you have one element from its type
// so we need way to choose the element specific without any conflict
// how we can target elements with out any problem,we can do that by using ids and classes
// id is a unique identifier to each element on your page
////////////////////////
// we can target elements by classes it's useful to target multiple elements at the same time

//target button by its id
document.querySelector("#create-note").addEventListener("click", function (e) {
  e.target.textContent = "The button was clicked";
});

//target button by it's id
document.querySelector("#remove-all").addEventListener("click", function () {
  //console.log("Delete all Notes");
  // target elements by it's class
  document.querySelectorAll(".note").forEach(function (note) {
    note.remove();
  });
});

//////////////////////////////////////////////////
// -- Single
// P
// #replace
// .item

//-Multiple --
// p#order
// button.inventory
// histitle.application
// h1.application title
////////////////////////////////////////
