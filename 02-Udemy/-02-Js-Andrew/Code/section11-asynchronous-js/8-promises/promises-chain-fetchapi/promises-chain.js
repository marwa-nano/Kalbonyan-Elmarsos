// promises chaining  useful when trying to do two things in a row

//Callback
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callback(undefined, num * 2);
    } else {
      callback("number must be provided");
    }
  }, 2000);
};
// call halls diffecult to read,maintain
getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    //console.log(data);
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
});

// promise
//  the promise constructor function calls this function right here, it calls it with two arguments we can use. The first argument is resolve, and the second argument is reject.We can call resolve to say that things went well, that we were able to successfully perform this long running operation. We call reject. If things went poorly, if something failed along the way, whether we used invalid arguments or the data we tried to access did not exist.

//  we're creating a new instance of promise by using new with the promise constructor.So this my promise is the promise instance, the method that we're going to be accessing on it is called then that would be my promise.Then this lets us define what we want to do when we actually have the information in this case,
// to call then and we pass to then a function.This function right here gets called when the promise resolves, meaning that things went well and we get access to the data via the first argument.

const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("number must be provided");
      //resolve(`this is my success data: ${data}`);
      // reject("this is my promise error");
      // reject("this is my promise error");
    }, 2000);
  });

getDataPromise(2).then(
  (data) => {
    getDataPromise(data).then(
      (data) => {
        console.log(`promise data : ${data}`);
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (err) => {
    console.log(err);
  }
);
//////////
// promise chain
getDataPromise(10)
  .then((data) => {
    return getDataPromise(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
/////////////////
const myPromise = getDataPromise(123);
myPromise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);

// You cannot resolve twice, you cannot reject twice.You cannot resolve and then reject or reject and then resolve.You can call one one time.Everything else is going to be ignored.

// So with promises we can reject or resolve the promise a single time with a single value.
