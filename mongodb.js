//crud operation

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

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
     //This will return a promise, so we shall handle it using then and catch
    db.collection('users').updateOne({
      _id: new ObjectID("64eb2e2b0614841ec0b02e8b")
    }, {
      $inc: {
        age: 1
      }
    })
    .then((result)=>{
      console.log('Updated Successfully',result)
    })
    .catch(err=>{
      console.log(err)
    })
  }
);
