//crud operation

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID
// ObjectID class is imported from the mongodb package, and you can use it to generate new unique identifiers for documents. 

// We can destructure the above code 
const { MongoClient, ObjectID} = require("mongodb")

const id = new ObjectID();
console.log(id)
console.log(id.getTimestamp())  // will return the date and time to milisec when the ObjectID was created
console.log(id.id.length)
console.log(id.toHexString())
console.log(id.toHexString().length)

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
    db.collection('users').insertOne({
        _id: id, //passing the id that we have created above
        name: 'Subash',
        age: 54
    }, (error, res)=>{
        if(error)
            return console.log("undable to insert")
        return console.log(res.ops)
    })

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Mongo-InsertOne1",
    //       completed: false,
    //     },
    //     {
    //       description: "Mongo-InsertMany2",
    //       completed: false,
    //     },
    //   ],
    //   (err, res) => {
    //     if(err){
    //         return console.log("Error:", err);
    //     }
    //     return console.log(res.ops)
    //   }
    // );
  }
);
