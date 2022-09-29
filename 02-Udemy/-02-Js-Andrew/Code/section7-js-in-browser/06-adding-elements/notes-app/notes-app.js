const notes = [
  {
    title: "my next trip",
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

//  Query and remove method return single node
const p = document.querySelector("p");
//console.log(p);
p.remove(); // remove node
// it deletes the first paragraph // queryselector it matches the first match it finds

// const h1 = document.querySelector("h1");
// h1.remove();
//console.log("this is from different location");

// Query all elements tag return a list of all nodes
// Query all and remove
const ps = document.querySelectorAll("p");
// use forEach method to iterate for each node
ps.forEach(function (p) {
  p.remove();
});

// read text values for elements
const h3s = document.querySelectorAll("h3");
h3s.forEach(function (h3) {
  console.log(h3.textContent);
});

// write text values to the element
const h4s = document.querySelectorAll("h4");
h4s.forEach(function (h4) {
  h4.textContent = "*********";
});
///////////////////////////////////////////////////
// add new element we have 3 steps:
// 1- create this element
// 2- update its content give it some sort of text value
// 3- put it in somewhere pick the place to put it use append child
const newParagraph = document.createElement("p");
newParagraph.textContent = "this is a new element from javascript";
// append child adds item as the last item inside the element
document.querySelector("body").appendChild(newParagraph);
