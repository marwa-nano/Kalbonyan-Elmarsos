const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// keep them in seperate file
// without middleware : new request-->run route handler
// with middleware : new request -> do something ->run route handler
// middleware fn
// app.use((req, res, next) => {
//   //console.log(req.method, req.path);
//   if (req.method === "GET") {
//     res.send("Get Request are disable");
//   } else {
//     next();
//   }
// });
// app.use((req, res, next) => {
//   res.status(503).send("Site is down .come back soon!");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is up on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("632d03709b5e30d2a1d3b44b");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);

  const user = await User.findById("632d03709b5e30d2a1d3b44b");
  await user.populate("tasks");
  console.log(user.tasks);
};
main();

//const jwt = require("jsonwebtoken");
// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
//     expiresIn: "7 days",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisismynewcourse");
//   console.log(data);
// };
// myFunction();
// const bcrypt = require("bcryptjs");
// const myFunction = async () => {
//   const password = "Red12345!";
//   const hasedPassword = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hasedPassword);
//   const isMatch = await bcrypt.compare("Red12345!", hasedPassword);
//   console.log(isMatch);
// };

// myFunction();

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
////////////npm i bcryptjs
// npm i jsonwebtoken
//npm run dev
