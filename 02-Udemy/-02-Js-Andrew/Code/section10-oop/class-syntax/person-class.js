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
  setName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

// instance
const myPerson = new Person("Marwa", "Mohamed", 38, ["Teaching"]);
console.log(myPerson);
console.log(myPerson.getBio());

const me = new Person("Marwa", "Mohamed", 33, ["learning", "teaching"]);
me.setName("Alex Turner");
console.log(me.getBio());

const person2 = new Person("menna", "ahmed", 23, []);
console.log(person2.getBio());
/////////////////////////////////////////////////////////////////
