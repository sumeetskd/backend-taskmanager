const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next)=>{
    try{
        const token = req.header("Authorization").replace("Bearer ", '')
        const decoded = jwt.verify(token, 'thisisataskmanager') //verify the token by passing secret key
        console.log(token)
        console.log(decoded)
    }
    catch(e){
        res.status(401).send({error: "Please Authenticate."})
    }
}

module.exports = auth; 