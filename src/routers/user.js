const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.post("/users", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/login", async (req, res)=>{
  try{
    const user = await User.findByCredentials(req.body.email, req.body.password);
    res.send(user)
  }catch(e){
    res.status(400).send()
  }
})

router.get("/users", async (req, res) => {
  try {
    const userData = await User.find({});
    res.send(userData);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/users/:id", async (req, res) => {
  //using request parameter
  console.log(req.params);
  try {
    const userData = await User.findById(req.params.id);
    if (!userData) {
      return res.status(404).send("Not Found!");
    }
    res.send(userData);
  } catch (e) {
    console.log("Inside Error");
    res.status(500).send(e);
  }
});

router.patch("/users/:id", async (req, res) => {
  //setting up the validation for the property you want to validate
  const updates = Object.keys(req.body); //will convert the Object Keys to Array of Strings
  const allowedUpdate = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdate.includes(update)
  ); //every will check if the callback is returning true for every iteration within the array. if one if the value is false it will return false

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    //middleware method to update
    const userPatch = await User.findById(req.params.id);
    updates.forEach((user) => (userPatch[user] = req.body[user])); //here we are iterating through updates to update the values req.body -> ie. validation of properties entered by user

    //this is where the middleware will get executed to save the data
    await userPatch.save();

    if (!userPatch) {
      return res.status(404).send();
    }
    res.send(userPatch);
  } catch (err) {
    console.log("Inside Error");
    res.status(500).send(err);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).send("User Not Found!");
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
