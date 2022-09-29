// looping with array using forEach method it takes single argument and it is a function run some code for each item in the array
const notes = ["Note 1", "Note 2", "Note 3"];
// const doThis = function () {};
// notes.forEach(doThis)
// no need to declare a variable before use it
// then we can do that:
notes.forEach(function () {
  console.log(
    "testing for the function ,it will be calling as no of items in the array"
  );
});
//  then passing a function into a function =>when we do this ,we creating what's known as callback function
//So a callback function is nothing more than a function like it's passed to a function. we never call it intead it passing into foreach API
// it takes two argument item in the array ,position of the item
notes.forEach(function (item) {
  console.log(item);
});

notes.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});

// for loop to iterate ,forEach using with arrays
// count = count +1 => count ++
// count from 0 to 2
for (let count = 0; count <= 2; count++) {
  console.log(count);
}
//count from 2 to 0
for (let count = 2; count >= 0; count--) {
  console.log(count);
}

//using for loop with arrays
for (count = 0; count < notes.length; count++) {
  console.log(notes[count]);
}
// count in reverse
for (count = notes.length - 1; count >= 0; count--) {
  console.log(notes[count]);
}
