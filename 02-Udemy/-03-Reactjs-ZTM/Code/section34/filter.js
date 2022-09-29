const myArray = [1, 3, 5, 7, 9];
myArray.filter((el) => el > 4);
// return new array [5,7,9] not modified our array
myArray.filter((el) => true); // return new array [1,3,5,7,9]
myArray.filter((el) => false); // return new array []
