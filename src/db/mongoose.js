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

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// const me = new User({
//   name: "Amit",
//   age: 25,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const data = new Task({
  description: "Mongodb-Mongoose",
  completed: false
})

data.save()
.then(()=>{
  console.log(data)
})
.catch(error=>{
  console.log(error)
})