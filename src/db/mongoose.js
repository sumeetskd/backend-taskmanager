const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/task-manager-api",
  { useNewUrlParser: true, useCreateIndex: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to db");
    }
    console.log("Connected Correctly");
  }
);
