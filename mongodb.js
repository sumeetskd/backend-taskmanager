//crud operation

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID
// ObjectID class is imported from the mongodb package, and you can use it to generate new unique identifiers for documents.

// We can destructure the above code
const { MongoClient, ObjectID } = require("mongodb");

const id = new ObjectID();

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to db");
    }
    console.log("Connected Correctly");

    const db = client.db(databaseName);

    //findOne by name
    db.collection("users").findOne(
      {
        name: "Subash",
      },
      (error, res) => {
        if (error) return console.log("unable to fetch");
        return console.log(res);
      }
    );

    //findOne by name and age
    db.collection("users").findOne(
      {
        name: "Subash",
        age: "1"
      },
      (error, res) => {
        if (error) return console.log("unable to find");
        return console.log(res);
      }
      // OP: is null in this case as it is able to find the name but the age is not getting matched
      // so it is throwing a empty/null value as we are unable to find the data
    );

    //findOne by _id
    db.collection("users").findOne(
      {
        // _id: "64eb8812b8a86425b888ce81"
        _id: new ObjectID("64eb8812b8a86425b888ce81")
      },
      (error, res) => {
        if (error) return console.log("unable to find");
        return console.log(res);
      }
      // OP1: is null as we have passed string value to _id whereas it requires binary data type to fetch the value from the db
      // OP2: is giving correct output as it is converting string value to binary type using the ObjectID class, which is being considered as a valid object id
      );

      //find - to fetch multiple records -> returns a cursor 
      //we can use the cursor to iterate over results
      db.collection("users").find(
        {
          age: 22
        } 
      ).toArray(
        (error, res) => {
          if (error) return console.log("unable to find");
          return console.log(res);
        }
      )

      //Task - Assignment
      db.collection('tasks').findOne({
        _id: new ObjectID("64eb6e5b3854e2395011b725")
      })
      .then((data)=>console.log(data))
      .catch((err)=>console.log(err))

      //Task - Assigment 2
      db.collection('tasks').find({
        completed: false
      })
      .toArray()
      .then((data)=>console.log(data))
      .catch((err)=>console.log(err))
  }
);
