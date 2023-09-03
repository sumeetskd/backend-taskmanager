const add = (a, b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(a + b)
        }, 2000)
    })
}

/* add(2, 1)
.then((sum)=>{
    console.log(sum);
    add(sum, 5)
    .then(sum2=>{
        console.log(sum2)
    })
    .catch(e=>{
        console.log(e)
    })
})
.catch(e=>{
    console.log(e)
}) */

// This above code will create a the code more complex
// more asynchronous tasks, the more nested and complex our code gets.
// It can be solved using promise chaining by returning promise call 

add(2, 1)
.then((sum)=>{
    console.log(sum);
    return add(sum, 5)
    
})
.then(sum2=>{
    console.log(sum2)
})
.catch(e=>{
    console.log(e)
})