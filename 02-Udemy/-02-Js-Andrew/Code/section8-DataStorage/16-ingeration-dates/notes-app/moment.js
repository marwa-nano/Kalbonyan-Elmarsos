// current point in time
// const now = new Date(); // built in js date
// instead using moment js library
const now = moment(); // current point in time
// get a string representation of this moment in time
console.log(now.toString()); // string printing all information about the current  date time
now.minute(1); // set minute to 1 // write
now.minute(); // get the minute // read
console.log(now.minute());
// add method allows us to add a amount of a given unit add 7 days or add 2 years ,subtract like this
// add,subtract  both take two arguments (the first is the amount , the second is the unit )
now.add(1, "year");
console.log(now.toString());
now.add(1, "year").subtract(20, "days"); // chaining ==>multiple methods calls
console.log(now.toString());

// format()method
console.log(now.format()); // we can pass in to a string which we want represent date on it (customize representationof the date ) by using simple patterns
// MM =>01,02,...
// MMM => Jan Feb,Mar,....
// MMMM => January, February,....
// November 3rd,2003
console.log(now.format("MMMM Do YYYY"));
console.log(now.fromNow());

// timestamp in moment
const nowTimestamp = now.valueOf();
console.log(nowTimestamp); // from 1970
console.log(moment(nowTimestamp).toString());
