const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    //minlength: 7,
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
    // validate(value) {
    //   if (validator.isEmail(value)) {
    //     throw new Error("Email not valid");
    //   }
    // },
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

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});
// create collection
const User = mongoose.model("User", userSchema);

module.exports = User;
