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

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("6327d26bb2613f35b47c74d3"),
    //     },
    //     {
    //       // update operator
    //       //$set: {
    //       //   name: "Mike",
    //       // },
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .updateMany(
        {
          completed: false,
        },
        {
          $set: {
            completed: true,
          },
        }
      )
      .then((result) => {
        console.log(result.modifiedCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

///////////////promises/////////////
// enhanced for callback
// update
////////////////////challenge///////////

// Goal : Use updateMany to complete all tasks
//    1. Check the documentation for updateMany
//    2. Setup the call with the query and the updates
// // 3. Use promise methods to setup the success / error handlers
// // 4. Test your work !
