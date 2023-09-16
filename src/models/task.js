const mongoose = require("mongoose");
const validator = require("validator");

const taskSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false,
    },
  }
)

taskSchema.pre('save', async function(next){
  const task = this
  console.log('just before saving')
  next()
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task