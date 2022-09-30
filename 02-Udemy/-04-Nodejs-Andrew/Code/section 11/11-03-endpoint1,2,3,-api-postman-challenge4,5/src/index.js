const express = require("express");
const mongoose = require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.post("/users", (req, res) => {
  // console.log(req.body);
  // res.send("testing!");
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
      // res.send(e);
    });
});

app.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send();
    });
});
app.get("/users/:id", (req, res) => {
  const _id = req.params.id;

  User.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch((e) => {
      res.status(500).send();
    });
  // console.log(req.params);
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/tasks", (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((e) => {
      res.status(500).send();
    });
});
app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;

  Task.findById(_id)
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    })
    .catch((e) => {
      res.status(500).send();
    });
  // console.log(req.params);
});

app.listen(port, () => {
  console.log("server is up on port " + port);
});

/////////////////////challenge4////////
// / Goal : Setup the task creation endpoint
// / 1. Create a separate file for the task model ( load it into index.js )
// / 2. Create the task creation endpoint ( handle success and error )
// / 3. Test the endpoint from postman with good and bad data
////////////////////////////////////////////////

11;
// Goal : Setup the task reading endpoints
11;
// 1.Create an endpoint for fetching all tasks
// 2. Create an ednpoint for fetching a task by its id
// 3. Setup new requests in Postman and test your work
