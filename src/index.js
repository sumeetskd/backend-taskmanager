const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// going to automatically parse incoming JSON to an object, if not included, while accessing req.body will throw undefined message on console.

app.post('/users',(req, res)=>{
    console.log(req.body)
    res.send('testing!')
})

app.listen(port, ()=>{
    console.log('Server is up on port', port)
})