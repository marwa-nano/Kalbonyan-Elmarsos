// method=> object property whose value is a function ex: checkavaliability
// you can access object proerty inside (fun) method by using this keyword inside of mrthod we have access to (this) this refrences the object the method is defined on, this => way to access object properties inside a method
let restaurant = {
  name: "Abs",
  guestCapacity: 75,
  guestcount: 0,
  checkavaliability: function (partySize) {
    //console.log(this); // access object itself
    //console.log(this.name); // access object peroperty
    // return true;
    let seatLeft = this.guestCapacity - this.guestcount;
    return partySize <= seatLeft;
  },
  seatParty: function (partySize) {
    this.guestcount = this.guestcount + partySize;
  },
  removeParty: function (partySize) {
    this.guestcount = this.guestcount - partySize;
  },
};
////////////////challenge////////////////////////////////
// seatParty
// removeParty
restaurant.seatParty(72);
let rStatus = restaurant.checkavaliability(4);
console.log(rStatus);
restaurant.removeParty(5);
console.log(restaurant.checkavaliability(4));
