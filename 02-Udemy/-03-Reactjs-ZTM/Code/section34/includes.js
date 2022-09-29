// method takes single arguemnt ,second arg index which we want start search
// it checks inside the array to see if the element that we passed it exists in our array.

const myArray = [1, 2, 3, 4, 5, 6];

myArray.includes(3); // return true

myArray.includes(9); // return false
myArray.includes(2, 0); // return true
