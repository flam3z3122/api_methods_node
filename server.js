
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // cors will be enabled

app.get("/", (req, res)=>{
    res.send({res: "Success"})
})

app.post ("/addUser", (req,res)=>{
    console.log(req.query);
    res.send({name:"Jitu", age: 22, location:"Pune"})
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

//CORS error cross origin resourse sharing

//Front-end code

// useEffect(()=>{
//     axios.get("http://localhost:5000/").then((res)=>{
//         console.log(res);
//     })
//     axios.post("http://localhost:5000/addUser",{name:"Jitu", age:22}).then((res)=>{
//         console.log(res);
//     })
//  })