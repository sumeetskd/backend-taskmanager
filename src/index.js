const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// going to automatically parse incoming JSON to an object, if not included, while accessing req.body will throw undefined message on console.

app.post('/users',(req, res)=>{
    console.log(req.body)
    const user = new User(req.body)
    user.save()
    .then(()=>{
        res.send(user)
    })
    .catch(err=>{
        // res.status(400)
        res.status(400).send(err)   //we can chain the methods together
    })
    // res.send('testing!')
})

app.listen(port, ()=>{
    console.log('Server is up on port', port)
})