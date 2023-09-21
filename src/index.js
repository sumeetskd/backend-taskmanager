const express = require("express");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

//Middleware to block GET requet
/* app.use((req, res, next)=>{
  console.log(req.method)
  if(req.method === 'GET'){
    res.send('GET requests are disabled')
  }else{
    next()
  }
}) */

//Middleware to block the side for Maintainance window
/* app.use((req, res, next)=>{
  res.status(503).send('Site is under Maintainance')
}) */

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

// const jwt = require('jsonwebtoken')

// const myFunction = async ()=>{
//   const token = jwt.sign({ _id: 'abc123' }, "thisismynewcourse", {expiresIn: '1 seconds'})
//   console.log(token)
//   const data = jwt.verify(token, "thisismynewcourse")
//   console.log(data)
// }
// myFunction()