###
_id -> it acts as a unique identifier to store our document in the database


(err, res) => {
if(err){
    return console.log("Error:", err);
}
return console.log(res.ops)
}

res.ops - > will print the result in document format as it is stored in the collection

### for insert
- its an async function
- a Promise is returned if no callback is passed


### for update
Some of the operators we can use with update are-
- $set
- $unset
- $rename






## Express
```
app.use(express.json())
// going to automatically parse incoming JSON to an object, if not included, while accessing req.body will throw undefined message on console.

```
