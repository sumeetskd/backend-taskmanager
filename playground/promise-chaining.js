require("../src/db/mongoose")
const User = require("../src/models/user")

// User.findByIdAndUpdate('64f18c534fb6375f1c146d9d', { age: 4 })
// .then(user=>{
//     console.log(user)
//     return User.countDocuments({ age: 4 })
// })
// .then(data=>{   //chained value
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err)
// })

const UpdateById = async (id, age)=>{
    const updateUser = await User.findByIdAndUpdate(id, {age: age})
    const countUser = await User.countDocuments({age: age})
    return countUser
}

UpdateById("64f18c0dca41b02dac9d6022", 200)
.then(count=>console.log("No. of user with age",200,"is",count))
.catch(e=>console.log(e))