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

    db.collection("users")
      .deleteMany({
        age: 27,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    db.collection("tasks")
      .deleteOne({
        description: "clean kitchen",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

////////////////Delete//////////////////
/// challenge//////
// Goal : Use deleteone to remove a task
// 1. Grab the description for the task you want to remove
// 2. Setup the call with the quely
// 3. Use promise methods to setup the success / error handlers
// 4. Test your work !
