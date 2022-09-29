// objects used to store related  piece of data  in single value
//This allows us to model things from the real world, like books,cars or people for a car.
//to create an object
let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 365,
};
// to access object use dot notation
console.log(myBook);
console.log(myBook.pageCount);
// usel in real world
console.log(`${myBook.title} By ${myBook.author}`);

// change object property
myBook.title = "Animal Farm";

console.log(`${myBook.title} By ${myBook.author}`);

// Challenge area
// name, age, location
// Andrew is 27 and lives in Philadelphia.
// Increase age by 1 and print message again
let user = {
  fName: "Ahmed",
  age: 38,
  location: "Cairo",
};
console.log(`${user.fName} is ${user.age} and lives in ${user.location}.`);
user.age = user.age + 1;
console.log(`${user.fName} is ${user.age} and lives in ${user.location}.`);
