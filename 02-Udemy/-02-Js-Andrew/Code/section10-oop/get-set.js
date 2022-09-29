// getter-setter in js aalows us to customize what happens when someone sets an object property or reads its value
// to make it custome getter-setter when we get property values or set property values we have to use set or get before fn name
// this is get location() allows us to override what happened when someone try to fetch  a value
const data = {
  locations: [],
  get location() {
    return this._location;
  },
  set location(value) {
    // value = value.trim();
    this._location = value.trim();
    this.locations.push(this._location);
  },
};
// code that uses the data object
data.location = "cairo     "; // set / write
data.location = "   new york ";
console.log(data.location); // read/ get
console.log(data);

// great behavior allows us to perform some things like validation ,
