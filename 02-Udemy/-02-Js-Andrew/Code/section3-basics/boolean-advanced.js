let isAccountLocked = false;
let userRole = "user";

// if (isAccountLocked) {
//   console.log("your account is locked");
// } else {
//   console.log("welcome!");
// }

/////////////////////////////////
// if(true){}
// if(){} else{}
// if(){} else if{} else{}
///////////////////////////////////

if (isAccountLocked) {
  console.log("your account is locked");
} else if (userRole === "admin") {
  console.log("Welcome Admin");
} else {
  console.log("welcome");
}
///////////////////////////////
let temp = 20;
// It is freezing outside!
// It is hot outside!
// Go for it.It is pretty nice.

if (temp <= 10) {
  console.log("It is freezing outside!");
} else if (temp >= 33) {
  console.log("It is hot outside!");
} else {
  console.log("Go for it.It is pretty nice.");
}
