require("../src/db/mongoose")
const User = require("../src/models/user")

User.findByIdAndUpdate('64f18c534fb6375f1c146d9d', { age: 4 })
.then(user=>{
    console.log(user)
    return User.countDocuments({ age: 4 })
})
.then(data=>{   //chained value
    console.log(data)
})
.catch(err=>{
    console.log(err)
})