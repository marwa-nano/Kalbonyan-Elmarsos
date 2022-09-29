// product =>object.protoType-->null
//So we search here(product).If we find it great, if not, we search here(object.protoType).,null So the chain ends and we stop looking for more stuff.
const product = {
  name: "Influence",
};

//hasOwnProperty method =>return true or false check if an object has an property by providing that a property name as argument
//If that property exists on the object, it returns True, if the property doesn't exist, it returns false.
console.log(product.hasOwnProperty("name"));
console.log(product.hasOwnProperty("price"));
console.log(product.hasOwnProperty("hasOwnProperty")); //false scince function is running (inheritance prototype)

////////////////////////////////////////////
// objects are not the only type in JavaScript that are taking advantage of prototype inheritance, all of the other types are as well. This is why  our arrays, we have access to the filter method, and it's why on all of our strings, we have access to methods like includes. So in this one we're going to analyze the prototype chain for all of those other types.

// primitive value => A primitive value is a value that does not have properties.
// It is a non object.
// There are five primitive values in JavaScript We have string,  no.,  Boolean, null and  undefined.

// Everything not in this list is an object. includes objects, but it also includes arrays and functions.
// how arrays and functions use prototyping inheritance to allow us to access that shared set of functionality.

// Object: myObject--> Object.prototype-->null
// Array : myArray-->Array.prototype-->Object.prototype-->null

// When we create arrays, we're always going to use that literal syntax.
const team = ["basketBall", "footBall"];
console.log(team);
console.log(team.hasOwnProperty("length"));

//rarely, basically never are we going to use this syntax with the constructor function.
const team2 = new Array(["Luke", "Maddison1"]);
console.log(team2);

// function :myfunc-->function.prototype-->object.prototype -->null
const getScore = () => 1;
console.log(getScore);

// so that arrays and functions are objects
////////////////////////////////////////////////////
// primitive values  (string,  no.,  Boolean)   (null and  undefined.)
// (null and  undefined.) -->These are truly primitive values.==> We will never access a property or method on them,

// but with string number and boolean, it's a little different because we know that we've definitely accessed properties on our strings.as split method convert string to array but it also not an object how ?

const product2 = "computer";
console.log(product2);

// We get computer printing, but you're going to notice it is not something that I can expand.I can't look at all of its properties and the prototype chain because it is a non object. It just has the value computer.

// how split working correctly on it
console.log(product2.split());
console.log(product2.split(""));
// behind the scenes when we access a property on our string, it converts it to an object.
// So strings, numbers and booleans are indeed primitives, but they also have what's known as an object wrapper.
// This object wrapper is what gives it all of the functionality that we're seeing here, for example, the split method for a string.

const otherProduct = new String("Phone");
console.log(otherProduct); // this time we can expand it

// prototype chain for string
// string :myString -->string.prototype -->object.prototype -->null
// Number : myNumber -->number.prototype-->object.prototype -->null
// Boolean : myBoolean-->Boolean.prototype-->object.prototype -->null
