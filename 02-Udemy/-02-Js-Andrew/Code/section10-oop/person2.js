const Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

// prototype property it is an object put everything we want to share with the instances of this construction fn
// so i want these instances to be able to access some sort of method ,so i put that method in here
Person.prototype.getBio = function () {
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

const me = new Person("Marwa", "Mohamed", 33, ["learning", "teaching"]);

me.getBio = function () {
  return "this is fake";
};
console.log(me.getBio());

const person2 = new Person("menna", "ahmed", 23, []);
console.log(person2.getBio());
/////////////////////////////////////////////////////////////////
