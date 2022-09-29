const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("I have Succeeded");
    }, 1000);
  } else {
    reject("i have fail");
  }
});
myPromise
  .then((value) => console.log(value))
  .catch((rejectvalue) => console.log(rejectvalue));
