// DoM  => document object model
// document ==> in dom is html document
// object ==> in dom is js object
// object in js that models are html document

// mainpulate our html from js

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
