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
