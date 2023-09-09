const s = async (a, b)=>{
    if(a < 0 || b < 0){
        throw new Error("Negative Number!")
    }
    const sum = a+b;
    console.log(sum)
    return sum;
}   //aync function returns a promise object -> inside the block will be the resolved value from Promise Object
console.log(s(1,2))  

s(10, 20).then(res=>console.log(res))
.catch(e=>console.log(e))