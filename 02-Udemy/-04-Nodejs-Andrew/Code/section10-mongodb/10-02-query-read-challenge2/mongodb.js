//CRUD =>create read update delete operation with db

const { MongoClient, ObjectID } = require("mongodb");

// localserver
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to database ");
    }
    console.log("connected correctly");
    const db = client.db(databaseName);

    // fetch data from db
    // search {name:"Marwa"}
    // fetch one
    // db.collection("users").findOne(
    //   { _id: new ObjectID("6327dbb7fb0aa2366019f9e0") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("unable to fetch data");
    //     }
    //     console.log(user);
    //   }
    // );

    // fetch multiple use (cursor )
    //     db.collection("users")
    //       .find({ age: 27 })
    //       .toArray((error, users) => {
    //         console.log(users);
    //       });
    // count of users
    //     db.collection("users")
    //       .find({ age: 27 })
    //       .count((error, count) => {
    //         console.log(count);
    //       });
    db.collection("tasks").findOne(
      { _id: new ObjectID("6327deaf7b39580940e5ecc7") },
      (error, task) => {
        if (error) {
          return console.log("unable to fetch task");
        }
        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);

////////////////////challenge2/////////////

// Goal : Use find and findOne with tasks
// 1. Use findOne to fetch the last taskby its id ( print doc to console )
// 2. Use find to fetch all tasks that are not completed ( print docs to console )
// 3. Test your work !
