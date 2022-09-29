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

///////////////////////////////////////////////////////////
// 1- we query for the element we try to attach the event listener to
// 2- in this case run function when the button is clicked
// 3-use query selector to access button
// 4-use a method called addEventListener(,) it takes two arguments
// 5-the first argument is string and it is the type of event you listen to click,dclick,hover ad so
// 6-the second argument is the function to run when that event is happen(callback fn)
// 7-in tis case when some one click this button ,run this function
// 8-argument that passed to the callback function,this argument represent that event
// 9-it gives you information about that event what is and why
// 10-function(e) or function(event) e=>not descriptive
// 11-  // console.log(e); we get alot of information about e this alot of properties
// 12- target =>is actually a representation of that Dom element
// 13- event argument is useful when you want to do something with the element that the event actually fired on

document.querySelector("button").addEventListener("click", function (e) {
  // console.log("hi ,you clicked me");
  // console.log(e);
  //e.tagert gives an access to the element
  e.target.textContent = "The button was clicked";
});
