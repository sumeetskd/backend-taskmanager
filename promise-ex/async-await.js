const sum = (a, b)=>{
    return new Promise((resolve, reject)=>{
        if(a < 0 || b < 0){
            reject("Non Negative Number")
        }
        setTimeout(()=>{
            resolve(a+b);
        }, 2000)
    })
}

const s = async (a, b)=>{

    const s1 = await sum(10, 20)
    const s2 = await sum(s1, -39)
    const s3 = await sum(s2, 40)
    return s3;
}   //aync function returns a promise object -> inside the block will be the resolved value from Promise Object
// console.log(s(10, 20))  

s(10, 20).then(res=>console.log(res))
.catch(e=>console.log(e))
