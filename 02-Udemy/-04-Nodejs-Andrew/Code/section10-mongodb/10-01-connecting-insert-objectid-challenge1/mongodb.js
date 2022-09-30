//CRUD =>create read update delete operation with db
// const mongodb = require("mongodb");
// access to fns necessery to connect with db
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

// localserver
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to database ");
    }
    console.log("connected correctly");
    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   { _id: id, name: "Heba", age: 25 },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "jen",
    //       age: 28,
    //     },
    //     {
    //       name: "hany",
    //       age: 38,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert documents");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "read quran",
    //       completed: true,
    //     },
    //     {
    //       description: "clean kitchen",
    //       completed: false,
    //     },
    //     {
    //       description: "study for your kids",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert tasks");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
/////////////////////challenge1////////////////////
// Goal : Insert 3 tasks into a new tasks collection
// 1. Use insertMany to insert three documents
// - description ( string ) , completed ( boolean )
// 2. Setup the callback to handle error or print ops
// 3. Run the script
// 4. Refresh the database in Robo 3t and view data in tasks collection
