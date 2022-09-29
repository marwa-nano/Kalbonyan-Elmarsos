// prototypl inheritance ==form of inhertitance

const Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

// prototype property it is an object put everything we want to share with the instances of this construction fn
// so i want these instances to be able to access some sort of method ,so i put that method in here
Person.prototype.getBio = function () {
  // return `${this.firstName} is ${this.age}`;
  let bio = `${this.firstName} is ${this.age}`;
  this.likes.forEach((like) => {
    bio = bio + `${this.firstName} likes ${like}`;
  });
  return bio;
};
Person.prototype.setName = function (fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};
Person.prototype.location = "Egypt";
// this method is shared with these two instances and they can access it
const me = new Person("Marwa", "Mohamed", 33, ["learning", "teaching"]);
//me.firstName= 'lili'
me.getBio = function () {
  return "this is fake";
};
console.log(me);
console.log(me.age);
console.log(me.getBio());
console.log(me.location);
me.setName("Heba yahia");
console.log(me);

// new operator return value implicity
const person2 = new Person("menna", "ahmed", 23, []);
console.log(person2);
console.log(person2.getBio());
console.log(me.location);
// we have 2 instances of our object of type person
/////////////////////////////////////////////////////////////////

// split method takes one argument
// '123456'.split()  ==>  Array ( "123456"]
// '123456'.split("") ==> Array ["1", "2", "3", "4", "5", "6"]
// '123456'.split('5') ==>array ['1234','6']
