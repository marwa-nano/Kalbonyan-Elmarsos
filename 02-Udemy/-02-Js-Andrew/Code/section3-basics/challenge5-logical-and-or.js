// Challenge area
let isGuestOneVegan = false;
let isGuestTwoVegan = false;
// Are both vegan?Only offer up vegan dishes.
// At least one vegan?Make sure to offer up some vegan options.
// Else,Offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only offer up vegan dishes.");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Make sure to offer up some vegan options.");
} else {
  console.log("Offer up anything on the menu");
}
