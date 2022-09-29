// combination btn Async function and Await operator
const processData1 = () => {};
console.log(processData()); // undefined
//////////////////////
// async keyword before fun defination -->async function
// Your async functions always, always, always return a promise.That promise is resolved with the value that you, the developer, choose to return from the function.
const processData2 = async () => {};
console.log(processData()); // Promise undefined
////////////////////////////////////////
const processData = async () => {
  throw new Error("something went wrong");
  return 12;
};
processData()
  .then((data) => {
    console.log("Data", data);
  })
  .catch((error) => {
    console.log("Error", error);
  });
//This catch handler is going to run if the promise that comes back from the async function reject.
