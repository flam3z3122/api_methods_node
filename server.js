
const express = require("express");
const res = require("express/lib/response");

const app = express();

app.get("/", (req, res)=>{
    res.send("Success")
})

app.post ("/addUser", (req,res)=>{
    console.log(req.query);
    res.send("Success")
})

app.put ("/editUser/:id", (req,res)=>{
    console.log(req.params);
    res.send("Success")
})
app.listen(5000)

// 2 ways to sending the data

//Query param : name: " jitu", age: "21"  jitu 21 key value pair
//url params : 12       single value,
 
//             /apiroute?name="jitu"&age="21 "