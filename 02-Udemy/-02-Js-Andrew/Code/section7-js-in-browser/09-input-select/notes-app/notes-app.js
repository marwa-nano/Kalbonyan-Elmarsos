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

//target button by its id
document.querySelector("#create-note").addEventListener("click", function (e) {
  e.target.textContent = "The button was clicked";
});

document.querySelector("#remove-all").addEventListener("click", function () {
  // target elements by it's class
  document.querySelectorAll(".note").forEach(function (note) {
    note.remove();
  });
});

///////////////////////////////////////////////////
// how we can capture the value in js when the user input or type some text
// addEventListener, there are two event with text based input are change event ,
// change  event fires => only when  i click away or remove focus from the input
//document.querySelector("#search-text").addEventListener("change", function (e) {
// input change fires on every single character change when i remove single charcter is fired

//e.tagert gives an access to the element and we want to acess its value property gives us the latest information
document.querySelector("#search-text").addEventListener("input", function (e) {
  console.log(e.target.value);
});
