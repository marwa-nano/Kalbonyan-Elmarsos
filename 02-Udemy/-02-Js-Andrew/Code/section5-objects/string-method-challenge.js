// Challenge area
// isValidPassword
// length is more than 8 -and it doesn't contain the word password
// console.log(isValidPassword('asdfp'))
// console.log(isValid Password("abc123!@#$%^&*))
// console.log(isValidPassword('asdfpasdfpoijpassword"))

let isValidPassword = function (password) {
  let passLength = password.length;
  let passin = password.includes("password");
  if (passLength <= 8 || passin === true) {
    return "wrong password";
  } else {
    return "valid password";
  }
};
console.log(isValidPassword("asdfp"));
console.log(isValidPassword("abc123!@#$%^&*"));
console.log(isValidPassword("asdfpasdfpoijpassword"));

////////////////////////////////////////
let isValidPassword1 = function (password) {
  if (password.length >= 8 && !password.includes("password")) {
    return true;
  } else {
    return false;
  }
};
console.log(isValidPassword1("asdfp"));
console.log(isValidPassword1("abc123!@#$%^&*"));
console.log(isValidPassword1("asdfpasdfpoijpassword"));

/////////////////////////////////////////////////////////
let isValidPassword2 = function (password) {
  return password.length >= 8 && !password.includes("password");
};
console.log(isValidPassword2("asdfp"));
console.log(isValidPassword2("abc123!@#$%^&*"));
console.log(isValidPassword2("asdfpasdfpoijpassword"));
