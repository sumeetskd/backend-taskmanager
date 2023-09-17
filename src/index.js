const express = require("express");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");


app.use(express.json());
// going to automatically parse incoming JSON to an object, if not included, while accessing req.body will throw undefined message on console.

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port", port);
});
/* 
const bcrypt = require('bcryptjs')

const myFunction = async ()=>{
  const password = "Sumeet14"
  const hashedPassword = await bcrypt.hash(password, 8)
  console.log(password)
  console.log(hashedPassword)
  const isMatched = await bcrypt.compare('Sumeet14', hashedPassword)
  console.log(isMatched)
}
myFunction() */