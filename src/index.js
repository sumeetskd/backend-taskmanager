const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// going to automatically parse incoming JSON to an object, if not included, while accessing req.body will throw undefined message on console.

app.post("/users", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  try{
    await user.save()
    res.send(user)
  }
  catch(e){
    res.status(400).send(e)
  }
});

app.get("/users", async (req, res) => {

  try{
    const userData = await User.find({})
    res.send(userData)
  }
  catch(e){
    res.status(500).send()
  }

});

app.get("/users/:id", async (req, res) => {
  //using request parameter
  console.log(req.params);
  try{
    const userData = await User.findById(req.params.id)
    if (!userData) {
      return res.status(404).send("Not Found!");
    }
    res.send(userData);
  }
  catch(e){
    console.log("Inside Error");
    res.status(500).send(e);
  }
  
});

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try{
    await task.save();
    res.send(task);
  }
  catch(err){
    res.status(400).send(err);
    console.log(err);
  }
  
});

app.get("/tasks", async (req, res) => {

  try{
    const taskData = await Task.find({})
    res.send(taskData)
  }  
  catch(err){
    res.status(500).send(err);
  }
  
});

app.get("/tasks/:id", async (req, res) => {
  console.log(req.params);
  try{
    const taskData = await Task.findById(req.params.id)
    if(!taskData){
      res.send("ID is Not Found");
    }
    res.send(taskData)
  }
  catch(err){
    res.status(500).send();
  }
  
});

app.listen(port, () => {
  console.log("Server is up on port", port);
});
