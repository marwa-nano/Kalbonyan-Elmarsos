////////////////challenge//////////////////
// 1. Create a new moment
// 2. Set the month, day, and year to your birthday
// 3. Use format to print it in the following way: Jan 6, 1991
const now = moment();
const myBirthDate = moment().year(1984).month(9).date(01);
console.log(myBirthDate.format("MMM D, YYYY"));
