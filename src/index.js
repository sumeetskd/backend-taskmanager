const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// going to automatically parse incoming JSON to an object, if not included, while accessing req.body will throw undefined message on console.

app.post("/users", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((err) => {
      res.status(400).send(err); //we can chain the methods together
    });
});

app.get("/users", (req, res) => {
  //finding all documents from collection
  User.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.get("/users/:id", (req, res) => {
    //using request parameter
    console.log(req.params)

    User.findById(req.params.id)
    .then((user)=>{
        if(!user){
            return res.status(404).send("Not Found!")
        }
        res.send(user)
    })
    .catch(err=>{
        console.log('Inside Error')
        res.status(500).send(err)
    })

})

app.post("/task", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.send(task);
    })
    .catch((err) => {
      res.status(400).send(err);
      console.log(err);
    });
});

app.listen(port, () => {
  console.log("Server is up on port", port);
});
