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


### ObjectID

ObjectID class is imported from the mongodb package, and you can use it to generate new unique identifiers for documents.

Each ObjectID is a 12-byte value consisting of a 4-byte timestamp, a 5-byte random value, and a 3-byte incrementing counter.

eg: 
```
const id = new ObjectID();
console.log(id)
console.log(id.getTimestamp())  // will return the date and time to milisec when the ObjectID was created

O/P:
64eb885cd8eb3c03d8a6267a
2023-08-27T17:31:08.000Z

```
**toHexString()**
Return the ObjectID id as a 24 byte hex string representation

eg:
```
const id = new ObjectID();
console.log(id)
console.log(id.getTimestamp())  // will return the date and time to milisec when the ObjectID was created
console.log(id.id.length)
console.log(id.toHexString())
console.log(id.toHexString().length)

O/P:
64eb885cd8eb3c03d8a6267a
2023-08-27T17:31:08.000Z
12
64eb885cd8eb3c03d8a6267a
24
```

### Find and FindOne

find(query, options)-> returns a {Cursor}

Creates a cursor for a query that can be used to iterate over results from MongoDB

https://mongodb.github.io/node-mongodb-native/3.7/api/Collection.html#find
