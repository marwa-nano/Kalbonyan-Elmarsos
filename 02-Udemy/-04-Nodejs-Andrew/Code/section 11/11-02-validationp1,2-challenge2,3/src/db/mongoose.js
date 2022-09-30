const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  // useUnifiedTopology: true, unsupported
  // useCreateIndex: true,
});

// create collection
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.length < 6) {
        throw new Error("password must be more than 6 char");
      }
    },
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("password must not contain password keyword");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (validator.isEmail(value)) {
        throw new Error("Email not valid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be positive number");
      }
    },
  },
});

// const me = new User({
//   name: "Ahmed",
//   age: 38,
//   email: "MyEmail@gmail.com",
//   password: " lk45frefd",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task = new Task({
  description: "Learn node js ",
  completed: false,
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log(error);
  });

//////////////validator//////////////
// node src/db/mongoose.js
// npm i validator
///////////////////challenge2///////////////
// Goal : Add a password field User
// 1. Setup the field as a required string
// 2. Ensure the length is greater than 6
// 3. Trim the password
// 4. Ensure that password doesn't contain " password "
// 5. Test your work !
/////////////////////////////
///// challenge 3/////////////////////
// Goal : Add validation and sanitization to task
// 1. Trim the description and make it required
// 2. Make completed optional and default it to false
// 3. Test your work with and without errors
