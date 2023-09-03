const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/task-manager-api",
  { useNewUrlParser: true }
  ,
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to db");
    }
    console.log("Connected Correctly");
  }
);

//Task - Assignment
// const Task = mongoose.model("Task", {
//   description: {
//     type: String, 
//     required: true,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false,

//   }
// })
