// 1. Create class for students
// 2. Track student grade. 0-100
// 3. Override bio to print a passing or failing message. 78 and above "Andrew is passing the
// 4. Create "updateGrade" that takes the amount to add or remove from the grade
// Create student
// Print status (failing or passing)
// Change grade to change status
// Print status again

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

// student subclass
class Student extends Person {
  constructor(firstName, lastName, age, grade, likes = []) {
    super(firstName, lastName, age, (likes = []));
    this.grade = grade;
  }
  updateGrade(change) {
    // this.grade = this.grade + change;
    this.grade += change;
  }
  getBio() {
    if (this.grade >= 78) {
      return `${this.firstName} is passing the class`;
    } else {
      return `${this.firstName} is failing the class`;
    }
    // another solution using ternary operator
    // const  gstatus= this.grade>= 78 ? 'passing' : 'failing'
    // return `${this.firstName} is ${gstatus} the class.`
  }
}

const me = new Student("Marwa", "Mohamed", 38, 90, []);
me.updateGrade(-20);
console.log(me);
console.log(me.getBio());
/////////////////////////////////////////////////////////////////
