const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is up on port " + port);
});

/////////////////////challenge4////////
// / Goal : Setup the task creation endpoint
// / 1. Create a separate file for the task model ( load it into index.js )
// / 2. Create the task creation endpoint ( handle success and error )
// / 3. Test the endpoint from postman with good and bad data
////////////////////////////////////////////////

// Goal : Setup the task reading endpoints
// 1.Create an endpoint for fetching all tasks
// 2. Create an ednpoint for fetching a task by its id
// 3. Setup new requests in Postman and test your work

/////////// challenge
// refactor tasks routes to use async/await
//////////////
// allow for tasks to update
// setup route handler
// send error if unknown update
//
