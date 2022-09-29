// truthy and falsy is n't true or false
const products = ["some product"];
const product = products[0];
//if ('any string ') { // js doesn't crash it's convert it to boolean as truthy
if (product !== undefined) {
  console.log("product found");
} else {
  console.log("product not found ");
}
// we can define our condition with another way
// truthy - values that resolve to true in boolean context [],{}
// falsy -values that resolve to false in boolean context
// falsy values -false ,0,empty string ,null,undefined,NaN not a number
// if something does or don't
