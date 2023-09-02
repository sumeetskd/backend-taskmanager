const mongoose = require("mongoose");
const validator = require("validator")

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

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     trim: true,
//     lowercase: true,
//     required: true,
//     validate(value){
//       if(!validator.isEmail(value)){
//         throw new Error("Email is invalid")
//       }
//     }
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 6,
//     validate(value){
//       if(value.toLowerCase().includes("password")){
//         throw new Error("Password cannot contain password")
//       }
//     }
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value){
//       if(value<0){
//         throw new Error("Age must be a positive number")
//       }
//     }
//   },
// });

// const me = new User({
//   name: "Mike Jose Das  ",
//   email: "      xyz@klsl.csd     ",
//   password: "mklklklePassword"
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });


//Task - Assignment
const Task = mongoose.model("Task", {
  description: {
    type: String, 
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false,

  }
})

const task = new Task({
  description: "       Trim Task Assignment"
})

task.save()
.then(()=>{
  console.log(task)
})
.catch(err=>{
  console.log(err)
})