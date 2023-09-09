require('../src/db/mongoose')
const Task = require('../src/models/task')

/* Task.findByIdAndDelete("64f313d41ed5ef04ecd57f7d")
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
 */
const deleteTaskAndCount = async (id)=>{
    // const delTask = await Task.findByIdAndDelete(id);
    const countTask = await Task.countDocuments({completed: true});
    return countTask;
}

deleteTaskAndCount("64f32e574d69c841f0382f49")
.then(count=>console.log(count))
.catch(e=>console.error(e))
