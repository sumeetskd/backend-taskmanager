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


## Hashing and MiddleWare

Middleware - These are the functions which are passed to customise the behaviour of our api

Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. 

There are two Methods accessible to us for Middleware:
- pre: to do something before an event
- post: to do something after an event

### Pre

Hook is used to perform an action before an event, Pre middleware functions are executed one after another, when each middleware calls next.

### Middleware Notes:

Without Middleware: New request -> run route handler

With Middleware: New Request -> do something(perform some operations) -> run route handler

To register a new middleware function we use -
app.use() function

