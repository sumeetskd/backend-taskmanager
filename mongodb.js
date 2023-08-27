//crud operation

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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
    // db.collection('users').insertOne({
    //     name: 'Amit',
    //     age: 22
    // }, (error, res)=>{
    //     if(error)
    //         return console.log("undable to insert")
    //     return console.log(res.ops)
    // })

    db.collection("tasks").insertMany(
      [
        {
          description: "Mongo-InsertOne1",
          completed: false,
        },
        {
          description: "Mongo-InsertMany2",
          completed: false,
        },
      ],
      (err, res) => {
        if(err){
            return console.log("Error:", err);
        }
        return console.log(res.ops)
      }
    );
  }
);
