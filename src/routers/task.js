const express = require("express");
const Task = require('../models/task')
const router = new express.Router();

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.send(task);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const taskData = await Task.find({});
    res.send(taskData);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/tasks/:id", async (req, res) => {
  console.log(req.params);
  try {
    const taskData = await Task.findById(req.params.id);
    if (!taskData) {
      res.send("ID is Not Found");
    }
    res.send(taskData);
  } catch (err) {
    res.status(500).send();
  }
});

router.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdate = ["completed", "description"];
  const isValidUpdate = updates.every((update) =>
    allowedUpdate.includes(update)
  );
  if (!isValidUpdate) {
    return res.status(404).send({ error: "Invalid Updates" });
  }
  try {

    const taskPatch = await Task.findById(req.params.id)

    updates.forEach(task=>taskPatch[task] = req.body[task]) //it will update the values of taskPatch obj from req.body payload
    taskPatch.save()
    
    // const taskPatch = await Task.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    if (!taskPatch) {
      return res.status(404).send();
    }
    res.status(201).send(taskPatch);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      console.log("Triggered ID Not found");
      res.status(404).send("ID Not found");
    }
    res.status(201).send(task);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
