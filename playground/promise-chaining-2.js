require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete("64f313d41ed5ef04ecd57f7d")
.then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
})
.then(res=>{
    console.log(res)
})
.catch(e=>{
    console.log(e)
})
