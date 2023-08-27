const doWorkCallback = (callback) =>{
    setTimeout(()=>{
        // callback('error', null)
        callback(undefined, [1, 2, 3])
    }, 2000)
}

doWorkCallback((error, result)=>{
    if(error) return console.log(error)
    return console.log(result)
})