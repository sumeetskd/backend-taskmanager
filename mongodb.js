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
    
    const updatePromise = db.collection('users').updateOne({
      _id: new ObjectID("64eb68af1a7f336428940957")
    }, {
      $set: {
        name: "Ashutosh",
        age: "25"
      }
    })
    //This will return a promise, so we shall handle it using then and catch
    updatePromise.then((result)=>{
      console.log(result)
    })
    .catch(err=>{
      console.log(err)
    })
  }
);
