// learn how to create subclass using prototype-inheritance
// prototype chain for person class:
// myperson-->Person.prototype -->object.prototype-->null
// person -->people different type of person (teacher - employee -engineer-student)
// create subclass of person but make it specific for employee ,we track their current job title
// syntactical sugar
// class defination inside of it we create constracutor
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}`;
    this.likes.forEach((like) => {
      bio = bio + `, ${this.firstName} likes ${like}`;
    });
    return bio;
  }
  //setName(fullName) {
  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// subclass inherit from person class using extends -> reserved keyword -->class we want to extend from it
// class Employee extends from person inherit the same behavior of person class we can overrride methods or providing new method
// in subclass constructor function we have to call parent constructor fn by using super()
//We override the existing one,still calling it to set up its attributes,then we define our own.
class Employee extends Person {
  constructor(firstName, lastName, age, position, likes = []) {
    super(firstName, lastName, age, (likes = []));
    this.position = position;
  }
  getBio() {
    return `${this.firstName} is a ${this.position}`;
    // Marwa is a Teacher
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}

//By extending an existing class,we can override its behavior and we can also add on brand new behavior

// instance
const myPerson = new Person("Marwa", "Mohamed", 38, ["Teaching"]);
console.log(myPerson);
console.log(myPerson.getBio());

const me = new Employee("Andrew", "Mead", 33, "Teacher", [
  "learning",
  "teaching",
]);
console.log(me);
// me.setName("Alex Turner");
console.log(me.getBio());
console.log(me.getYearsLeft());
console.log(me.fullName);

const person2 = new Person("menna", "ahmed", 23, []);
console.log(person2.getBio());
person2.fullName = "Alex Turner";
console.log(person2.getBio());

/////////////////////////////////////////////////////////////////
