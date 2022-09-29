const myArray = [1, 2, 3, 4, 5];
// The first is that we want to end up with one value in the end
// The second is when we want to persist the return or the outcome of iterating over our elements in each subsequent iteration

myArray((accumulator, currentElement) => accumulator + currentElement, 0);
//15
