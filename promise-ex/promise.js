const doWorkCallback = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('this is an error')
        // resolve([1,2,3])
        // resolve([2,3,4])
    }, 2000)
})

doWorkCallback
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})
//                             fulfilled
//                             /
// Promise     -- pending --> 

//                             \
//                             rejected