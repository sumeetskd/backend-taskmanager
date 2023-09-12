const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const app = express();
const port = process.env.PORT || 3000;

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// const route = new express.Router();
// route.get('/test', (req, res)=>{
//   res.send("Hello Test Router")
// })
// app.use(route)

app.use(express.json());
// going to automatically parse incoming JSON to an object, if not included, while accessing req.body will throw undefined message on console.

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port", port);
});
